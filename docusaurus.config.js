import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'letrongv4ng',
  tagline: 'I don\'t know everything, but I want to share everything I know.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'letrongv4ng',
  projectName: 'student-hub',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: ({
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'letrongv4ng Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Collection',
        },
        {
          href: 'https://letrongvang.vercel.app/',
          label: 'Contact me',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Collection',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'I do not sharing anything about me',
          items: [
            {
              label: 'This is just facebook',
              href: 'https://facebook.com/',
            },
          ],
        },
        {
          title: 'Check out my personal projects',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/letrongv4ng/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} letrongv4ng, for FPTers with no love:D.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
