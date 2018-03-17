/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    image: '/test-site/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Aitschool' /* title for your website */,
  tagline: 'HTML、CSS and Javascript tutorials made by Aitschool.',
  url: 'https://github.com/AitSchool' /* your website url */,
  baseUrl: '/web-tutorial/' /* base url for your project */,
  projectName: 'web-tutorial',
  headerLinks: [
    {doc: 'introduction', label: 'Docs'},
    //{doc: 'doc4', label: 'API'},
    //{page: 'help', label: 'Help'},
    //{blog: true, label: 'Blog'},
    {
      href: 'https://github.com/AitSchool', label: 'Github'
    }
  ],
  users,
  /* path to images for header/footer */
  // headerIcon: 'img/docusaurus.svg',
  // footerIcon: 'img/docusaurus.svg',
  // favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    // primaryColor: '#2E8555',
    primaryColor: '#05a5d1',
    secondaryColor: '#205C3B',
  },
  /* custom fonts for website */
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Aitschool',
  organizationName: 'AitSchool', // or set an env variable ORGANIZATION_NAME
  projectName: 'web-tutorial', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/AitSchool',
  /* On page navigation for the current documentation page */
  // onPageNav: 'separate',
};

module.exports = siteConfig;
