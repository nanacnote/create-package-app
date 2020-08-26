module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    watch: {
      options: {
        livereload: true, //default port @35729
      },
      files: [
        "dist/**.*",
        "docs/index.html",
        "docs/content/**/**.*",
        "docs/scripts/**.*",
        "docs/stylesheets/**.*",
      ],
      tasks: ["jshint", "browserify", "sass"],
    },
    connect: {
      server: {
        options: {
          port: 9001,
          hostname: "localhost",
          base: "./docs",
          livereload: true,
          open: true,
          keepalive: true,
        },
      },
    },
    jshint: {
      files: ["docs/scripts/**.js"],
      options: {
        esversion: 6,
        globals: {
          jQuery: true,
        },
      },
    },
    browserify: {
      options: {
        watch: true,
        banner:
          "/*! \n<%= pkg.name %>\nv<%= pkg.version %>\n<%= pkg.license %>\nby <%= pkg.author %>\ncontributors <%= pkg.contributors %>\n<%= pkg.description %>\n<%= pkg.homepage %>\n */",
        transform: [["babelify", { presets: ["@babel/preset-env"] }]],
      },
      build: {
        src: "docs/scripts/index.js",
        dest: "docs/bundle/scripts/bundle.js",
      },
    },
    sass: {
      dist: {
        options: {
          style: "expanded",
        },
        files: {
          "docs/bundle/stylesheets/main.css": "docs/stylesheets/index.scss",
        },
      },
    },
  });

  // Load the plugins
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-contrib-sass");

  // Default task(s).
  grunt.registerTask("default", [
    "watch",
    "jshint",
    "browserify",
    "sass",
    "connect",
  ]);
};
