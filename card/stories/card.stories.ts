import {Meta, Story} from '@storybook/web-components';
import {Card} from '../lib/card';
import '../filled-card';
import '../elevated-card';
import '../outlined-card';
import {html} from 'lit';
import '@material/web/iconbutton/standard-icon-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/button/filled-button.js';
import './styles.scss';
import DocsPage from './docs.mdx';

type CardStory = Story<Partial<Card>>;

export default {
    title: 'Card',
    component: 'md-elevated-card',
    subcomponents: {'Outlined card': 'md-outlined-card', 'Filled card': 'md-filled-card'},
    argTypes: {
        clickable: {control: 'boolean'}
    },
    parameters: {
        cssprops: {
            'md-card-padding': {
                value: '0',
                description: 'Padding of the card',
                control: 'text'
            },
            'md-card-margin': {
                value: '0',
                description: 'Margin of the card',
                control: 'text'
            },
            'md-card-container-shape': {
                value: '12px',
                description: 'Border radius of the card',
                control: 'text'
            },
        },
        docs: {
            page: DocsPage
        }
    }
} as Meta;

export const BasicElevated: CardStory = ({clickable}) => html`
    <md-elevated-card class="demo-card" ?clickable="${clickable}">
        <img src="https://cdn.glitch.me/9c389208-b279-4e96-bcbc-e5f8712d8706%2Fplaceholder-landscape-short.png"
             alt="Background photo" class="demo-card__media">
        <div class="demo-card__header">
            <div class="demo-card__header-text">
                <div class="demo-card__title">Title</div>
                <div class="demo-card__subtitle">Subtitle</div>
            </div>
        </div>
        <div class="demo-card__secondary mdc-typography mdc-typography--body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <md-outlined-button slot="button" label="Read"></md-outlined-button>
        <md-filled-button slot="button" label="Bookmark"></md-filled-button>
        <md-standard-icon-button slot="icon" icon="favorite"></md-standard-icon-button>
        <md-standard-icon-button slot="icon" icon="share"></md-standard-icon-button>
        <md-standard-icon-button slot="icon" icon="more_vert"></md-standard-icon-button>
    </md-elevated-card>
`;
BasicElevated.parameters = {
    docs: {
        description: 'Basic elevated card'
    }
};

export const BasicOutline: CardStory = ({clickable}) => html`
    <md-outlined-card class="demo-card" ?clickable="${clickable}">
        <img src="https://cdn.glitch.me/9c389208-b279-4e96-bcbc-e5f8712d8706%2Fplaceholder-landscape-short.png"
             alt="Background photo" class="demo-card__media">
        <div class="demo-card__header">
            <div class="demo-card__header-text">
                <div class="demo-card__title">Title</div>
                <div class="demo-card__subtitle">Subtitle</div>
            </div>
        </div>
        <div class="demo-card__secondary mdc-typography mdc-typography--body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <md-outlined-button slot="button" label="Read"></md-outlined-button>
        <md-filled-button slot="button" label="Bookmark"></md-filled-button>
        <md-standard-icon-button slot="icon" icon="favorite"></md-standard-icon-button>
        <md-standard-icon-button slot="icon" icon="share"></md-standard-icon-button>
        <md-standard-icon-button slot="icon" icon="more_vert"></md-standard-icon-button>
    </md-outlined-card>
`;
BasicOutline.parameters = {
    docs: {
        description: 'Basic outlined card'
    }
};

export const BasicFilled: CardStory = ({clickable}) => html`
    <md-filled-card class="demo-card" ?clickable="${clickable}">
        <img src="https://cdn.glitch.me/9c389208-b279-4e96-bcbc-e5f8712d8706%2Fplaceholder-landscape-short.png"
             alt="Background photo" class="demo-card__media">
        <div class="demo-card__header">
            <div class="demo-card__header-text">
                <div class="demo-card__title">Title</div>
                <div class="demo-card__subtitle">Subtitle</div>
            </div>
        </div>
        <div class="demo-card__secondary mdc-typography mdc-typography--body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <md-outlined-button slot="button" label="Read"></md-outlined-button>
        <md-filled-button slot="button" label="Bookmark"></md-filled-button>
        <md-standard-icon-button slot="icon" icon="favorite"></md-standard-icon-button>
        <md-standard-icon-button slot="icon" icon="share"></md-standard-icon-button>
        <md-standard-icon-button slot="icon" icon="more_vert"></md-standard-icon-button>
    </md-filled-card>
`;
BasicFilled.parameters = {
    docs: {
        description: 'Basic filled card'
    }
};

export const BasicWithHeader: CardStory = ({clickable}) => html`
    <md-elevated-card clickable class="demo-card" ?clickable="${clickable}">
        <div class="demo-card__header">
            <div class="demo-card__header-text">
                <div class="demo-card__title">Title</div>
                <div class="demo-card__subtitle">Subtitle</div>
            </div>
        </div>
        <img src="https://cdn.glitch.me/9c389208-b279-4e96-bcbc-e5f8712d8706%2Fplaceholder-landscape-short.png"
             alt="Background photo" class="demo-card__media">
        <div class="demo-card__secondary mdc-typography mdc-typography--body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <md-outlined-button slot="button" label="Read"></md-outlined-button>
        <md-filled-button slot="button" label="Bookmark"></md-filled-button>
        <md-standard-icon-button slot="icon" icon="favorite"></md-standard-icon-button>
        <md-standard-icon-button slot="icon" icon="share"></md-standard-icon-button>
        <md-standard-icon-button slot="icon" icon="more_vert"></md-standard-icon-button>
    </md-elevated-card>
`;

export const BasicWithHeaderAndThumbnail: CardStory = ({clickable}) => html`
    <md-elevated-card clickable class="demo-card" ?clickable="${clickable}">
        <div class="demo-card__header">
            <div class="demo-card-thumbnail"></div>
            <div class="demo-card__header-text">
                <div class="demo-card__title">Title</div>
                <div class="demo-card__subtitle">Subtitle</div>
            </div>
        </div>
        <img src="https://cdn.glitch.me/9c389208-b279-4e96-bcbc-e5f8712d8706%2Fplaceholder-landscape-short.png"
             alt="Background photo" class="demo-card__media">
        <div class="demo-card__secondary mdc-typography mdc-typography--body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <md-outlined-button slot="button" label="Read"></md-outlined-button>
        <md-filled-button slot="button" label="Bookmark"></md-filled-button>
        <md-standard-icon-button slot="icon" icon="favorite"></md-standard-icon-button>
        <md-standard-icon-button slot="icon" icon="share"></md-standard-icon-button>
        <md-standard-icon-button slot="icon" icon="more_vert"></md-standard-icon-button>
    </md-elevated-card>
`;

export const BasicWithOnlyButtons: CardStory = ({clickable}) => html`
    <md-elevated-card class="demo-card" ?clickable="${clickable}">
        <div class="demo-card__header">
            <div class="demo-card__header-text">
                <div class="demo-card__title">Title</div>
                <div class="demo-card__subtitle">Subtitle</div>
            </div>
        </div>
        <md-outlined-button slot="button" label="Read"></md-outlined-button>
        <md-filled-button slot="button" label="Bookmark"></md-filled-button>
    </md-elevated-card>
`;

export const BasicWithOnlyIcons: CardStory = ({clickable}) => html`
    <md-elevated-card class="demo-card" ?clickable="${clickable}">
        <div class="demo-card__header">
            <div class="demo-card__header-text">
                <div class="demo-card__title">Title</div>
                <div class="demo-card__subtitle">Subtitle</div>
            </div>
        </div>
        <md-standard-icon-button slot="icon" icon="favorite"></md-standard-icon-button>
        <md-standard-icon-button slot="icon" icon="share"></md-standard-icon-button>
        <md-standard-icon-button slot="icon" icon="more_vert"></md-standard-icon-button>
    </md-elevated-card>
`;
