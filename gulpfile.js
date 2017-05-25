var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    rename = require('gulp-rename'),
    del = require('del'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

var paths = {
  js: './src/*.js',
  scss: './src/*.scss',
  dist: './dist/'
};

gulp.task('default', ['js','css']);

gulp.task('clean-js',function(cb){
  return del(paths.dist+"*.js" , cb);
});

gulp.task('js', ['clean-js'], function(cb){
  pump([
    gulp.src(paths.js), 

    uglify({
      output: {
        comments: 'license'
      }
    }), 

    rename({
      suffix: '.min'
    }),

    gulp.dest(paths.dist)
  ], cb);
});

gulp.task('clean-css',function(cb){
  return del(paths.dist+"*.css" , cb);
});

gulp.task('css', ['clean-css'], function(cb){
  pump([
    gulp.src(paths.scss), 
    
    sass({
      errLogToConsole: true
    }),

    autoprefixer({
      cascade: false
    }),

    rename({
      suffix: '.min'
    }),

    sass({
      outputStyle: 'compressed',
      errLogToConsole: true
    }),

    gulp.dest(paths.dist)
  ], cb);
});


gulp.task('watch', function() {
  gulp.watch(paths.src, ['default']);
});
