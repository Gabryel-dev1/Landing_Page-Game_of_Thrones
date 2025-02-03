const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const terser = require('gulp-terser');

// Caminhos
const paths = {
  scss: {
    src: 'src/styles/*.scss',  // Pasta de origem do SASS/SCSS
    dest: 'dist/css'           // Pasta de destino para o CSS compilado
  },
  images: {
    src: 'src/images/**/*',    // Pasta de origem das imagens
    dest: 'dist/images/'       // Pasta de destino para as imagens otimizadas
  },
  scripts: {
    src: 'src/js/*.js',   // Origem dos arquivos JS
    dest: 'dist/js/'      // Destino dos arquivos minificados
  }
};

// Tarefa para compilar SCSS e comprimir CSS
function styles() {
  return gulp.src(paths.scss.src)  // Obtém os arquivos SCSS de origem
    .pipe(sass().on('error', sass.logError)) // Compila o SASS para CSS
    .pipe(cleanCSS({ compatibility: 'ie8' })) // Comprime o CSS
    .pipe(rename({ suffix: '.min' })) // Adiciona o sufixo .min ao nome do arquivo
    .pipe(gulp.dest(paths.scss.dest)); // Salva o arquivo minificado no destino
}

// Tarefa para otimizar imagens
function optimizeImages() {
  return gulp.src(paths.images.src)  // Obtém as imagens
    .pipe(imagemin([                 // Comprime as imagens
      imagemin.mozjpeg({ quality: 75, progressive: true }), // Para JPEG
      imagemin.optipng({ optimizationLevel: 5 }),           // Para PNG
      imagemin.svgo({ plugins: [{ removeViewBox: false }] }) // Para SVG
    ]))
    .pipe(gulp.dest(paths.images.dest)); // Salva as imagens otimizadas no destino
}

// Tarefa para minificar JavaScript
function scripts() {
  return gulp.src(paths.scripts.src) // Obtém os arquivos JS de origem
    .pipe(terser())                   // Minifica os arquivos JS
    .pipe(rename({ suffix: '.min' })) // Adiciona sufixo ".min"
    .pipe(gulp.dest(paths.scripts.dest)); // Salva no destino
}

// Exporta as tarefas
exports.styles = styles;
exports.images = optimizeImages;
exports.scripts = scripts;

// Tarefa padrão só estilos e codigos js (imgs não inclusas)
exports.default = gulp.series(styles, scripts);

// Observação de mudanças do SCSS
function watchFiles() {
  gulp.watch(paths.scss.src, styles);
  gulp.watch(paths.scripts.src, scripts); // Observa mudanças nos arquivos JS
}

exports.watch = gulp.series(styles, scripts, watchFiles);

