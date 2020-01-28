module.exports = () => {
    $.gulp.task('fonts', (cb) => {
        $.gulp.src($.path.src.fonts)
            .pipe($.gulp.dest($.path.build.fonts));
        cb();
    })
};