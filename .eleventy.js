module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/fonts");

  
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["html"]
  };
};
