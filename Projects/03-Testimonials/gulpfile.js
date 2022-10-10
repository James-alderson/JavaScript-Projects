// Initialize modules
const { src, dest, watch, series, parallel } = require("gulp")

// Import packages
const postcss = require("gulp-postcss")
const autoprefixer = require("autoprefixer")
const cssnano = require("cssnano")
const concat = require("gulp-concat")
const terser = require("gulp-terser")
const replace = require("gulp-replace")
const imagemin = require("gulp-imagemin")
const jsonminify = require("gulp-jsonminify")
const browser_sync = require("browser-sync").create()

// Files path
const files = {
  cssPath: "src/css/*.css",
  jsPath: "src/js/*.js",
  jsonPath: "src/json/*.json"
}

/* Css task
    1. Add vendor prefixes
    2. Minify css
=========== */
function css_task() {
  return src(files.cssPath)
    .pipe(postcss([autoprefixer("last 4 versions"), cssnano()]))
    .pipe(dest("dist/css"))
}

/* Js task
    1. Unify files
    2. Minify js
========== */
function js_task() {
  return src(files.jsPath)
    .pipe(concat("script.js"))
    .pipe(terser())
    .pipe(dest("dist/js"))
}

// Cachebust task
function cachebust_task() {
  let timeString = new Date().getTime()

  return src(["index.html"])
    .pipe(replace(/cb=\d+/g, "cb=" + timeString))
    .pipe(dest("."))
}

/* Imagemin task
    1. Compressing images
================ */
function imagemin_task() {
  return src([
    "src/images/clients/*",
    "src/images/main/*"], { base: "src/images" })
    .pipe(imagemin([
      imagemin.mozjpeg({ quality: 30, progressive: true })
    ]).on("error", error => console.log(error)))
    .pipe(dest("dist/images"))
}

/* Jsonminify task
    1. Minify json
================== */
function jsonminify_task() {
  return src(files.jsonPath)
    .pipe(jsonminify())
    .pipe(dest("dist/json"))
}

// CopyCss vendors
function copyCss_task() {
  return src("src/css/vendors/**/*", { base: "src/css" })
    .pipe(dest("dist/css"))
}

// CopyImg
function copyImg_task() {
  return src("src/images/favicon/*", { base: "src/images" })
    .pipe(dest("dist/images"))
}

// Initialize browserSync
function browserSync(callback) {
  browser_sync.init({
    server: {
      baseDir: "."
    },
    notify: {
      styles: {
        top: "auto",
        bottom: "0"
      }
    }
  })
  callback()
}

// Reload browserSync
function browserSyncReload(callback) {
  browser_sync.reload()
  callback()
}

// BrowserSync watch task
function browserSyncWatch() {
  watch(["index.html"], browserSyncReload)
  watch([files.cssPath, files.jsPath], series(parallel(css_task, js_task), cachebust_task))
}

// Gulp watch task
function watch_task() {
  watch([files.cssPath, files.jsPath], series(parallel(css_task, js_task), cachebust_task))
}

// Gulp default task
exports.default = series(parallel(css_task, js_task), cachebust_task, imagemin_task, jsonminify_task, copyCss_task, copyImg_task, watch_task)

// Run browserSync
exports.bs = series(parallel(css_task, js_task), cachebust_task, imagemin_task, jsonminify_task, copyCss_task, copyImg_task, browserSync, browserSyncWatch)
