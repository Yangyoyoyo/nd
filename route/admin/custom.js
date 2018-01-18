const express = require('express');
const common = require('../../libs/common');
const mysql = require('mysql');
const pathLib = require('path');
const fs = require('fs');
var db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'learn'
});

module.exports = function () {
    var router = express.Router();
    router.get('/', (req, res) => {
        db.query(`SELECT * FROM custom_evalutaion_table`, (err, evalutaions) => {
            if (err) {
                console.error(err);
                req.status(500).send('database error').end();
            } else {
                res.render('admin/custom.ejs', {evalutaions});
            }
        })
    });

    router.post('/', (req, res) => {
        var title = req.body.title;
        var description = req.body.description;
        var ext = pathLib.parse(req.files[0].originlname);
        var oldpath = req.files[0].path;
        var newpath = req.files[0].path + ext;
        var   = req.files[0].filename + ext;

        console.log(req.files);
        fs.rename(oldpath, newpath, (err, data) => {
            if (err) {
                res.status(500).send('file opration error').end();
            } else {
                if (req.body.mod_id) {

                } else {

                }

            }
        });
        if (req.body.mod_id) {

        } else {
            db.query(`INSERT INFO custom_evalutaion_table \
                (title, description, src)
                VALUES('${title}', '${description}', '${src}')`
            )
        }
    });
    return router;
};