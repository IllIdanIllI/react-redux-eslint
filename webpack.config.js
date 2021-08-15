const path = require('path');

const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const envalid = require('envalid');
const { str } = require('envalid');

const OUTPUT_FOLDER_NAME = 'dist';
const OUTPUT_PATH = path.resolve(__dirname, OUTPUT_FOLDER_NAME);

const validationEnvironmentVariables = (processEnv) => envalid.cleanEnv(
  processEnv,
  { EXAMPLE: str() },
);

const DEV = process.env.NODE_ENV === 'development';
const buildStyleLoaders = (extraLoader) => {
  const mainLoader = DEV
    ? 'style-loader'
    : {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: '/',
      },
    };
  const loaders = [
    mainLoader,
    {
      loader: 'css-loader',
      options: {
        modules: !!extraLoader,
      },
    }];

  if (extraLoader) loaders.push(extraLoader);

  return loaders;
};

const combinePlugins = () => {
  const plugins = [
    new CleanWebpackPlugin(),
    new HtmlPlugin({
      template: './src/index.html',
      publicPath: './',
      cache: true,
      minify: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:5].bundle.css',
      chunkFilename: 'css/[id].[contenthash:5].bundle.css',
    }),
  ];

  const env = validationEnvironmentVariables(dotenv.config().parsed);
    const envKeys = Object.keys(env).reduce((prev, next) => {
      prev[`process.env.${next}`] = JSON.stringify(env[next]);

      return prev;
    }, {});
    plugins.push(new webpack.DefinePlugin(envKeys));

    const needStat = process.env.NEED_BUNDLE_ANALYSIS;

    if (needStat) { plugins.push(new BundleAnalyzerPlugin()); }

    if (DEV) {
      plugins.push(new webpack.HotModuleReplacementPlugin());
    }

  return plugins;
};

const config = () => ({
  entry: {
    main: [path.resolve(__dirname, 'src/index.jsx')],
  },
  output: {
    path: OUTPUT_PATH,
    filename: DEV 
    ? 'js/[name].bundle.js' 
    : 'js/[name].[contenthash:5].bundle.js',
    publicPath: '/',

  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
  devtool: DEV ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              babelrc: false,
              rootMode: 'upward',
              sourceMaps: true,
              include: [
                path.resolve(__dirname, 'src'),
              ],
            },
          },
        ],
        exclude: /@babel(?:\/|\\{1,2})runtime|core-js/,
      },
      {
        test: /\.css$/,
        use: buildStyleLoaders(),
      },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: buildStyleLoaders('sass-loader'),
      },
      {
        test: /\.(png|gif|jpg|jpe?g|webm|webp)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'assets/images',
            name: DEV ? '[name].[ext]' : '[name].[contenthash:5].[ext]',
            esModule: false,
          },
        }],
      },
      {
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'assets/fonts',
            esModule: false,
            name: DEV ? '[name].[ext]' : '[name].[contenthash:5].[ext]',
          },
        }],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  plugins: combinePlugins(),
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
});

module.exports = config;
