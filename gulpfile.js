var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less',function(done) {
    return gulp.src('./src/less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('./prod/styles'));
   
});
gulp.task('less:watch', function() {
    gulp.watch('./src/less/**/*.less', gulp.series('less'));
    
})