const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['nl'],
});

// const NextI18NextInstance = new NextI18Next({
//   allLanguages: ["en", "nl"],
//   defaultLanguage: "en",
//   otherLanguages: ["nl"]
// });

// export default NextI18NextInstance;

// /* Optionally, export class methods as named exports */
// export const { appWithTranslation, withTranslation } = NextI18NextInstance;
