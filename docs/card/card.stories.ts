import {Meta, StoryObj} from '@storybook/web-components';
import {Card} from '../../card/internal/card.js';
import '../../card/filled-card.js';
import '../../card/elevated-card.js';
import '../../card/outlined-card.js';
import {html} from 'lit';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/filled-button.js';
import './styles.scss';

type CardStory = StoryObj<Partial<Card>>;

const meta: Meta = {
  title: 'Components/Card',
  component: 'md-elevated-card',
  argTypes: {
    clickable: {
      control: 'boolean',
    },
  },
  parameters: {
    cssprops: {
      'md-card-padding': {
        value: '0',
        description: 'Padding of the card',
        control: 'text',
      },
      'md-card-margin': {
        value: '0',
        description: 'Margin of the card',
        control: 'text',
      },
      'md-card-container-shape': {
        value: '12px',
        description: 'Border radius of the card',
        control: 'text',
      },
    }
  },
};
export default meta;

export const SimpleElevated: CardStory = {
  render: ({clickable}) => html`
      <md-elevated-card outlined style="--md-card-padding: 16px;" ?clickable="${clickable}">
          Content
      </md-elevated-card>
  `,
  parameters: {
    docs: {
      description: 'A simple elevated card with no content.'
    }
  }
};

export const SimpleOutlined: CardStory = {
  render: ({clickable}) => html`
      <md-outlined-card outlined style="--md-card-padding: 16px;" ?clickable="${clickable}">
          Content
      </md-outlined-card>
  `,
  parameters: {
    docs: {
      description: 'A simple outlined card with no content.'
    }
  }
};

export const SimpleFilled: CardStory = {
  render: ({clickable}) => html`
      <md-filled-card outlined style="--md-card-padding: 16px;" ?clickable="${clickable}">
          Content
      </md-filled-card>
  `,
  parameters: {
    docs: {
      description: 'A simple filled card with no content.'
    }
  }
};

export const PrimaryActionDemo: CardStory = {
  render: ({clickable}) => html`
      <md-elevated-card ?clickable="${clickable}" class="demo-card">
          <div class="demo-card__header">
              <div class="demo-card__header-text">
                  <div class="demo-card__title">Our Changing Planet</div>
                  <div class="demo-card__subtitle">by Kurt Wagner</div>
              </div>
          </div>
      </md-elevated-card>
  `,
  parameters: {
    args: {
      clickable: true
    }
  }
};

export const MediaDemo: CardStory = {
  render: ({clickable}) => html`
      <md-elevated-card class="demo-card" ?clickable="${clickable}">
          <img src="https://cdn.glitch.me/9c389208-b279-4e96-bcbc-e5f8712d8706%2Fplaceholder-landscape-short.png"
               alt="Background photo" class="demo-card__media"/>
          <div class="demo-card__header">
              <div class="demo-card__header-text">
                  <div class="demo-card__title">Our Changing Planet</div>
                  <div class="demo-card__subtitle">by Kurt Wagner</div>
              </div>
          </div>
          <div class="demo-card__secondary mdc-typography mdc-typography--body2">
              Visit ten places on our planet that are undergoing the biggest changes today.
          </div>
      </md-elevated-card>
  `
};

export const BasicElevated: CardStory = {
  render: ({clickable}) => html`
      <md-elevated-card class="demo-card" ?clickable="${clickable}">
          <img
                  src="https://cdn.glitch.me/9c389208-b279-4e96-bcbc-e5f8712d8706%2Fplaceholder-landscape-short.png"
                  alt="Background photo"
                  class="demo-card__media"
          />
          <div class="demo-card__header">
              <div class="demo-card__header-text">
                  <div class="demo-card__title">Title</div>
                  <div class="demo-card__subtitle">Subtitle</div>
              </div>
          </div>
          <div class="demo-card__secondary mdc-typography mdc-typography--body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
          </div>
          <md-outlined-button slot="button">Read</md-outlined-button>
          <md-filled-button slot="button">Bookmark</md-filled-button>
          <md-icon-button slot="icon">
              <md-icon>favorite</md-icon>
          </md-icon-button>
          <md-icon-button slot="icon">
              <md-icon>share</md-icon>
          </md-icon-button>
          <md-icon-button slot="icon">
              <md-icon>more_vert</md-icon>
          </md-icon-button>
      </md-elevated-card>
  `,
  parameters: {
    docs: {
      description: 'Basic elevated card',
    },
  },
};
export const BasicOutline: CardStory = {
  render: ({clickable}) => html`
      <md-outlined-card class="demo-card" ?clickable="${clickable}">
          <img
                  src="https://cdn.glitch.me/9c389208-b279-4e96-bcbc-e5f8712d8706%2Fplaceholder-landscape-short.png"
                  alt="Background photo"
                  class="demo-card__media"
          />
          <div class="demo-card__header">
              <div class="demo-card__header-text">
                  <div class="demo-card__title">Title</div>
                  <div class="demo-card__subtitle">Subtitle</div>
              </div>
          </div>
          <div class="demo-card__secondary mdc-typography mdc-typography--body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
          </div>
          <md-outlined-button slot="button">Read</md-outlined-button>
          <md-filled-button slot="button">Bookmark</md-filled-button>
          <md-icon-button slot="icon">
              <md-icon>favorite</md-icon>
          </md-icon-button>
          <md-icon-button slot="icon">
              <md-icon>share</md-icon>
          </md-icon-button>
          <md-icon-button slot="icon">
              <md-icon>more_vert</md-icon>
          </md-icon-button>
      </md-outlined-card>
  `,
  parameters: {
    docs: {
      description: 'Basic outlined card',
    },
  },
};
export const BasicFilled: CardStory = {
  render: ({clickable}) => html`
      <md-filled-card class="demo-card" ?clickable="${clickable}">
          <img
                  src="https://cdn.glitch.me/9c389208-b279-4e96-bcbc-e5f8712d8706%2Fplaceholder-landscape-short.png"
                  alt="Background photo"
                  class="demo-card__media"
          />
          <div class="demo-card__header">
              <div class="demo-card__header-text">
                  <div class="demo-card__title">Title</div>
                  <div class="demo-card__subtitle">Subtitle</div>
              </div>
          </div>
          <div class="demo-card__secondary mdc-typography mdc-typography--body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
          </div>
          <md-outlined-button slot="button">Read</md-outlined-button>
          <md-filled-button slot="button">Bookmark</md-filled-button>
          <md-icon-button slot="icon">
              <md-icon>favorite</md-icon>
          </md-icon-button>
          <md-icon-button slot="icon">
              <md-icon>share</md-icon>
          </md-icon-button>
          <md-icon-button slot="icon">
              <md-icon>more_vert</md-icon>
          </md-icon-button>
      </md-filled-card>
  `,
  parameters: {
    docs: {
      description: 'Basic filled card',
    },
  },
};
export const BasicWithHeader: CardStory = {
  render: ({clickable}) => html`
      <md-elevated-card clickable class="demo-card" ?clickable="${clickable}">
          <div class="demo-card__header">
              <div class="demo-card__header-text">
                  <div class="demo-card__title">Title</div>
                  <div class="demo-card__subtitle">Subtitle</div>
              </div>
          </div>
          <img
                  src="https://cdn.glitch.me/9c389208-b279-4e96-bcbc-e5f8712d8706%2Fplaceholder-landscape-short.png"
                  alt="Background photo"
                  class="demo-card__media"
          />
          <div class="demo-card__secondary mdc-typography mdc-typography--body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
          </div>
          <md-outlined-button slot="button">Read</md-outlined-button>
          <md-filled-button slot="button">Bookmark</md-filled-button>
          <md-icon-button slot="icon">
              <md-icon>favorite</md-icon>
          </md-icon-button>
          <md-icon-button slot="icon">
              <md-icon>share</md-icon>
          </md-icon-button>
          <md-icon-button slot="icon">
              <md-icon>more_vert</md-icon>
          </md-icon-button>
      </md-elevated-card>
  `,
};

export const BasicWithHeaderAndThumbnail: CardStory = {
  render: ({clickable}) => html`
      <md-elevated-card clickable class="demo-card" ?clickable="${clickable}">
          <div class="demo-card__header">
              <div class="demo-card-thumbnail"></div>
              <div class="demo-card__header-text">
                  <div class="demo-card__title">Title</div>
                  <div class="demo-card__subtitle">Subtitle</div>
              </div>
          </div>
          <img
                  src="https://cdn.glitch.me/9c389208-b279-4e96-bcbc-e5f8712d8706%2Fplaceholder-landscape-short.png"
                  alt="Background photo"
                  class="demo-card__media"
          />
          <div class="demo-card__secondary mdc-typography mdc-typography--body2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
          </div>
          <md-outlined-button slot="button">Read</md-outlined-button>
          <md-filled-button slot="button">Bookmark</md-filled-button>
          <md-icon-button slot="icon">
              <md-icon>favorite</md-icon>
          </md-icon-button>
          <md-icon-button slot="icon">
              <md-icon>share</md-icon>
          </md-icon-button>
          <md-icon-button slot="icon">
              <md-icon>more_vert</md-icon>
          </md-icon-button>
      </md-elevated-card>
  `,
};
export const BasicWithOnlyButtons: CardStory = {
  render: ({clickable}) => html`
      <md-elevated-card class="demo-card" ?clickable="${clickable}">
          <div class="demo-card__header">
              <div class="demo-card__header-text">
                  <div class="demo-card__title">Title</div>
                  <div class="demo-card__subtitle">Subtitle</div>
              </div>
          </div>
          <md-outlined-button slot="button">Read</md-outlined-button>
          <md-filled-button slot="button">Bookmark</md-filled-button>
      </md-elevated-card>
  `,
};
export const BasicWithOnlyIcons: CardStory = {
  render: ({clickable}) => html`
      <md-elevated-card class="demo-card" ?clickable="${clickable}">
          <div class="demo-card__header">
              <div class="demo-card__header-text">
                  <div class="demo-card__title">Title</div>
                  <div class="demo-card__subtitle">Subtitle</div>
              </div>
          </div>
          <md-icon-button slot="icon">
              <md-icon>favorite</md-icon>
          </md-icon-button>
          <md-icon-button slot="icon">
              <md-icon>share</md-icon>
          </md-icon-button>
          <md-icon-button slot="icon">
              <md-icon>more_vert</md-icon>
          </md-icon-button>
      </md-elevated-card>
  `,
};
