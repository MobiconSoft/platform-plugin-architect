module.exports = {
  name: "jamong",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/jamong/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
