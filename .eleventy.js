var moment = require('moment-timezone');

module.exports = function(eleventyConfig) {
    eleventyConfig.setTemplateFormats("html, liquid, njk, md");
    eleventyConfig.addPassthroughCopy({"assets/": "/assets/"});
    eleventyConfig.addWatchTarget("./scss/");
    eleventyConfig.setFrontMatterParsingOptions({
        excerpt: true,
        // Optional, default is "---"
      });

      eleventyConfig.addFilter("dateformat", function(dateIn) {
        return moment(dateIn).tz('CEST').format('DD.MMMM');
    });
};
