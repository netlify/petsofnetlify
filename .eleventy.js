module.exports = function(eleventyConfig) {

  // pass image files direclty through to the output
  eleventyConfig.addPassthroughCopy("src/images");

  // minify the CSS so that we can easily inline it
  const CleanCSS = require("clean-css");
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // where do things live?
  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };

};
