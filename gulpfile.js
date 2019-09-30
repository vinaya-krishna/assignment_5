var { src, dest, watch} = require('gulp');
var saas = require('gulp-sass');
saas.compiler = require('node-sass');

function css() {
    return src('src/*.scss')
        .pipe(saas())
        .pipe(dest('dist/css'))
};

exports.default = function() {
    watch('src/*.scss', css);
}


// exports.default = css;

