// Initialize modules
const { src, dest, watch, series, parallel } = require("gulp")

// Import packages
const concat = require("gulp-concat")
const terser = require("gulp-terser")
const replace = require("gulp-replace")
const browser_sync = require("browser-sync").create()

// Files path
const files = {
  jsPath: "src/js/*.js"
}

// JS task
function JS_task() {
  return src(files.jsPath)
    .pipe(concat("script.js"))
    .pipe(terser())
    .pipe(dest("dist/js"))
}

// Cachebust task
function Cachebust_task() {
  let timeString = new Date().getTime()

  return src(["index.html"])
    .pipe(replace(/cb=\d+/g, "cb=" + timeString))
    .pipe(dest("."))
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

// BrowserSync watch
function browserSyncWatch() {
  watch(["index.html"], browserSyncReload)
  watch([files.jsPath], series(parallel(JS_task), Cachebust_task))
}

// Gulp watch
function watch_task() {
  watch([files.jsPath], series(parallel(JS_task), Cachebust_task))
}

// Gulp default task
exports.default = series(parallel(JS_task), Cachebust_task, watch_task)

// Run browserSync
exports.bs = series(parallel(JS_task), Cachebust_task, browserSync, browserSyncWatch)
