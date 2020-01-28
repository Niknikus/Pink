module.exports = () => {
    $.gulp.task('build', $.gulp.parallel(
        'html-build',
        'js-build',
        'style-build'
    ))
};