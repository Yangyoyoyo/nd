const express = require('express');
const common = require('../../libs/common');

module.exports = function () {
    var router = express.Router();

    // 检查登录状态
    router.use((req, res, next) => {
        if (!req.session['admin_id'] && req.url != '/login') { //没有登录
            res.redirect('/admin/login');
        } else {
            next();
        }
    });
    // 前台
    router.get('/', (req, res) => {
        //res.send('恭喜登录成功').end();
        res.render('admin/index.ejs', {});
    });

    // 登录
    router.use('/login', require('./login')());
    // banner
    router.use('/banners', require('./banners')());
    // coutom
    router.use('/custom', require('./custom')());

    return router;
};