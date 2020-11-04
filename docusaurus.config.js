module.exports = {
  title: 'Аксенов Тимофей',
  tagline:
    '<irony>Заслуженный фронтенд разработчик России, с макбуком и бородой</irony>',
  url: 'https://taksenov.github.io/',
  baseUrl: '/my-homepage/',
  favicon: 'img/favicon.ico',
  organizationName: 'taksenov', // Usually your GitHub org/user name.
  projectName: 'my-homepage', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Персональная страница',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      links: [
        { to: 'docs/doc1', label: 'Наработки', position: 'left' },
        { to: 'blog', label: 'Блог', position: 'left' },
        { to: 'docs/books', label: 'Книги', position: 'left' },
        {
          href: 'https://github.com/taksenov',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Знания',
          items: [
            {
              label: 'Наработки',
              to: 'docs/doc1',
            },
            {
              label: 'Блог',
              to: 'blog',
            },
            {
              label: 'Книги',
              to: 'docs/books',
            },
          ],
        },
        {
          title: 'Контакты',
          items: [
            {
              label: 'Телеграм',
              href: 'https://t.me/taksenov',
            },
            {
              label: 'Телефон',
              href: 'tel:+79222049227',
            },
            {
              label: 'Скайп',
              href: 'skype:capitanbarboz',
            },
            {
              label: 'Электропочта',
              href: 'mailto:taksenov@gmail.com',
            },
          ],
        },
        {
          title: 'Соц. сети',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/taksenov',
            },
            {
              label: 'Хабр Карьера',
              href: 'https://career.habr.com/dustikreal',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} taksenov@gmail.com. Built with ❤ and Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
