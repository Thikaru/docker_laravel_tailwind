const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');//追記
const glob = require('glob');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     .postCss('resources/css/app.css', 'public/css', [
//         require("tailwindcss"),
//     ]);

glob.sync('resources/sass/*.scss').map(function(file) {
    mix.sass(file, 'public/css').options({
        processCssUrls: false,
    });
});

mix.options({ 
        processCssUrls: false, //公式ドキュメント参照
        postCss: [ tailwindcss('./tailwind.config.js') ], 
    }); 

if (mix.inProduction()) {
    mix.version();
}