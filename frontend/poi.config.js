module.exports = {
  entry: 'src/index',
  plugins: [
    {
      resolve: '@poi/plugin-typescript',
      options: { configFile: 'tsconfig.build.json' },
    },
  ],
}
