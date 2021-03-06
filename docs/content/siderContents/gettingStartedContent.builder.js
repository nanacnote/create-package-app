const templateBuilder = require("../../scripts/templateBuilder.lock");
const pkg = require("../../../package.json");

(function () {
  const context = {
    description: pkg.description,
  };

  const source = `
  <div id="getting-started-content" class="container-fluid">
  <div class="row">
    <div class="col">
      <h3>Getting Started</h3>
      <p>{{description}}</p>
    </div>
  </div>
  <div class="row">
    <div class="col"></div>
  </div>
</div>
  `;

  templateBuilder(__filename, source, context);
})();
