const express = require('express');
const common = require('../../libs/common');
const mysql = require('mysql');
var db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'learn'
});
module.exports = function () {
    var router = express.Router();

    router.get('/', (req, res) => {
        res.render('admin/login.ejs', {});
    });
    router.post('/', (req, res) => {
        var username = req.body.username;
        var password = common.md5(req.body.password + common.MD5_SUFFIX);
        db.query(`SELECT * FROM admin_table WHERE username='${username}'`, (err, data) => {
            if (err) {
                console.error(err);
                res.status(500).send('数据库错误').end();
            } else {
                if (data.length == 0) {
                    console.error(data.length);
                    res.status(400).send('没有这个用户').end();
                } else {
                    if (data[0].password == password) {
                        //成功
                        req.session['admin_id'] = data[0].id;
                        res.redirect('/admin/');
                    } else {
                        res.status(400).send('密码错误').end();
                    }
                }
            }
        });
    });

    return router;
};