Usage:

const PackageClass = require('mgroup-geoserver-proxy');

const config = {
  restApiUrl: 'path ro rest api of geoserver instance', 
  username, 
  password
}
const Package = new PackageClass(config);
Package.init(config); // OPTIONAL. CONSTRUCTOR WILL RUN .init method by default


"query" method is actually a wrapper over 'axios' lib.
Arguments with defaults are: 
{ method = 'GET', partialUrl, queryParams = {}, axiosParams = {} }

Next call will send 'GET' request to rest api and append to url '/layers.json'

Package.query({ partialUrl: 'layers.json' }).then((result) => {
  console.log(result);
})