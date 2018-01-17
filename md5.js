// const crypto = require('crypto');
//
// var obj = crypto.createHash('md5');
//
// obj.update('123456');
//
// var str = obj.digest('hex');
// console.log(str);

const common = require('./libs/common');
var str = 'admin123456';
str = common.md5(str +'dsgsd2314addsfad123s@!#45r14`123f');
console.log(str);






