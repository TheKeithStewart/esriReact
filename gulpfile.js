var gulp = require('gulp');
var react = require('gulp-react');

gulp.task('react', function () {
    return gulp.src(['src/client/*.js', 'src/client/**/*.js', 'src/client/**/**/*.js'])
        .pipe(react())
        .pipe(gulp.dest('dist/client'));
});

gulp.task('watch', function(){
    gulp.watch(['src/client/*.js', 'src/client/**/*.js', 'src/client/**/**/*.js'], ['react']);
});

gulp.task('default', ['react']);
