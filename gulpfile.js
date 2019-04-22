var gulp = require('gulp');
var sass = require('gulp-sass');
var changed = require('gulp-changed');
var autoprefixer = require('gulp-autoprefixer');

//? Создаем таск Sass
gulp.task('sass', function(){ 
	    gulp.src('src/media/css/sass/**/*.sass') // Берем источник
		.pipe(sass().on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%',
             'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(changed('src/media/css'))
		.pipe(gulp.dest('src/media/css')) // Выгружаем результаты
});

//? Наблюдение за sass файлами в папке sass
gulp.task('watch', function() {
	gulp.watch('src/media/css/sass/**/*.sass', ['sass']); 
});


//? Run tasks в результате в терминале можно просто прописать
//? gulp  и будет выполняться код 'watch'
gulp.task('default', ['watch']);