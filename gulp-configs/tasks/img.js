module.exports = () => {
    $.gulp.task('img', (cb) => {
        $.gulp.src($.path.src.img)
            .pipe($.imgmin([
                $.imgmin.optipng({optimizationLevel: 5}),
                $.imgmin.gifsicle({interlaced: true}),
                $.imgmin.mozjpeg({quality: 75, progressive: true}),
                $.imgmin.svgo({
                    plugins: [
                        {removeViewBox: true},
                        {cleanupIDs: true}
                    ]
                })
            ]))
            .pipe($.gulp.dest($.path.build.img));
        cb();
    })
};