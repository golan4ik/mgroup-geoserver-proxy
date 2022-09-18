const PackageClass = require('./index');

require('util').inspect.defaultOptions.depth = 0;
require('util').inspect.defaultOptions.depth = null;

const Package = new PackageClass();

Package.query({ partialUrl: 'layers.json' }).then((result) => {
  console.log(result);
})