var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');
var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');

// Global Styles/App Styling
gulp.task('styles', function() {
  return sass('sass/screen.scss', { style: 'expanded' })
    .pipe(gulp.dest('public/css'))
});

gulp.task('autoprefixer', ['styles'], function () {
    return gulp.src('public/css/screen.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer({ browsers: ['last 4 versions'] }) ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./public/css/dest'))
});

gulp.task('minify', ['autoprefixer'], function () {
    return gulp.src('public/css/dest/screen.css')
        .pipe(rename({ suffix: '.min' }))
        .pipe(cssnano())
        .pipe(gulp.dest('./public/css/dest'))   
});


gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', ['minify']);
});


gulp.task('default', ['watch']);

