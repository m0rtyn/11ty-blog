module.exports = {
  url: process.env.URL || 'http://localhost:8080',
  siteName: 'So Meta',
  siteDescription:
    'Notes on learning about the world from the outside: brain and thinking, programming and planning, rationality and emotion',
  siteType: 'Person', // schema
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'Martyn', // i.e. Lene Saile - author's name. Must be set.
  authorEmail: 'mrtnsn.dev@gmail.com', // i.e. hola@lenesaile.com - email of the author
  authorWebsite: '', // i.e. https.://www.lenesaile.com - the personal site of the author
  themeColor: '#777', //  Manifest: defines the default theme color for the application
  themeBgColor: '#383838', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.jpg',
    twitterSite: '', // i.e. @site - twitter profile of the site
    twitterCreator: '', // i.e. @author -  twitter profile of the site
    mastodonProfile: '', // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
    telegramProfile: 'https://t.me/metabaza'
  },
  blog: {
    // this is for the rss feed
    name: 'My Blog',
    description:
      'Tell the word what you are writing about in your blog! It will show up on feed readers.'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: 'Organization name',
    street: '123 Main St.',
    city: 'Ciudad',
    state: 'Estado',
    zip: '12345',
    mobileDisplay: '+34 1234567',
    mobileCall: ' +341234567',
    email: 'hola@yoursite.com',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
