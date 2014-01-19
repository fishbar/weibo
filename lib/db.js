var dbcfg = '10.73.105.147:10000/weibo??auto_reconnect=true';
var mongo = require('mongoskin');

var db = mongo.db(dbcfg, {save: true, strict: false});

db.bind('users');
db.bind('feeds');

module.exports = db;