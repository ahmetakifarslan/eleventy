const fs = require('fs');
const path = require('path');

const SUPPORTED_LOCALES = ['tr', 'en', 'de', 'fr'];
const DEFAULT_LOCALE = 'tr';
const I18N_DIR = path.join(__dirname, '..', 'src', 'i18n');

const readJson = (filePath) => {
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    return raw ? JSON.parse(raw) : {};
  } catch (error) {
    console.warn(`[i18n] Could not load ${filePath}: ${error.message}`);
    return {};
  }
};

const loadTranslationFiles = () => {
  const translations = {};

  for (const locale of SUPPORTED_LOCALES) {
    const filePath = path.join(I18N_DIR, `${locale}.json`);
    translations[locale] = fs.existsSync(filePath) ? readJson(filePath) : {};
  }

  return translations;
};

const getNestedValue = (object, key) => {
  if (!object || !key) return undefined;
  return key.split('.').reduce((value, segment) => {
    if (value && Object.prototype.hasOwnProperty.call(value, segment)) {
      return value[segment];
    }
    return undefined;
  }, object);
};

const interpolate = (value, data = {}) => {
  if (typeof value !== 'string' || !data) return value;

  return Object.entries(data).reduce(
    (result, [placeholder, replacement]) =>
      result.replace(new RegExp(`{{\\s*${placeholder}\\s*}}`, 'g'), replacement),
    value
  );
};

const translate = (key, locale, translations, fallbackLocale = DEFAULT_LOCALE) => {
  const localized = getNestedValue(translations[locale] || {}, key);
  const fallback = getNestedValue(translations[fallbackLocale] || {}, key);
  return localized ?? fallback ?? `[[${key}]]`;
};

module.exports = {
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
  I18N_DIR,
  loadTranslationFiles,
  translate,
  interpolate,
};
