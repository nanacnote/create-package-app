const builder = require("../../scripts/builder.lock");
const pkg = require("../../../package.json");
const hljs = require("highlight.js");
const data = require("../../scripts/typeDocParser.lock");

(function () {
  const context = data();

  const source = `
  <div>
    {{#if classes}}
    <div><span class="h6 text-secondary">CLASSES</span></div>
    <hr/>
    <div class="pb-5">
      {{#each classes}}
        <div class="pb-5">
            <div class="h5">
                {{this.name}}
            </div>
            <div>
                {{this.children.0.signatures.0.comment.shortText}}
            </div>
            <div class="p-3">
                <div class="pb-2">
                    <div class="text-secondary"><i>Constructor</i></div>
                    <div>&emsp;{{this.children.0.signatures.0.name}}</div>
                </div>
                <div class="pb-2">
                    <div class="text-secondary"><i>Parameters</i></div>
                    <div>
                        {{#each this.children.0.signatures.0.parameters}}
                            &emsp;<span class="text-primary">{{this.name}}: </span>
                            <span>{{this.comment.shortText}}</span>
                        {{/each}}
                    </div>
                </div>
                <div class="pb-2">
                    <div class="text-secondary"><i>Returns</i></div>
                    <div>&emsp;{{this.children.0.signatures.0.comment.returns}}</div>
                </div>
                <div class="text-right">
                    <a href=${
                      pkg.homepage +
                      "/tree/master/src/modules/{{this.children.0.sources.0.fileName}}"
                    }>source [ line: {{this.children.0.sources.0.line}} ]</a>
                </div>
            </div>
        </div>
      {{/each}}
    </div>
    {{/if}}
    {{#if functions}}
    <div><span class="h6 text-secondary">FUNCTIONS</span></div>
    <hr/>
      <div class="pb-5">
        {{#each functions}}
            <div class="pb-5">
                <div class="h5">
                    {{this.name}}
                </div>
                <div class="text-secondary">
                    <i>{{this.kind}}</i>
                </div>
            </div>
        {{/each}}
      </div>
    {{/if}}
    {{#if properties}}
    <div><span class="h6 text-secondary">PROPERTIES</span></div>
    <hr/>
      <div class="pb-5">
        {{#each properties}}
            <div class="pb-5">
                <div class="h5">
                    {{this.name}}
                </div>
                <div class="text-secondary">
                    <i>{{this.kind}}</i>
                </div>
            </div>
        {{/each}}
      </div>
    {{/if}}
    {{#if methods}}
    <div><span class="h6 text-secondary">METHODS</span></div>
    <hr/>
      <div class="pb-5">
        {{#each methods}}
            <div class="pb-5">
                <div class="h5">
                    {{this.name}}
                </div>
                <div class="text-secondary">
                    <i>{{this.kind}}</i>
                </div>
            </div>
        {{/each}}
      </div>
    {{/if}}
  </div>
  `;

  builder(__filename, source, context);
})();

/* <pre>
  <code>
    ${hljs.highlightAuto('<div id="id" class="hello">Hello World!</div>').value}
  </code>
</pre>; */
