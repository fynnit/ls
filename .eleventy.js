var moment = require('moment-timezone');

module.exports = function(eleventyConfig) {
    eleventyConfig.setTemplateFormats("html, liquid, njk, md");
    eleventyConfig.addPassthroughCopy({"assets/": "/assets/"});
    eleventyConfig.addWatchTarget("./scss/");
    eleventyConfig.setFrontMatterParsingOptions({
      excerpt: true,
    });

    eleventyConfig.addFilter("dateformat", function(dateIn) {
      return moment(dateIn).tz('CEST').format('DD.MMMM');
    });

    eleventyConfig.addCollection("newsrev", function(collectionApi) {
      return collectionApi.getFilteredByTag("news").slice(0,2).sort(function(a, b) {
        return b.date - a.date;
      });
    });
    eleventyConfig.addCollection("bohnerev", function(collectionApi) {
      return collectionApi.getFilteredByTag("bohne").sort(function(a, b) {
        return b.date - a.date;
      });
    });
};
