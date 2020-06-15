module.exports = function(eleventyConfig) {
    eleventyConfig.setTemplateFormats("html, liquid, njk, md");
    eleventyConfig.addPassthroughCopy({"assets/": "/assets/"});
    eleventyConfig.addWatchTarget("./scss/");
};
