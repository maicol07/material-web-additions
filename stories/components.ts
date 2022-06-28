// @ts-ignore
import LayoutGridImage from '../packages/layout-grid/images/layout.png';

export interface Component {
  name: string;
  description: string;
  backgroundImage: string;
  released: false;
  docsLink: string;
  status: undefined | {
    text: string;
    link: string;
    afterText: string;
  },
  actions: undefined | Record<string, {
    link: string;
    title: string;
    icon: string;
  }>;
}

export default {
  'bottom-app-bar': {
    name: 'Bottom App bar',
    description: 'Bottom app bars provide access to a bottom navigation drawer and up to four actions, including the floating action button.',
    backgroundImage: 'https://lh3.googleusercontent.com/_wVZOGd-J2P8egccQlY_MI6w01npq0bfNY1zVlvWjYqPFFjLP8G0ZNcCEkB572LMGT-GkptT_rVZRgj4jSn7ibRN02pMhCIG4Qjy4A=w1064-v0',
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
    backgroundImage: 'https://github.com/material-components/material-components-web/raw/master/packages/mdc-card/images/card-elevated.png',
    released: true,
    actions: {
      'View on GitHub': {
        link: 'https://github.com/maicol07/material-web-additions/packages/card',
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
  'chip': {
    name: 'Chip',
    description: 'Chips allow users to enter information, make selections, filter content, or trigger actions. While buttons are expected to appear consistently and with familiar calls to action, chips should appear dynamically as a group of multiple interactive elements.',
    backgroundImage: 'https://lh3.googleusercontent.com/nIlSfsCutvqK4ZGO91rq9ktUX90a6t7zQhf7KFH-3RXL7gMcUDrLVFafgDr82PgnbiBuwLn8t1vvVcL66wHp9p5VYocPI-7fYb9w=w1064-v0',
    released: false,
    status: {
      text: 'TBD',
      link: 'https://github.com/material-components/material-components-web-components/issues/418'
    }
  },
  'data-table': {
    name: 'Data Table',
    description: 'Data tables display sets of data across rows and columns.',
    backgroundImage: 'https://github.com/material-components/material-components-web/raw/master/packages/mdc-data-table/images/data-table-hero.png',
    released: true,
    actions: {
      'View on GitHub': {
        link: 'https://github.com/maicol07/material-web-additions/packages/data-table',
        title: 'View on GitHub',
        icon: 'code'
      }
    }
  },
  'layout-grid': {
    name: 'Layout Grid',
    description: 'Layout grids are a flexible way to lay out content in a grid.',
    backgroundImage: LayoutGridImage,
    released: true,
    actions: {
      'View on GitHub': {
        link: 'https://github.com/maicol07/material-web-additions/packages/layout-grid',
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
    backgroundImage: 'https://lh3.googleusercontent.com/duoMsnozKjVDWvdKT25cpk9hO612I8nws7A3Bv-9NPBV8Kt8XP4ystWxdODf5uP4bDChjbT5M7Jqtbc6PoadSXF4aFmwUd7HU3bWSg=w1064-v0',
    released: false,
    status: {
      text: 'TBD',
      link: 'https://github.com/material-components/material-components-web-components/issues/1499',
    }
  }
};
