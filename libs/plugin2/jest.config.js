module.exports = {
  name: 'plugin2',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/plugin2',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
