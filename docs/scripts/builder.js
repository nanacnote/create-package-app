const hbs = require("handlebars");
const fs = require("fs");

/**
 * Common JS module to help build html dynamic html files from templates
 * This module must be maintain as commonjs because its use in nodejs
 * by the grunt-run task
 *
 * @param {string} __filename
 * @param {string} source
 * @param {object} context
 */
function builder(__filename, source, context) {
  const template = hbs.compile(source);
  const html = template(context);

  fs.writeFile(
    __filename.slice(0, __filename.indexOf(".")) + ".html",
    html,
    (err) => {
      if (err) throw err;
    }
  );
}
module.exports = builder;
