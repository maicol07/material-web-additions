import {Meta, Story} from '@storybook/web-components';
// @ts-ignore
import {MWCCard} from '../../packages/card';
import '../../packages/card/mwc-card';
// @ts-ignore
import '../../packages/card/mwc-card-media';
// @ts-ignore
import '../../packages/card/mwc-card-primary-action';
import {html} from 'lit';
import '@material/mwc-icon-button';
import '@material/mwc-button';
import './styles.scss';
import DocsPage from './docs.mdx';

type CardStory = Story<Partial<MWCCard>>;

export default {
    title: 'Card',
    component: 'mwc-card',
    subcomponents: {'Primary action': 'mwc-card-primary-action', 'Media': 'mwc-card-media'},
    args: {
        outlined: false,
        fullBleed: false
    },
    parameters: {
        cssprops: {
            'mdc-card-width': {
                value: 'max-content',
                description: 'Width of the card',
                control: 'text'
            },
            'mdc-card-height': {
                value: 'max-content',
                description: 'Height of the card',
                control: 'text'
            },
            'mdc-card-padding': {
                value: 'inherit',
                description: 'Padding of the card',
                control: 'text'
            },
            'mdc-card-margin': {
                value: 'inherit',
                description: 'Margin of the card',
                control: 'text'
            },
            'mdc-card-border-radius': {
                value: '4px 4px 4px 4px',
                description: 'Border radius of the card',
                control: 'text'
            },
        },
        docs: {
            page: DocsPage
        }
    }
} as Meta;

export const Basic: CardStory = (args) => html`
    <mwc-card class="demo-card" ?outlined=${args.outlined} ?fullBleed=${args.fullBleed}>
        <mwc-card-primary-action>
            <mwc-card-media aspectRatio="16-9" class="demo-card__media demo-crop-image"></mwc-card-media>
            <div class="demo-card__header">
                <div class="demo-card__header-text">
                    <div class="demo-card__title">Our Changing Planet</div>
                    <div class="demo-card__subtitle">by Kurt Wagner</div>
                </div>
            </div>
            <div class="demo-card__secondary mdc-typography mdc-typography--body2">
                Visit ten places on our planet that are undergoing the biggest changes today.
            </div>
        </mwc-card-primary-action>
        <mwc-button slot="button">Read</mwc-button>
        <mwc-button slot="button">Bookmark</mwc-button>
        <mwc-icon-button slot="icon" icon="favorite"></mwc-icon-button>
        <mwc-icon-button slot="icon" icon="share"></mwc-icon-button>
        <mwc-icon-button slot="icon" icon="more_vert"></mwc-icon-button>
    </mwc-card>
`;
Basic.parameters = {
    docs: {
        description: 'Basic card'
    }
};

export const BasicOutline: CardStory = ({outlined, fullBleed}) => html`
    <mwc-card class="demo-card" ?outlined="${outlined}" ?fullBleed="${fullBleed}">
        <mwc-card-primary-action class="mdc-card__primary-action">
          <mwc-card-media aspectRatio="16-9" class="demo-card__media demo-crop-image"></mwc-card-media>
          <div class="demo-card__header">
            <div class="demo-card__header-text">
              <div class="demo-card__title">Our Changing Planet</div>
              <div class="demo-card__subtitle">by Kurt Wagner</div>
            </div>
          </div>
          <div class="demo-card__secondary mdc-typography mdc-typography--body2">
            Visit ten places on our planet that are undergoing the biggest changes today.
          </div>
        </mwc-card-primary-action>
        <mwc-button slot="button">Read</mwc-button>
        <mwc-button slot="button">Bookmark</mwc-button>
        <mwc-icon-button slot="icon" icon="favorite"></mwc-icon-button>
        <mwc-icon-button slot="icon" icon="share"></mwc-icon-button>
        <mwc-icon-button slot="icon" icon="more_vert"></mwc-icon-button>
      </mwc-card>
`;
BasicOutline.args = {
    outlined: true
};
BasicOutline.parameters = {
    docs: {
        description: 'Outlined card'
    }
};

export const BasicWithTextOverMedia: CardStory = ({outlined, fullBleed}) => html`
    <mwc-card class="demo-card demo-card--with-text-over-media" ?outlined="${outlined}" ?fullBleed="${fullBleed}">
        <mwc-card-primary-action>
            <mwc-card-media aspectRatio="16-9" class="demo-card__media demo-crop-image">
                <div class="demo-card__media-content">
                    <div class="demo-card__header">
                        <div class="demo-card__header-text">
                            <div class="demo-card__title">Our Changing Planet</div>
                            <div class="demo-card__subtitle">by Kurt Wagner</div>
                        </div>
                    </div>
                </div>
            </mwc-card-media>
            <div class="demo-card__secondary mdc-typography mdc-typography--body2">
                Visit ten places on our planet that are undergoing the biggest changes today.
            </div>
        </mwc-card-primary-action>
        <mwc-button slot="button">Read</mwc-button>
        <mwc-button slot="button">Bookmark</mwc-button>
        <mwc-icon-button slot="icon" icon="favorite"></mwc-icon-button>
        <mwc-icon-button slot="icon" icon="share"></mwc-icon-button>
        <mwc-icon-button slot="icon" icon="more_vert"></mwc-icon-button>
    </mwc-card>
`;

export const BasicWithHeader: CardStory = ({outlined, fullBleed}) => html`
    <mwc-card class="demo-card demo-card--with-header" ?outlined="${outlined}" ?fullBleed="${fullBleed}">
        <div class="demo-card__header">
            <div class="demo-card__header-text">
                <div class="demo-card__title">Our Changing Planet</div>
                <div class="demo-card__subtitle">by Kurt Wagner</div>
            </div>
        </div>
        <mwc-card-primary-action>
            <mwc-card-media aspectRatio="16-9" class="demo-card__media demo-crop-image"></mwc-card-media>
            <div class="demo-card__secondary mdc-typography mdc-typography--body2">
                Visit ten places on our planet that are undergoing the biggest changes today.
            </div>
        </mwc-card-primary-action>
        <mwc-button slot="button">Read</mwc-button>
        <mwc-button slot="button">Bookmark</mwc-button>
        <mwc-icon-button slot="icon" icon="favorite"></mwc-icon-button>
        <mwc-icon-button slot="icon" icon="share"></mwc-icon-button>
        <mwc-icon-button slot="icon" icon="more_vert"></mwc-icon-button>
    </mwc-card>
`;

export const BasicWithHeaderAndThumbnail: CardStory = ({outlined, fullBleed}) => html`
    <mwc-card class="demo-card demo-card--with-header" ?outlined="${outlined}" ?fullBleed="${fullBleed}">
        <div class="demo-card__header">
            <div class="demo-card-thumbnail"></div>
            <div class="demo-card__header-text">
                <div class="demo-card__title">Our Changing Planet</div>
                <div class="demo-card__subtitle">by Kurt Wagner</div>
            </div>
        </div>
        <mwc-card-primary-action>
            <mwc-card-media aspectRatio="16-9" class="demo-card__media demo-crop-image"></mwc-card-media>
            <div class="demo-card__secondary mdc-typography mdc-typography--body2">
                Visit ten places on our planet that are undergoing the biggest changes today.
            </div>
        </mwc-card-primary-action>
        <mwc-button slot="button">Read</mwc-button>
        <mwc-button slot="button">Bookmark</mwc-button>
        <mwc-icon-button slot="icon" icon="favorite"></mwc-icon-button>
        <mwc-icon-button slot="icon" icon="share"></mwc-icon-button>
        <mwc-icon-button slot="icon" icon="more_vert"></mwc-icon-button>
    </mwc-card>
`;

export const BasicWithOnlyButtons: CardStory = ({outlined, fullBleed}) => html`
    <mwc-card class="demo-card" ?outlined="${outlined}" ?fullBleed="${fullBleed}">
        <mwc-card-primary-action>
            <mwc-card-media aspectRatio="16-9" class="demo-card__media demo-crop-image"></mwc-card-media>
            <div class="demo-card__header">
                <div class="demo-card__header-text">
                    <div class="demo-card__title">Our Changing Planet</div>
                    <div class="demo-card__subtitle">by Kurt Wagner</div>
                </div>
            </div>
            <div class="demo-card__secondary mdc-typography mdc-typography--body2">
                Visit ten places on our planet that are undergoing the biggest changes today.
            </div>
        </mwc-card-primary-action>
        <mwc-button slot="button">Read</mwc-button>
        <mwc-button slot="button">Bookmark</mwc-button>
    </mwc-card>
`;

export const BasicWithOnlyIcons: CardStory = ({outlined, fullBleed}) => html`
    <mwc-card class="demo-card" ?outlined="${outlined}" ?fullBleed="${fullBleed}">
        <mwc-card-primary-action>
            <mwc-card-media aspectRatio="16-9" class="demo-card__media demo-crop-image"></mwc-card-media>
            <div class="demo-card__header">
                <div class="demo-card__header-text">
                    <div class="demo-card__title">Our Changing Planet</div>
                    <div class="demo-card__subtitle">by Kurt Wagner</div>
                </div>
            </div>
            <div class="demo-card__secondary mdc-typography mdc-typography--body2">
                Visit ten places on our planet that are undergoing the biggest changes today.
            </div>
        </mwc-card-primary-action>
        <mwc-icon-button slot="icon" icon="favorite"></mwc-icon-button>
        <mwc-icon-button slot="icon" icon="share"></mwc-icon-button>
        <mwc-icon-button slot="icon" icon="more_vert"></mwc-icon-button>
    </mwc-card>
`;


export const BasicWithFullBleed: CardStory = ({outlined, fullBleed}) => html`
    <mwc-card class="demo-card" ?outlined="${outlined}" ?fullBleed="${fullBleed}">
        <mwc-card-primary-action>
            <mwc-card-media aspectRatio="16-9" class="demo-card__media demo-crop-image"></mwc-card-media>
            <div class="demo-card__header">
                <div class="demo-card__header-text">
                    <div class="demo-card__title">Our Changing Planet</div>
                    <div class="demo-card__subtitle">by Kurt Wagner</div>
                </div>
            </div>
            <div class="demo-card__secondary mdc-typography mdc-typography--body2">
                Visit ten places on our planet that are undergoing the biggest changes today.
            </div>
        </mwc-card-primary-action>
        <mwc-button slot="button">Bookmark</mwc-button>
    </mwc-card>
`;
BasicWithFullBleed.args = {fullBleed: true};

export const HorizontalImageAndText: CardStory = ({outlined, fullBleed}) => html`
    <mwc-card class="demo-card" ?outlined="${outlined}" ?fullBleed="${fullBleed}">
        <mwc-card-primary-action>
            <mwc-card-media aspectRatio="16-9" class="demo-card__media demo-crop-image"></mwc-card-media>
            <div class="demo-card__header">
                <div class="demo-card__header-text">
                    <div class="demo-card__title">Our Changing Planet</div>
                    <div class="demo-card__subtitle">by Kurt Wagner</div>
                </div>
            </div>
            <div class="demo-card__secondary mdc-typography mdc-typography--body2">
                Visit ten places on our planet that are undergoing the biggest changes today.
            </div>
        </mwc-card-primary-action>
        <mwc-button slot="button">Bookmark</mwc-button>
    </mwc-card>
`;

export const CustomBorders: CardStory = ({outlined, fullBleed}) => html`
    <mwc-card class="demo-card demo-card--with-custom-borders" ?outlined="${outlined}" ?fullBleed="${fullBleed}">
        <mwc-card-primary-action>
            <div class="demo-card__header">
                <div class="demo-card__header-text">
                    <div class="demo-card__title">Our Changing Planet</div>
                    <div class="demo-card__subtitle">by Kurt Wagner</div>
                </div>
            </div>
        </mwc-card-primary-action>
        <mwc-button slot="button">Read</mwc-button>
        <mwc-button slot="button">Bookmark</mwc-button>
        <mwc-icon-button slot="icon" icon="favorite"></mwc-icon-button>
        <mwc-icon-button slot="icon" icon="share"></mwc-icon-button>
        <mwc-icon-button slot="icon" icon="more_vert"></mwc-icon-button>
    </mwc-card>
`;

export const CustomMediaBorders: CardStory = ({outlined, fullBleed}) => html`
    <mwc-card class="demo-card demo-card--with-custom-media-borders" ?outlined="${outlined}" ?fullBleed="${fullBleed}">
        <div class="demo-card__header">
            <div class="demo-card__header-text">
                <div class="demo-card__title">Our Changing Planet</div>
                <div class="demo-card__subtitle">by Kurt Wagner</div>
            </div>
        </div>
        <mwc-card-primary-action>
            <mwc-card-media aspectRatio="16-9" class="demo-card__media demo-crop-image"></mwc-card-media>
            <div class="demo-card__secondary mdc-typography mdc-typography--body2">
                Visit ten places on our planet that are undergoing the biggest changes today.
            </div>
        </mwc-card-primary-action>
        <mwc-button slot="button">Read</mwc-button>
        <mwc-button slot="button">Bookmark</mwc-button>
        <mwc-icon-button slot="icon" icon="favorite"></mwc-icon-button>
        <mwc-icon-button slot="icon" icon="share"></mwc-icon-button>
        <mwc-icon-button slot="icon" icon="more_vert"></mwc-icon-button>
    </mwc-card>
`;
