var urllib = require('urllib');
var utils = require('./utils');
var cookie = null;

var defaultHeaders = {
  'accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  'accept-encoding' : 'gzip,deflate,sdch',
  'accept-language' : 'en,zh-CN;q=0.8,zh;q=0.6',
  'cache-control' : 'no-cache',
  'pragma' : 'no-cache'
};
/**
 * init cookie
 * @return {[type]} [description]
 */
exports.init = function (obj) {
  cookie = obj.cookie;
};

var url = require('url');
var http = require('http');
/**
 * fetch user fans
 * @param  {[type]}   param {uid, relate, page}
 * @param  {[type]}   parse [description]
 * @param  {Function} cb    [description]
 * @return {[type]}         [description]
 */
exports.fetchUserFans = function (param, parse, cb) {
  var url = 'http://weibo.com/';
  //url += param.uid;
  //url += '/fans';
  //
  return request(url, cb);

  var headers = utils.extend({}, defaultHeaders);
  //headers.cookie = cookie;
  headers.referer = url;
  var options = {
    method: 'GET',
    headers: headers,
    dataType: 'text',
    data: {
      mod: 'fans',
      page: param.page
    }
  };
  urllib.request(url, options, function (err, data, res) {
    if (err) {
      return cb(err);
    }
    var parsed = parse(data);
    cb(err, parsed, res);
  });
};


function request(addr, cb) {
  var options = url.parse(addr);
  options.headers = utils.extend({}, defaultHeaders);
  //options.headers.cookie = cookie;
  //options.headers.referer = addr;
  var req = http.request(options, function (res) {
    //res.setEncoding('utf8');
    var buff = null;
    res.on('data', function (chunk) {
      if (buff === null) {
        buff = chunk;
      } else {
        buff = joinBuffer(buff, chunk);
      }
    });
    res.on('error', function () {
      console.log('error');
    });
    res.on('end', function () {
      cb(null, buff.toString('ascii'));
    });
  });
  req.end();
}

function joinBuffer(buf1, buf2) {
  var len1 = buf1.length;
  var len2 = buf2.length;
  var buf = new Buffer(len1 + len2);
  buf1.copy(buf, 0, 0);
  buf2.copy(buf, len1, 0);
  return buf;
}