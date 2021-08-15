# Project agenda

There are used ReactJs, Webpack, Eslint and scss modules

## How did this set up?

### Eslint install 
- Create two files: `.eslintrc.js` and `.eslintignore` with known purpose
- Install all necessary dependencies:
  - run next command for installing starter pack of dependencies, ([source](https://www.npmjs.com/package/eslint-config-airbnb)):
    ``` console
    npx install-peerdeps --dev eslint-config-airbnb
    ```
  - install [`eslint-plugin-import-newlines`](https://www.npmjs.com/package/eslint-plugin-import-newlines) for checking whether have to make line break

### Webpack install
- Create file `webpack.config.js`.
- Install all necessary dependencies:
  - `yarn add -D webpack webpack-cli webpack-dev-server` command installs Webpack tools that will help run application. 
  - Install Babel dependencies `yarn add -D @babel/core babel-loader @babel/preset-env @babel/preset-react`.
    - babel-core: Transpile code form ES6+ to more earlier versions.
    - babel-loader: Help webpack to load components. 
    - babel-preset-env: Preset that directly transpile modern code to legacy
    - babel-preset-react: Preset that transpile JSX to JS code
  - Add additional dependencies: 
    - [css-minimizer-webpack-plugin](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/) for css optimization
    - Loaders for loading static data as [`url-loader`](https://v4.webpack.js.org/loaders/url-loader/), [`file-loader`](https://v4.webpack.js.org/loaders/file-loader/). And if svg should imported as ReactComponent can be installed [`@svgr/webpack`](https://www.npmjs.com/package/@svgr/webpack). `yarn add -D url-loader file-loader`
    - For Styles load [`MiniCssExtractPlugin`](https://webpack.js.org/plugins/mini-css-extract-plugin/) for separating css from js bundle for example. Additionally add required loaders: [`style-loader`](https://webpack.js.org/loaders/style-loader/), [`css-loader`](https://webpack.js.org/loaders/css-loader/) and [`sass-loader`](https://webpack.js.org/loaders/sass-loader/), but for last one extra [`sass`](https://www.npmjs.com/package/sass) dependency is needed. `yarn add -D style-loader css-loader sass-loader sass mini-css-extract-plugin`.
    - Install [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) for simple creation of html document.
    - Install [`clean-webpack-plugin`](https://www.npmjs.com/package/clean-webpack-plugin) for cleaning output directory with each build. It is useful when files have a cache in name.
  - Add file `babel.config.js`.
    - `yarn add -D @babel/plugin-transform-runtime @babel/plugin-proposal-class-properties babel-plugin-transform-remove-console babel-eslint` if then polyfills is needed
  - Add check of env variables, for that install `yarn add -D dotenv envalid` 
  - Add bundle analysis `yarn add -D webpack-bundle-analyzer`
  - Add [`stylelint`](https://stylelint.io/) for scss style checking.
    - Create file `stylelint.config.js`
    - Install `yarn add -D stylelint stylelint-config-standard` for installing common __stylelint__ and `yarn add -D stylelint-scss stylelint-config-recommended-scss` for __scss__ extensions.
#### Sources
- [Habr Webpack 5 config](https://habr.com/ru/post/524260/)
- [Medium Webpack with Babel](https://medium.com/nuances-of-programming/%D0%BA%D0%B0%D0%BA-%D1%81-%D0%BD%D1%83%D0%BB%D1%8F-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82-%D0%BD%D0%B0-react-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D1%83%D1%8F-webpack-4-%D0%B8-babel-172c256d228)

