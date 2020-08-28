/*! 
create-package-app
v1.0.0
CC0-1.0
by Owusu K
contributors 
Typescript ready scaffolding for writing and publishing npm packages. It comes packaged with an automated fully functional documentation website to allow you to focus on your package
https://github.com/nanacnote/create-package-app#readme
 */
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _main = require("./main.lock");

// important global variables
var ROOT_URL = "https://github.com/nanacnote";
$(document).ready(function () {
  //import all needed scripts below
  (0, _main.main)(ROOT_URL);
});

},{"./main.lock":2}],2:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.main = void 0;

var pkg = _interopRequireWildcard(require("../../package.json"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Base function required to handle and direct user interations on the website
 * - It controls reponsive behaviour
 * - It loads clickable links on the left sider panel for how to use the library
 * - It allow for customising of extra user interaction on the stage component
 *   by exposing stageBtnClickHandler() function.
 *
 * @param {string} ROOT_URL
 */
var main = function main(ROOT_URL) {
  // inject data from package.json
  $(".library-name").text(pkg.name);
  $(".library-author").text(pkg.author);
  $(".library-license").text(pkg.license);
  $(".library-contact").text(pkg.email); // inject sider links from handlebars build

  $("#general-links").load("content/siderLinks/generalLinks.html");
  $("#documentation-links").load("content/siderLinks/documentationLinks.html"); // inject getting started content, edit this page link and left border for selected item on load as initial content

  $("#stage-content").load("content/siderContents/gettingStartedContent.html", function () {
    $("#stage-edit-link>a").attr("href", "".concat(ROOT_URL, "/").concat(pkg.name, "/tree/master/docs/content/siderLinks/gettingStartedContent.html"));
    $('button[data-content-ref="gettingStartedContent"]').addClass("selected-left");
  }); // capture only sider button clicks and inject content onto stage

  $("#sider-content").delegate(".btn-no-decoration", "click", function () {
    var btnCurrentRef = $(this).data("content-ref");

    if (btnCurrentRef.split("-").length > 1) {
      // if sider item clicked is a prop method or class inject long list of
      // all prop method and class and jump to the clicked items section
      $("#stage-content").load("content/siderContents/documentationContent.html", function () {
        $("#stage-edit-link>a").attr("href", "".concat(ROOT_URL, "/").concat(pkg.name, "/tree/master/docs/content/siderContents/documentationContent.html")); // adds selected right border styling

        $(".btn-no-decoration").removeClass("selected-left");
        $("button[data-content-ref=".concat(btnCurrentRef, "]")).addClass("selected-left");
      });
    } else {
      // hydrate page with preferred content
      $("#stage-content").load("content/siderContents/".concat(btnCurrentRef, ".html"), function () {
        $("#stage-edit-link>a").attr("href", "".concat(ROOT_URL, "/").concat(pkg.name, "/tree/master/docs/content/siderContents/").concat(btnCurrentRef, ".html")); // adds selected right border stylin

        $(".btn-no-decoration").removeClass("selected-left");
        $("button[data-content-ref=".concat(btnCurrentRef, "]")).addClass("selected-left");
      });
    }
  }); // responsive navbar handler

  $("#navbar-xs-button").on("click", function () {
    if ($("#navbar-xs-drawer").hasClass("d-none")) {
      $("#navbar-xs-drawer").removeClass("d-none");
    } else {
      $("#navbar-xs-drawer").addClass("d-none");
    } // clone sidebar into popup menu


    var siderContent = $("#sider-content").clone(true);
    $("#insert-sider-content").empty().append(siderContent);
  });
};

exports.main = main;

},{"../../package.json":3}],3:[function(require,module,exports){
module.exports={
  "name": "create-package-app",
  "version": "1.0.0",
  "description": "Typescript ready scaffolding for writing and publishing npm packages. It comes packaged with an automated fully functional documentation website to allow you to focus on your package",
  "main": "dist/index.js",
  "module": "dist/index.es.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "test": "jest",
    "lint": "eslint src/modules --ext ts --ext tsx --ext js --fix",
    "rollup-build": "rollup -c",
    "rollup-watch": "rollup -cw",
    "grunt-watch": "grunt watch",
    "grunt-connect": "grunt connect",
    "dev": "rollup -cw & grunt watch & grunt connect"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/nanacnote/create-package-app.git"
  },
  "keywords": [
    "user-agent",
    "visitors",
    "visitor-analytics",
    "user-information"
  ],
  "author": "Owusu K",
  "license": "CC0-1.0",
  "bugs": {
    "url": "https://github.com/nanacnote/create-package-app/issues"
  },
  "homepage": "https://github.com/nanacnote/create-package-app#readme",
  "email": "adjeibohyen@hotmail.co.uk",
  "devDependencies": {
    "@babel/core": "^7.11.4",
    "@babel/preset-env": "^7.11.0",
    "@babel/preset-flow": "^7.10.4",
    "@babel/preset-typescript": "^7.10.4",
    "@types/jest": "^26.0.10",
    "@types/jquery": "^3.5.1",
    "@typescript-eslint/eslint-plugin": "^3.9.1",
    "@typescript-eslint/parser": "^3.9.1",
    "babelify": "^10.0.0",
    "eslint": "^7.7.0",
    "grunt": "^1.3.0",
    "grunt-babel": "^8.0.0",
    "grunt-browserify": "^5.3.0",
    "grunt-contrib-connect": "^3.0.0",
    "grunt-contrib-jshint": "^2.1.0",
    "grunt-contrib-sass": "^2.0.0",
    "grunt-contrib-watch": "^1.1.0",
    "grunt-run": "^0.8.1",
    "grunt-typedoc": "^0.2.4",
    "handlebars": "^4.7.6",
    "highlight.js": "^10.1.2",
    "jest": "^26.4.2",
    "rollup": "^2.26.4",
    "rollup-plugin-banner": "^0.2.1",
    "rollup-plugin-typescript2": "^0.27.2",
    "sass": "^1.26.10",
    "tslib": "^2.0.1",
    "typedoc": "^0.18.0",
    "typescript": "^3.9.7"
  },
  "dependencies": {}
}

},{}]},{},[1]);
