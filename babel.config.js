module.exports = function (api) {
  api.cache(true);

  const isDev = process.env.NODE_ENV === 'development';
  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        modules: 'auto',
        loose: false,
        corejs: 3,
        targets: {
          browsers: [
            'last 4 versions',
            'not dead',
            'ie >= 9',
          ],
        },
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ];

  const plugins = [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
  ];

  if (!isDev) {
    plugins.push('transform-remove-console');
  }

  const overrides = [
    {
      test: './node_modules',
      sourceType: 'unambiguous',
    },
  ];

  return {
    presets,
    plugins,
    overrides,
  };
};
