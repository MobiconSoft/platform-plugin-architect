import multiEntry from "rollup-plugin-multi-entry";

export default [
  {
    input: {
      include: [
        'dist/libs/plugin2/esm2015/lib/plugin2.module.ngfactory.js',
        // 'node_modules/ngx-echarts/esm2015/public_api.js'
      ],
      exclude: []
    },
    plugins: [multiEntry()],
    output: [
      {
        name: 'plugin2',
        file: 'dist/apps/api/plugin2.js',
        format: 'umd'
      }
    ]
  }
];
