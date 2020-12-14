const path = require("path");
const fs = require("fs");
const memoize = require("fast-memoize");
const svgo = require("svgo");
const config = require("./config");

let svgletsgo;
const getSVG = memoize((svgName, { input }) => {
  const src = fs.readFileSync(path.join(input, `${svgName}.svg`), "utf8");
  return svgletsgo.optimize(src);
});

module.exports = (eleventyConfig, options) => {
  svgletsgo = new svgo({ ...config, ...(options.svgo ? options.svgo : {}) });

  eleventyConfig.addAsyncShortcode("svg", async (svgName) => {
    const { data } = await getSVG(svgName, options);
    return data;
  });
};
