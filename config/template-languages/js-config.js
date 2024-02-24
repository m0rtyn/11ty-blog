// CSS and JavaScript as first-class citizens in Eleventy: https://pepelsbey.dev/articles/eleventy-css-js/

const esbuild = require('esbuild');
const scriptsPath = './src/assets/scripts';

module.exports = eleventyConfig => {
  eleventyConfig.addTemplateFormats('js');

  eleventyConfig.addExtension('js', {
    outputFileExtension: 'js',
    compile: async (content, path) => {
      console.debug("🚀 ~ compile: ~ path:", path)
      // if (path !== `${scriptsPath}/app.js` && path !== `${scriptsPath}/logo-animation.js`) {
      //   return;
      // }

      return async () => {
        let output = await esbuild.build({
          target: 'es2020',
          entryPoints: [path],
          minify: true,
          bundle: true,
          write: false
        });

        return output.outputFiles[0].text;
      };
    }
  });
};
