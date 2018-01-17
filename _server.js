const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const multer = require('multer');
const consolidate = require('consolidate');
const mysql = require('mysql');
const common = require('./libs/common');
var server = express();

// 连接池
const db = mysql.createPool({
    host: "localhost",
    user: 'root',
    password: 'root',
    database: "blog"
});

server.listen(8080);

//1.解析cookie
server.use(cookieParser('fdsafasd123qewrweqrweqr'));

//2.使用session
var arr = [];
for (var i = 0; i < 100000; i++) {
    arr.push('keys_' + Math.random());
}
server.use(cookieSession({name: 'zns_sess_id', keys: arr, maxAge: 20 * 3600 * 1000}));

//3.post数据
server.use(bodyParser.urlencoded({extended: false}));
server.use(multer({dest: './www/upload'}).any());

//4.配置模板引擎
//输出什么东西
server.set('view engine', 'html');
//模板文件放在哪儿
server.set('views', './template');
//哪种模板引擎
server.engine('html', consolidate.ejs);

//接收用户请求
server.get('/', (req, res, next) => {
    // 查询banner
    db.query("SELECT * FROM banner_table", (err, data) => {
        if (err) {
            res.status(500).send("database error 错了").end();
        } else {
            res.banners = data;
            next();
        }
    });
})
server.get('/', (req, res, next) => {

    db.query('SELECT ID, title, summery FROM article_table', (err, data) => {
        if (err) {
            res.status(500).send(`database error`).end()
        } else {
            res.news = data;
            next();
        }
    });
});
server.get('/', (req, res) => {
    // console.log(res.news);
    res.render('index.ejs', {
        banners: res.banners,
        news: res.news
    })
});

server.get('/article', (req, res) => {
    if (req.query.id) {
        if (req.query.act == 'like') {
            // 增加赞
            db.query(`UPDATE article_table SET n_like=n_like+1 WHERE ID=${req.query.id}`, (err, data) => {
                if (err) {
                    res.status(500).send('数据库有问题').end()
                    console.log(err);
                } else {
                    db.query(`SELECT * FROM article_table WHERE ID=${req.query.id}`, (err, data) => {
                        if (err) {
                            res.status(500).send('数据有问题').end()
                        } else {
                            if (data.length == 0) {
                                res.status(404).send('请求的文章找不到').end()
                            } else {
                                var articleData = data[0];
                                articleData.sDate = common.time2date(articleData.post_time);
                                articleData.content = articleData.content.replace(/^/gm, '<p>').replace(/$/gm, '</p>');
                                console.log(res.data);
                                res.render('conText.ejs', {
                                    article_data: articleData
                                });
                            }
                        }
                    });
                }
            })
        } else {
            db.query(`SELECT * FROM article_table WHERE ID=${req.query.id}`, (err, data) => {
                if (err) {
                    res.status(500).send('数据有问题').end()
                } else {
                    if (data.length == 0) {
                        res.status(404).send('请求的文章找不到').end()
                    } else {
                        var articleData = data[0];
                        articleData.sDate = common.time2date(articleData.post_time);
                        articleData.content = articleData.content.replace(/^/gm, '<p>').replace(/$/gm, '</p>');
                        console.log(res.data);
                        res.render('conText.ejs', {
                            article_data: articleData
                        });
                    }
                }
            });
        }

    } else {
        res.status(404).send('请求的文章找不到').end()
    }

})


//4.static数据
server.use(static('./www'));
