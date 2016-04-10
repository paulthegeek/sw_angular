var browserify = require("browserify"),
    gulp       = require("gulp"),
    gls        = require("gulp-live-server"),
    source     = require("vinyl-source-stream");

gulp.task("browserify", function() {
  var browser = browserify();

  return browser.add("./app/modules/app.module.js")
         .bundle()
         .pipe(source("bundle.js"))
         .pipe(gulp.dest("dist/js"));
});

gulp.task("dist", ["html"], function() {
});

gulp.task("html", function() {
  gulp.src(["app/index.html"])
    .pipe(gulp.dest("dist/"));

  gulp.src(["app/**/*.html"])
    .pipe(gulp.dest("dist/"));
});

gulp.task("serve", ["dist", "browserify"], function() {
  var server = gls.static(["dist"]);
  server.start();
});
