module.exports = () => {
    $.gulp.task('watch', (cb) => {
        $.watch($.path.watch.html, 'change', $.gulp.series('html-build'));
        $.watch($.path.watch.css, 'change', $.gulp.series('style-build'));
        $.watch($.path.watch.js, 'change', $.gulp.series('js-build'));
        cb();
    })
};