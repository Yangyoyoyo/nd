const express = require('express');
module.exports = function () {
    var router = express.Router();
    router.get('/', (req, res) => {
        res.send("我是 home 页面").end();
    });
    return router;
};