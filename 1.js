const mysql = require('mysql');
// 1. 连接
// createConnection(连接的服务器，用户名，密码);
var db = mysql.createConnection({host: 'localhost', user:'root',password:'123456',database:"201815"});
console.log(db);
// 2. 查询
// query(干啥，回调函数)
db.query("", (err,data)=>{
    if(err){
        console.log('出错了',err)
    }else {
        console.log('成功了', data)
    }
});
var str = `\
    aaa\n\
    \n\
    dasdasfsdf2134adas\n\
    aaa\n\
    \
`;
var str2 = str.replace(/^/gm,'<p>').replace(/$/gm,'</p>');
console.log(str2);
