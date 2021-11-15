/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// Style preference for leading underscores.
// tslint:disable:strip-private-property-underscore

import {html, LitElement, render, TemplateResult} from 'lit';
import {customElement, property} from 'lit/decorators.js';

interface HasKeyCode {
  keyCode: number;
}

declare global {
  interface Window {
    tachometerResult: undefined|number;
  }

  interface FormDataEvent extends Event {
    readonly formData: FormData;
  }
}

@customElement('test-fixture')
export class TestFixture extends LitElement {
  @property({type: Boolean}) shouldAttachContents = true;

  @property({type: Object}) template: TemplateResult = html``;

  get root(): ShadowRoot {
    return this.shadowRoot as ShadowRoot;
  }

  override remove(): boolean {
    const parent = this.parentNode;
    if (parent) {
      parent.removeChild(this);
      return true;
    }

    return false;
  }

  attachContents(options = {awaitRender: false}) {
    this.shouldAttachContents = true;

    if (options.awaitRender) {
      const rendered = new Promise((res) => {
        requestAnimationFrame(res);
      });

      return rendered;
    } else {
      return this.updateComplete;
    }
  }

  detachContents(options = {awaitRender: false}) {
    this.shouldAttachContents = false;

    if (options.awaitRender) {
      const rendered = new Promise((res) => {
        requestAnimationFrame(res);
      });

      return rendered;
    } else {
      return this.updateComplete;
    }
  }

  protected override render() {
    return html`
      ${this.shouldAttachContents ? this.template : ''}
    `;
  }
}

const defaultOpts = {
  shouldAttachContents: true,
  document: document,
  afterRender: null,
};

interface FixtureOptions {
  shouldAttachContents: boolean;
  document: Document;
  afterRender: ((root: ShadowRoot) => Promise<void>)|null;
}

export const fixture =
    async (template: TemplateResult, options?: Partial<FixtureOptions>) => {
  const opts: FixtureOptions = {...defaultOpts, ...options};
  const tf = opts.document.createElement('test-fixture') as TestFixture;
  tf.shouldAttachContents = opts.shouldAttachContents;
  tf.template = template;


  opts.document.body.appendChild(tf);
  if (opts.shouldAttachContents) {
    await tf.updateComplete;
  }

  if (opts.afterRender) {
    await opts.afterRender(tf.root);
  }

  return tf;
};

interface MeasureFixtureCreationOpts {
  afterRender?: (root: ShadowRoot) => Promise<unknown>;
  numRenders: number;
  renderCheck?: (root: ShadowRoot) => Promise<unknown>;
}

const defaultMeasureOpts = {
  numRenders: 10,
};

export const measureFixtureCreation = async (
    template: TemplateResult,
    options?: Partial<MeasureFixtureCreationOpts>) => {
  const opts: MeasureFixtureCreationOpts = {...defaultMeasureOpts, ...options};
  const templates = new Array<TemplateResult>(opts.numRenders).fill(template);
  const renderContainer = document.createElement('div');
  const renderTargetRoot = renderContainer.attachShadow({mode: 'open'});

  document.body.appendChild(renderContainer);

  await new Promise(async (res) => {
    performance.mark('measureFixture-start');
    render(templates, renderTargetRoot);
    const firstChild = renderTargetRoot.firstElementChild;
    const lastChild = renderTargetRoot.lastElementChild;

    if (opts.renderCheck) {
      await opts.renderCheck(renderTargetRoot);
    } else if (lastChild && 'updateComplete' in lastChild) {
      await (lastChild as LitElement).updateComplete;
      document.body.offsetWidth;
    } else if (firstChild && 'updateComplete' in firstChild) {
      await (firstChild as LitElement).updateComplete;
      document.body.offsetWidth;
    } else {
      await new Promise((res) => requestAnimationFrame(res));
      document.body.offsetWidth;
    }


    if (opts.afterRender) {
      await opts.afterRender(renderTargetRoot);
    }

    // TODO(b/175626389): Expected 1 arguments, but got 0. Did you forget to
    // include 'void' in your type argument to 'Promise'?
    (res as any)();
  })
      .then(
          // this adds an extra microtask and awaits any trailing async updates
          async () => undefined);

  performance.mark('measureFixture-end');
  performance.measure(
      'fixture-creation', 'measureFixture-start', 'measureFixture-end');

  const duration = performance.getEntriesByName('fixture-creation')[0].duration;
  window.tachometerResult = duration;

  return renderTargetRoot;
};

export const rafPromise = async () => new Promise((res) => {
  requestAnimationFrame(res);
});

export const waitForEvent = (el: Element, ev: string) => new Promise((res) => {
  el.addEventListener(ev, () => {
    // TODO(b/175626389): Expected 1 arguments, but got 0. Did you forget to
    // include 'void' in your type argument to 'Promise'?
    (res as any)();
  }, {once: true});
});

export const ieSafeKeyboardEvent =
    (type: string, keycode: number) => {
      // IE es5 fix
      const init = {detail: 0, bubbles: true, cancelable: true, composed: true};
      const ev = new CustomEvent(type, init);

      // esc key
      (ev as unknown as HasKeyCode).keyCode = keycode;

      return ev;
    }

export const simulateFormDataEvent = (form: HTMLFormElement): FormData => {
  const event = new Event('formdata');
  // new FormData(form) will send a 'formdata' event and coallesce the
  // additions, but this only works in Chrome and Firefox
  const formData = new FormData();
  (event as FormDataEvent as any).formData = formData;
  form.dispatchEvent(event);
  return formData;
}
