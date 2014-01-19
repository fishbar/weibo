/**
 * [extend description]
 * @param  {[type]} obj  [description]
 * @param  {[type]} from [description]
 * @return {[type]}      [description]
 */
exports.extend = function (obj, from) {
  for (var i in from) {
    obj[i] = from[i];
  }
  return obj;
};