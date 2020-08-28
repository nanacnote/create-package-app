const builder = require("../../scripts/builder.lock");
const data = require("../data/generalSiderLinks.lock.json");

(function () {
  const context = data;
  const source = `
  <div>
    <div class="px-1 pb-3"><strong>GENERAL</strong></div>
    <div id="general-sider-links-default">
        {{#each items}}
            <button
                class="getting-started-btn btn-lg btn-block btn-no-decoration"
                data-content-ref={{this.ref}}
            >
                {{this.name}}
            </button>
        {{/each}}
    </div>
    {{#if custom}}
      <div class="px-1 pb-3 pt-5"><strong>{{custom.header}}</strong></div>
      <div id="general-sider-links-default">
          {{#each custom.items}}
              <button
                  class="getting-started-btn btn-lg btn-block btn-no-decoration"
                  data-content-ref={{this.ref}}
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
