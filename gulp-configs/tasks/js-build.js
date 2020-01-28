module.exports = () => {
    $.gulp.task('js-build', (cb) => {
        $.gulp.src($.path.src.js)
            .pipe($.rigger())
            .pipe($.sourceMaps.init())
            .pipe($.uglify())
            .pipe($.sourceMaps.write())
            .pipe($.gulp.dest($.path.build.js))
            .on('end', $.browserSync.reload({
                stream: true
            }));
        cb();
    })
};