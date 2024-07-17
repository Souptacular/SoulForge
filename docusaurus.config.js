const darkCodeTheme = require('prism-react-renderer').themes.dracula;
// needed for LaTeX compatibility
const math = require('remark-math');
const katex = require('rehype-katex');


/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'SoulForge Rewards Program',
  tagline: 'Designed to incentivize and reward innovative developers working on Plonky2, Plonky3, and Circom.',
  url: 'https://soulforge.zkbankai.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',    // Revert back to 'throw' once initial release is up
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/zk.png',
  organizationName: 'zkbankai', // Usually your GitHub org/user name.
  trailingSlash: false,
  projectName: 'SoulForge', // Usually your repo name.

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    sidebar: {
      hideable: true,
      autoCollapseCategories: true,
    },
    navbar: {
      title: 'SoulForge Program',
      logo: {
        alt: 'SoulForge Grants Program',
        src: 'img/zk.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'docs/zkbankai',
          position: 'right',
          label: 'Docs',
        },
        {
          type: 'doc',
          docId: 'applications/index',
          position: 'right',
          label: 'List of Grants',
        },
        {
          type: 'doc',
          docId: 'docs/faq',
          position: 'right',
          label: 'FAQ',
        },
        {
          type: 'doc',
          docId: 'docs/Process/how-to-apply',
          position: 'right',
          label: 'Apply',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More Info',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/zk-bankai',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/zk_bankai',
            },
            {
              label: 'Grants Community Telegram Channel',
              href: 't.me/grants-community',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} zkBankai. All rights reserved`,
    },
    prism: {
      theme: darkCodeTheme,
    },
    algolia: {
      appId: '2K941E9936',
      apiKey: '40b8fdf418b56d3370b3fdc64671d851',
      indexName: 'soulforge-grants-program',
      contextualSearch: true,
      searchParameters: {},
      searchPagePath: 'search',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '.',
          routeBasePath: '/', 
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
          beforeDefaultRehypePlugins: [
          ],
          beforeDefaultRemarkPlugins: [
          ],
          remarkPlugins: [
            math,
          ],
          rehypePlugins: [
            katex,
          ],
          exclude: [
            'applications/application-template.md',
            'applications/example-project.md',
            'applications/maintenance/maintenance-template.md',
            'applications/application-template-research.md',
            'docs/RFPs/suggestion-template.md',
            '.docusaurus/**',
            '.github/**',
            '.vscode/**',
            'build/**',
            'node_modules/**',
            'src/**',
            'static/**',
            'babel.config.js',
            '.gitignore',
            'LICENSE',
            'package-lock.json',
            'package.json',
            'sidebars.js',
            'README.md'
          ],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    function (context, options) {
      return {
        name: 'webpack-configuration-plugin',
        configureWebpack(config, isServer, utils) {
          return {
            resolve: {
              symlinks: false,
            }
          };
        }
      };
    },
  ],
};
