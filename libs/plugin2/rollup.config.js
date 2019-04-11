export default [
  {
    input: '../../dist/libs/plugin2/esm2015/lib/plugin2.module.ngfactory.js',
    output: [
      {
        name: 'plugin2',
        file: '../../dist/apps/api/plugin2.js',
        format: 'umd'
      }
    ]
  }
];
