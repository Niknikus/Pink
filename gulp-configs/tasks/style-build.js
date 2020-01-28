module.exports = () => {
    $.gulp.task('style-build', (cb) => {
        $.gulp.src($.path.src.css)
            .pipe($.sourceMaps.init())
            .pipe($.sass())
            .pipe($.preFixer())
            .pipe($.cssmin())
            .pipe($.sourceMaps.write())
            .pipe($.gulp.dest($.path.build.css))
            .pipe($.browserSync.reload({
                stream: true
            }));
        cb();
    });
};
