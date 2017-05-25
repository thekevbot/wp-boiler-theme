var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var sass        = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
    //watch files
    var files = [
        './style.css',
        './*.php'
    ];

    //initialize browsersync
    browserSync.init(files, {
        //browsersync with a php server
        proxy: "localhost:8888",
        notify: false
    });
});

// Sass task, will run when any SCSS files change & BrowserSync
// will auto-update browsers
gulp.task('sass', function(){
    return gulp.src('sass/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['> 5%'],
            cascade: false
        }))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Default task to be run with `gulp`
gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch("sass/**/*.scss", ['sass']);
});
