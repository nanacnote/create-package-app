const builder = require("../../scripts/builder");
const data = require("../data/typedoc.lock.json");

(function () {
  // structure the data from the json file into classes, methods and properties
  const dataClasses = [];
  const dataFunctions = [];
  const dataMethods = [];
  const dataProperties = [];

  data.children.forEach((e) => {
    e.children?.forEach((e) => {
      if (e.kindString === "Class") {
        dataClasses.push(e);
        e.children.forEach((e) => {
          if (e.kindString === "Method") {
            dataMethods.push(e);
          }
          if (e.kindString === "Property") {
            dataProperties.push(e);
          }
        });
      }
      if (e.kindString === "Function") {
        dataFunctions.push(e);
      }
    });
  });

  const context = {
    classes: dataClasses,
    methods: dataMethods,
    properties: dataProperties,
    functions: dataFunctions,
  };

  const source = `
  <div>
    {{#if classes}}
    <div class="px-1 pb-3 pt-5"><strong>CLASSES</strong></div>
    <div id="general-sider-links-default">
      {{#each classes}}
        <button
          class="getting-started-btn btn-lg btn-block btn-no-decoration"
          data-content-ref="class-{{this.name}}"
        >
          {{this.name}}
        </button>
      {{/each}}
    </div>
    {{/if}}
    {{#if functions}}
      <div class="px-1 pb-3 pt-5"><strong>FUNCTIONS</strong></div>
      <div id="general-sider-links-default">
        {{#each functions}}
          <button
            class="getting-started-btn btn-lg btn-block btn-no-decoration"
            data-content-ref=function-{{this.name}}
          >
            {{this.name}}
          </button>
        {{/each}}
      </div>
    {{/if}}
    {{#if properties}}
      <div class="px-1 pb-3 pt-5"><strong>PROPERTIES</strong></div>
      <div id="general-sider-links-default">
        {{#each properties}}
          <button
            class="getting-started-btn btn-lg btn-block btn-no-decoration"
            data-content-ref=property-{{this.name}}
          >
            {{this.name}}
          </button>
        {{/each}}
      </div>
    {{/if}}
    {{#if methods}}
      <div class="px-1 pb-3 pt-5"><strong>METHODS</strong></div>
      <div id="general-sider-links-default">
        {{#each methods}}
          <button
            class="getting-started-btn btn-lg btn-block btn-no-decoration"
            data-content-ref=method-{{this.name}}
          >
            {{this.name}}
          </button>
        {{/each}}
      </div>
    {{/if}}
  </div>
  `;

  builder(__filename, source, context);
})();
