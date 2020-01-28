module.exports = () => {
    $.gulp.task('html-build', (cb) => {
        $.gulp.src($.path.src.html)
            .pipe($.rigger())
            .pipe($.gulp.dest($.path.build.html))
            .on('end', $.browserSync.reload({
                stream: true
            }));
        cb();
    })
};