/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'My Portfolio',
  tagline: 'A React-based static github website template.',
  url: 'https://github.com',
  baseUrl: '/',
  organizationName: 'TiagoVXII', // Usually your GitHub org/user name.
  projectName: 'portflio', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'Home',
      logo: {
        alt: 'My Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'about',
          position: 'left',
          label: 'More Info',
        },
        {
          href: 'https://github.com/TiagoVXII',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'TiagoVXII',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'Resume',
              to: '/docs/resume',
            },
            {
              label: 'GitHub',
              to: 'https://github.com/TiagoVXII',
            },
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'About me',
              to: '/docs/about',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} MyPortfolio. Built with Docusaurus.`,
    },
  },

  themes: ['docusaurus-portfolio-theme'],
  plugins: [
    [
      'docusaurus-portfolio-plugin',
      {
        username: 'TiagoVXII',
        path: '/',
        pageTitle: 'My Site',
        pageDescription: 'About me.',
        userOptions: {},
        repoOptions: {
          type: 'all',
          sort: 'updated',
          direction: 'desc',
          numRepos: 10,
        },
      },
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
