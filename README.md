# Eleventy Plugin - SVG

A simple shortcode to fetch and optimise SVG assets. Always will always return inline SVG.

Install:

```
npm install @jamshop/eleventy-plugin-svg
```

### Usage

In `.eleventy.js`:

```js
eleventyConfig.addPlugin(svgPlugin, {
  input: "src/svg/"
});
``` 

In templates:

```
{% svg "name-of-svg" %}
```

Filename should be without the extension (plugin assumes `.svg`).