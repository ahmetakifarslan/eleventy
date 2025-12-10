const { Liquid } = require("liquidjs");
const eleventyNavigation = require("@11ty/eleventy-navigation");
const i18nData = require("./src/_data/i18n");
const textBlock = require("./src/shortcodes/text-block");

module.exports = function (eleventyConfig) {
  //
  // ----------------------------------------------------------
  // 1) LIQUID ENGINE (HTML dosyalarında Liquid kullanmak için)
  // ----------------------------------------------------------
  //
  const engine = new Liquid({
    dynamicPartials: true,
    strictFilters: false,
    strictVariables: false,
    root: ["src/_includes"],
    extname: ".html",
  });

  eleventyConfig.setLibrary("liquid", engine);
  eleventyConfig.addPlugin(eleventyNavigation, {
    showOrphanedPages: true,
  });

  eleventyConfig.setFrontMatterParsingOptions({
    // Tüm .md dosyaları layout kullanabilir
    engines: {
      markdown: eleventyConfig.javascriptFunctions,
    },
  });

  eleventyConfig.setLibrary(
    "md",
    require("markdown-it")({
      html: true,
      linkify: true,
      typographer: true,
    }),
  );

  //
  // ----------------------------------------------------------
  // 2) INSPECT / DUMP FILTER (Debugging için altın değerinde)
  // ----------------------------------------------------------
  //
  eleventyConfig.addLiquidFilter("inspect", (value) => {
    return JSON.stringify(value, null, 2);
  });

  eleventyConfig.addFilter("dump", (obj) => {
    return `<pre>${JSON.stringify(obj, null, 2)}</pre>`;
  });

  eleventyConfig.addFilter("t", function (key, locale) {
    return key.split(".").reduce((o, i) => o?.[i], i18nData[locale]) || key;
  });
  // .eleventy.js
  eleventyConfig.addFilter("byLang", function (collection, lang) {
    if (!lang || !collection) return [];
    return collection.filter((item) => {
      // eleventyNavigation item’larında lang, item.data.lang içinde olur

      return item.data?.lang === lang || item.lang === lang;
    });
  });
  //
  // ----------------------------------------------------------
  // 3) RAW SHORTCODE (Liquid’in boğulduğu HTML blokları için)
  // ----------------------------------------------------------
  //
  eleventyConfig.addPairedShortcode("raw", (content) => {
    return content;
  });

  eleventyConfig.addShortcode("textBlock", textBlock);

  //
  // ----------------------------------------------------------
  // 4) GENEL DEBUG LOG (Her derlemede veri gözetlemek)
  // ----------------------------------------------------------
  //
  eleventyConfig.addLiquidFilter("log", (value) => {
    console.log("[LOG FILTER] =>", value);
    return value;
  });

  //
  // ----------------------------------------------------------
  // 5) STATIK ASSET PASSTHROUGH
  // ----------------------------------------------------------
  //
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("favicon.ico");

  //
  // ----------------------------------------------------------
  // 6) ELEVENTY CONFIG RETURN
  // ----------------------------------------------------------
  //
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["md", "liquid", "html", "njk"],
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
    dataTemplateEngine: "liquid",
  };
};
