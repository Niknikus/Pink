
global.$ = {
    gulp: require('gulp'),
    watch: require('gulp-watch'),
    preFixer: require('gulp-autoprefixer'),
    uglify: require('gulp-uglify'),
    sass: require('gulp-sass'),
    browserSync: require('browser-sync').create(),
    sourceMaps: require('gulp-sourcemaps'),
    rigger: require('gulp-rigger'),
    cssmin: require('gulp-minify-css'),
    rimraf: require('rimraf'),
    imgmin: require('gulp-imagemin'),
    path: {
        build: {
            html: './build/',
            js: './build/js/',
            css: './build/css/',
            fonts: './build/fonts/',
            img: './build/img/'
        },
        src: {
            html: './src/*.html',
            js: './src/js/main.js',
            css: './src/css/main.scss',
            fonts: './src/fonts/**',
            img: './src/img/**'
        },
        watch: {
            html: './src/**/*.html',
            js: './src/js/**/*.js',
            css: './src/css/**/*.scss'
        },
        clean: './build',
        tasks: require('./gulp-configs/config/tasks.js')
    }
};

$.path.tasks.forEach((pathName) => {
    require(pathName)();
    }
);

$.gulp.task('default', $.gulp.parallel(
    'server',
    'watch',
));
