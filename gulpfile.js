//***********************************
//
// gulpfile
//
//***********************************
//
// Available Tasks:
//      `gulp`
//      `gulp build`
//      `gulp js`
//      `gulp js:build`
//      `gulp js:watch`
//      `gulp sass`
//      `gulp sass:build`
//      `gulp sass:watch`
//      `gulp lint`
//      `gulp lint:watch`
//
//************************************
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const browser = require('browser-sync').create();
const uglify = require('gulp-uglify');
const gulpUtil = require('gulp-util');
const livereload = require('gulp-livereload');
const rename = require('gulp-rename');
var PATHS = {
    sass: [
    '../src/scss/*'
  ],
    buildassets: [
    'build/css/',
    'build/fonts/',
    'build/js/'
  ]
};
var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};
// Load all tasks
////////////////////////////////////////////////////////////
//
// JS tasks
//
////////////////////////////////////////////////////////////
gulp.task('javascript', function () {
    return gulp.src([
        "./src/js/app.js"
    ])
        .pipe(uglify().on('error', gulpUtil.log))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('build/js/'))
        .pipe(livereload());
});

////////////////////////////////////////////////////////////
//
// Sass tasks
//
////////////////////////////////////////////////////////////
// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src([
            "./src/scss/main.scss"
        ])
        .pipe(sass({
            includePaths: PATHS.sass
        }).on('error', sass.logError))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(cssnano())
        .pipe(gulp.dest("build/css"))
        .pipe(browser.stream());
});
////////////////////////////////////////////////////////////
//
// Build tasks
//
////////////////////////////////////////////////////////////
gulp.task('build', [
    'javascript',
    'sass',
    'copy'
]);
////////////////////////////////////////////////////////////
//
// Default task
//
////////////////////////////////////////////////////////////
gulp.task('default', function () {
    gulp.watch("./src/js/*.js", ['javascript']);
    gulp.watch("./src/scss/*.scss", ['sass']);
});
