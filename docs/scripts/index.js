import { main } from "./main.lock";
import * as pkg from "../../package.json";
import { build } from "./builder.lock";
build();

// important global variables
const ROOT_URL = "https://github.com/nanacnote";

$(document).ready(function () {
  // inject data from package.json
  $(".library-name").text(pkg.name);
  $(".library-author").text(pkg.author);
  $(".library-license").text(pkg.license);
  $(".library-contact").text(pkg.email);

  //import all needed scripts below
  main(ROOT_URL);
});
