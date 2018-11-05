const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css") //压缩css
const htmlmin = require("gulp-htmlmin"); //压缩html
const uglify = require("gulp-uglify")
    // const webserver = require("gulp-webserver")
    // console.log(gulp)
const autoprefixer = require("gulp-autoprefixer"); //增加浏览器前缀
const sass = require("gulp-sass"); //编译sass

//压缩html
gulp.task("html", () => {
    gulp.src("./src/**/*.html")
        .pipe(htmlmin({
            removeEmptyAttributes: true,
            removeTagWhitespace: true,
        }))
        .pipe(gulp.dest("dist"))
})

//压缩css
gulp.task("css", () => {
    gulp.src("./src/**/*.css")
        .pipe(cleanCSS())
        .pipe(autoprefixer())
        .pipe(gulp.dest("dist"))
})

//编译sass
gulp.task("sass", () => {
    gulp.src("./src/**/*.sass")
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("dist"))
})

//压缩js
gulp.task("js", () => {
    gulp.src("./src/**/*.js")
        .pipe(uglify())
        // .pipe(autoprefixer())
        .pipe(gulp.dest("dist"))
})

gulp.task("default", ["html", "css", "js"], () => {
    console.log("处理完毕")
})