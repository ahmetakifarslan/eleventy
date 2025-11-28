const { SUPPORTED_LOCALES, DEFAULT_LOCALE, loadTranslationFiles } = require('../../lib/i18n');

module.exports = () => ({
  locales: SUPPORTED_LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  translations: loadTranslationFiles(),
});
