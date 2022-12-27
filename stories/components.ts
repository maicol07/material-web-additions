// @ts-ignore
import LayoutGridImage from '../layout-grid/images/layout.png';

export interface Component {
  name: string;
  description: string;
  image: string;
  released: boolean;
  docsLink?: string;
  status?: {
    text: string;
    link: string;
    afterText?: string;
  },
  actions?: Record<string, {
    link: string;
    title: string;
    icon: string;
  }>;
}

const components: Record<string, Component> = {
  'bottom-app-bar': {
    name: 'Bottom App bar',
    description: 'Bottom app bars provide access to a bottom navigation drawer and up to four actions, including the floating action button.',
    image: 'https://lh3.googleusercontent.com/l12xRZWyitFw6eD6eohMi1rSKb2Un_7zX-lT1wqBNJ2AOA1NCT8bv8iKCgH9k2oHP7cEYQYI0xM3eeDpDmQ88xXeHw3nHf1cOolr_-aBD-t7=s0',
    released: false,
    status: {
      text: 'TBD',
      link: 'https://github.com/material-components/material-components-web-components/issues/298',
      afterText: '(Not planned at the moment)'
    }
  },
  'card': {
    name: 'Card',
    description: 'Cards contain content and actions about a single subject.',
    image: 'https://lh3.googleusercontent.com/vpCaVW4BTaRIFnvVFZGk5C9ml0xgllqaHqC9bLEJLhCOZ5bjwVrDvhr2_Wv7QNZWzHvmgFDudEJHq_PlsKLlkUqwYnwiO7MpeILpl4nOY7T7=s0',
    released: true,
    actions: {
      'View on GitHub': {
        link: 'https://github.com/maicol07/material-web-additions/card',
        title: 'View on GitHub',
        icon: 'code'
      },
      'View original repo': {
        link: 'https://github.com/material-components/material-web/blob/mwc-card/packages/card',
        title: 'View original repo (Material web repo - mwc-card branch)',
        icon: 'source'
      }
    }
  },
  'data-table': {
    name: 'Data Table',
    description: 'Data tables display sets of data across rows and columns.',
    image: 'https://github.com/material-components/material-components-web/raw/master/packages/mdc-data-table/images/data-table-hero.png',
    released: true,
    actions: {
      'View on GitHub': {
        link: 'https://github.com/maicol07/material-web-additions/data-table',
        title: 'View on GitHub',
        icon: 'code'
      }
    }
  },
  'layout-grid': {
    name: 'Layout Grid',
    description: 'Layout grids are a flexible way to lay out content in a grid.',
    image: LayoutGridImage,
    released: true,
    actions: {
      'View on GitHub': {
        link: 'https://github.com/maicol07/material-web-additions/layout-grid',
        title: 'View on GitHub',
        icon: 'code'
      },
      'View original repo': {
        link: 'https://github.com/chromakey-io/mwc-layout-grid',
        title: 'View original repo (Chromakey)',
        icon: 'source'
      }
    }
  },
  'tooltip': {
    name: 'Tooltip',
    description: 'Tooltips display informative text when users hover over, focus on, or tap an element.',
    image: 'https://lh3.googleusercontent.com/duoMsnozKjVDWvdKT25cpk9hO612I8nws7A3Bv-9NPBV8Kt8XP4ystWxdODf5uP4bDChjbT5M7Jqtbc6PoadSXF4aFmwUd7HU3bWSg=w1064-v0',
    released: false,
    status: {
      text: 'TBD',
      link: 'https://github.com/material-components/material-components-web-components/issues/1499',
    }
  }
};
export default components;
