const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const io = require('socket.io-client');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  // target: 'electron-renderer',
  // target: 'node',
  // resolve: {
  //   fallback: {
  //     fs: false
  //   }
  // },
  // node: 'empty',
  // type: 'module',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // devtool: "source-map",
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ]
          }
        }
      },

      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.svg$/,
        type: 'asset/resource'
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: {
                  tailwindcss: {},
                  autoprefixer: {}
                }
              }
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080
    // static: {
    //   // match the output path
    //   directory: path.resolve(__dirname, 'dist'),
    //   // match the output 'publicPath'
    //   publicPath: '/'
    // }
  }
};
