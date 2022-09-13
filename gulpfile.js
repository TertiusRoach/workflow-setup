const gulp = require('gulp');
const clean = require('gulp-clean');
const { src, dest } = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglifycss = require('gulp-uglifycss');
const sourcemaps = require('gulp-sourcemaps');
const typescript = require('gulp-typescript');
const replace = require('gulp-string-replace');
const deletefile = require('gulp-delete-file');
const sass = require('gulp-sass')(require('sass'));
const stripCssComments = require('gulp-strip-css-comments');

const compileSASS = (pageName) => {
  //--|▼| Compile all the Sass files in design to CSS and copy to 'dist' folder |▼|--//
  let scssFiles = ['body', 'header', 'main', 'sidebar', 'footer', 'overlay', 'data'];
  let compile = (item, index, array) => {
    gulp
      //--| Find the *.scss files |--//
      .src(`src/design/scss/${pageName}-${array[index]}.scss`)
      //--| Pass the *.scss files through the compiler if no errors are detected |--//
      .pipe(sass().on('error', sass.logError))
      //--| Save the compiled *.css files into the 'dist' folder |--//
      .pipe(gulp.dest(`dist/design/css/`));
  };
  scssFiles.forEach(compile);
  //--|▲| Compile all the Sass files in design to CSS and copy to 'dist' folder |▲|--//
};
const cleanupCSS = (pageName) => {
  //--|▼| Remove @charset "UTF-8" from *.css files |▼|--//
  let cleanup = (pageName) => {
    var cssFiles = ['header', 'main', 'sidebar', 'footer', 'overlay', 'data'];
    var remove = (item, index, array) => {
      item = pageName;
      gulp
        .src([`dist/design/css/${item}-${array[index]}.css`])
        .pipe(
          replace('@charset "UTF-8";', function () {
            return '';
          })
        )
        .pipe(gulp.dest(`dist/design/css/cleanup/`));
    };
    cssFiles.forEach(remove);
  };
  setTimeout(cleanup, 5000, pageName);
  //--|▲| Remove @charset "UTF-8" from *.css files |▲|--//
};
const concatCSS = (pageName) => {
  let concatenate = (pageName) => {
    gulp
      //--| Find the *.css files |--//
      .src([
        `dist/design/css/${pageName}-body.css`,
        `dist/design/css/cleanup/${pageName}-header.css`,
        `dist/design/css/cleanup/${pageName}-main.css`,
        `dist/design/css/cleanup/${pageName}-sidebar.css`,
        `dist/design/css/cleanup/${pageName}-footer.css`,
        `dist/design/css/cleanup/${pageName}-overlay.css`,
        `dist/design/css/cleanup/${pageName}-data.css`,
      ])
      //--| Remove comments from *.css file |--//
      .pipe(stripCssComments())
      //--| Name the file you want to contatenate |--//
      .pipe(concat(`${pageName}-style.css`))
      .pipe(
        uglifycss({
          maxLineLen: 80,
          uglyComments: true,
        })
      )
      //--| Push the concatenated *.css file into the designated folder |--//
      .pipe(dest('dist/design/css/'));
  };
  setTimeout(concatenate, 10000, pageName);
};
const deleteCSS = (pageName) => {
  let erase = (pageName) => {
    let cssFiles = ['body', 'data', 'footer', 'header', 'main', 'overlay', 'sidebar'];
    let remove = (item, index, array) => {
      var regexp = /\w*(\-\w{8}\.js){1}$|\w*(\-\w{8}\.css){1}$/;
      gulp.src([`dist/design/css/${pageName}-${array[index]}.css`]).pipe(
        deletefile({
          reg: regexp,
          deleteMatch: false,
        })
      );
    };
    cssFiles.forEach(remove);
    return gulp.src('dist/design/css/cleanup', { read: false }).pipe(clean());
  };
  setTimeout(erase, 15000, pageName);
};
const copyHTML = (pageName) => {};
gulp.task('copyIndex', async () => {
  let pageName = 'index';

  compileSASS(pageName);
  cleanupCSS(pageName);
  concatCSS(pageName);
  deleteCSS(pageName);
});
gulp.task('test', async () => {});
//---------------------------------------//
const distFolderName = 'dist/';
const distFolder = gulp.dest(distFolderName);

exports.Compile_TypeScript = function (callback) {
  const typesRoot = gulp.dest('types/');

  const tsResult = () => {
    const typeScriptProject = typescript.createProject('tsconfig.json');
    const sourceCode = typeScriptProject.src();
    const initializeSourcemaps = sourcemaps.init();
    const IdentityMap = sourcemaps.identityMap();
    return sourceCode.pipe(initializeSourcemaps).pipe(IdentityMap).pipe(typeScriptProject());
  };
  const srcUrlMapper = (file) => {
    let x = distFolderName + file.relative.toString().split('\\').join('/') + '.map';
    console.log('RootForSourceMaps: ' + x);
    return x;
  };

  let typeScriptResult = tsResult();

  typeScriptResult.dts.pipe(typesRoot).on('error', function (err) {
    console.log('Gulp says: ' + err.message);
  });

  typeScriptResult.js
    .pipe(
      sourcemaps.write('./', {
        includeContent: false,
        addComment: true, //This "Comment" is the "COMMENT" that the browser uses to reference the file.
        sourceMappingURL: srcUrlMapper,
        sourceRoot: '../src',
      })
    )
    .pipe(distFolder);

  callback();
};

/*-----------------------------------*/

/*
exports.copyTS = function (callback) {
  const typesRoot = gulp.dest('types/');

  const tsResult = () => {
    const tsPrj = gts.createProject('tsconfig.json');
    const tsSourceCode = tsPrj.src();
    const mapsInit = gsmaps.init();
    const IdentityMap = gsmaps.identityMap();
    return tsSourceCode.pipe(mapsInit).pipe(IdentityMap).pipe(tsPrj());
  };
  const srcUrlMapper = (file) => {
    let x = distFolderName + file.relative.toString().split('\\').join('/') + '.map';
    console.log('RootForSourceMaps: ' + x);
    return x;
  };

  let tsR = tsResult();

  tsR.dts.pipe(typesRoot).on('error', function (err) {
    console.log('Gulp says: ' + err.message);
  });

  tsR.js
    .pipe(
      gsmaps.write('./', {
        includeContent: false,
        addComment: true, //This "Comment" is the "COMMENT" that the browser uses to reference the file.
        sourceMappingURL: srcUrlMapper,
        sourceRoot: '../src',
      })
    )
    .pipe(distFolder);

  callback();
};
*/
/*-----------------------------------*/
