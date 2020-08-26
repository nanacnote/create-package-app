import handlebars from "handlebars";

export const build = () => {
  const source = `
  <div>
    {{#each links}}
      <div class="px-1 pb-3 pt-5"><strong>{{this.header}}</strong></div>
      <div id="general-sider-links-default">
        {{#each this.items}}
          <button
            class="getting-started-btn btn-lg btn-block btn-no-decoration"
            data-content-ref={{../header}}-{{this}}
          >
            {{this}}
          </button>
        {{/each}}
      </div>
    {{/each}}
  </div>
  `;

  const template = handlebars.compile(source);
  const html = template(context);
  $("#class-method-prop-sider-links").html(html);
};

const context = {
  links: [
    {
      header: "CLASSES",
      items: ["universities", "hospitals"],
    },
    {
      header: "METHODS",
      items: ["getLocation", "getNumber"],
    },
    {
      header: "PROPERTIES",
      items: ["address", "hours"],
    },
  ],
};
