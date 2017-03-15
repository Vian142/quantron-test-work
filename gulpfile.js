var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', ()=> {
    return gulp.src('sass/*.+(sass|scss)')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
        .pipe(gulp.dest('css/'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', ()=> {
    browserSync({
        server: {
            baseDir: "./"
        },
        port: 7788,
        open: true,
        notify: false
    });
});


// Отслеживание
gulp.task('watch', ['sass', 'browser-sync'], () => {
    gulp.watch('./*.html', browserSync.reload);
    gulp.watch('sass/*.+(sass|scss)', ['sass']);
});


gulp.task('default', ['watch'], function () {
});