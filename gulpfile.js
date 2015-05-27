var gulp = require('gulp');
var react = require('gulp-react');

gulp.task('react', function () {
    return gulp.src(['src/client/*.js', 'src/client/**/*.js', 'src/client/**/**/*.js'])
        .pipe(react())
        .pipe(gulp.dest('dist/client'));
});

gulp.task('watch', ['react', 'style'], function(){
    gulp.watch(['src/client/*.js', 'src/client/**/*.js', 'src/client/**/**/*.js'], ['react']);
    gulp.watch(['src/client/style/**.css'], ['style']);
});

gulp.task('style', function() {
    gulp.src('src/client/style/**.css')
        .pipe(gulp.dest('dist/client/style'));
});

gulp.task('default', ['watch']);
