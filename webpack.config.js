// path
var path = require('path')

// webpack
var webpack = require('webpack')

// module
// exports
module.exports = {
  // App.vue (template) -> main.js (render) -> index.html (inject)
  entry: './src/main.js',
  // output
  output: {
    // path, path.resolve, ./dist/all_output_here
    path: path.resolve(__dirname, './dist'),
    // public path, /dist/build.js
    publicPath: '/dist/',
    // /dist/build.js
    filename: 'build.js'
  },
  // module
  module: {
    // rules
    rules: [
      {
        // test
        // .vue template
        test: /\.vue$/,
        // loader vue-loader, main loader
        loader: 'vue-loader',
        // options
        options: {
          // loaders, another loaders
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this nessessary.
            
            // scss
            // vue, style, loader
            // ! css-loader, ! sass-loader
            'scss': 'vue-style-loader!css-loader!sass-loader',
            
            // sass
            // vue, style, loader
            // ! css-loader, ! sass-loader
            // ? intended syntax
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      {
        // test
        // .js
        test: /\.js$/,
        
        // similar to above
        loader: 'babel-loader',
        
        // all the js here, exclude node_modules
        exclude: /node_modules/
      },
      {
        // another test
        // png, jpg, gif, svg
        test: /\.(png|jpg|gif|svg)$/,
        // need file loader
        loader: 'file-loader',
        // options
        options: {
          // name.txt?#
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  // resolve, alias, 
  resolve: {
    // alias
    alias: {
      // if see vue$, so vue/dist/vue.common.js
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  // dev server
  devServer: {
    // history api fall back
    historyApiFallback: true,
    // dev server no info
    noInfo: true
  },
  // performance no hints
  performance: {
    hints: false
  },
  // dev tool
  // eval source map
  devtool: '#eval-source-map'
}

// process
// env
// prod
if (process.env.NODE_ENV === 'production') {
  // module
  // exports
  // devtool
  // # source map, source map
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  
  // module
  // exports
  // plugins
  // use existing module.exports.plugin or empty array
  // concat
  // array of plugins
  module.exports.plugins = (module.exports.plugins || []).concat([
    // new webpack
    // define plugin
    // define env
    new webpack.DefinePlugin({
      // process env
      'process.env': {
        // node env
        // prod
        NODE_ENV: '"production"'
      }
    }),
    // new webpack
    // optimize uglify
    new webpack.optimize.UglifyJsPlugin({
      // source map, true
      sourceMap: true,
      // compress
      compress: {
        // no warning
        warnings: false
      }
    }),
    // new webpack
    // loader options
    // plugin
    new webpack.LoaderOptionsPlugin({
      // min, true
      minimize: true
    })
  ])
}
