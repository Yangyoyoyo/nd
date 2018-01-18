# express 请求数据三种方法
.get
.post
.use

express 中间件 理解成当成 jq 里的插件
```
const expressStatic = require('express-static');
sever.use(expressStatic)
```

#MySQL
数据基本概念
1 库  类似文件夹
2 表 数据
表里有 行 就是一条数据 和 列 （字段）

建表

主建， 标示符，索引 性能高
node 默认不支持 MySQL

SQL 4大语句 
关键字大写  表名 `` 包裹

下载 mysql 模块 client
连接 mysql.createConnection(host,port, user,password,database);
查询 db.query(SQL,(err,data) => {})

SQL 语句
1.增 INSERT
INSERT INFO 表 （字段列表）VALUES （值列表）条件
2.删 DELETE
DELETE FROM 表 WHERE 条件
3.改 UPDATE
UPDATE 表 SET 字段=值,字段=值, WHERE 条件
4.查 SELECT
SELECT * FROM 表 WHERE 条件

子句:
WHERE 条件

WHERE name="blue"
WHERE age>18
WHERE age<=18 AND score < 60
WHERE cach > 100 OR score < 100

ORDER 排序
ORDER age ASC/ DESC
ASC-升序（从小到大）
DESC— 降序（从大到小）

*价格相同 在按着销量 降序排列

GROUP 聚类 合并相同的
GROUP BY class ,
SELECT Count(*) FROM student_table;

数据库导入导出 备份
 GROUP - 合并
 LIMIT - 限制输出  (适合做分页)

LIMIT 10 前十条
LIMIT 5,8 从五开始要 8个
分页:
每页 20条数据
第一页 0,20
第二页 20,20
(n-1)*20, 20
  
子句之间的顺序 
SET  WHERE GROUP ORDER LIMIT
设置  筛选  合并  排序   限制 
   
数据字典

## blog 数据
banner 
    id    
    title 标题              varchar(32)     
    sub_title 副标题        varchar(16)   
    src 图片                varchar(64)
    
文章
    id
    author 作者             varchar(16)  
    author_src 作者头像      varchar(64)
    title  标题              varchar(32) 
    post_time 发布时间  后台是秒 前台是 毫秒 int
    content 内容             text
    n_like  赞               int
    
    
用户
    id 
    username  用户名        varchar(32)
    password  密码          varchar(32)
    src       头像          varchar(64)   
    
    
注入攻击  

## 教育类网站 数据
# 数据字典
首页
    banner数据 banner_table 
          ID
          title         varchar(32) 
          description  varchar(300)
          href          varchar(300);      
    产品特性  intro_table  
          ID
          title         varchar(32)
          description   varchar(200)
          href          varchar(300)
                 
    用户评价  custom_evalutaion_table
          ID 
          title         varchar(32)
          description   varchar(200)
          src           varchar(300)
          
技术  news_table
      ID
      title     varchar(100)
      summary   varchar(500)
      href      varchar(300)    
      icon_src  varchar(300)
      big_pic_src varchar(300)
      content    text

博客
    news_table 博客表
    ID
    title           varchar(100)
    pic_src         varchar(300)
    pic_big_src     varchar(300)
    summary         varchar(500)
    content         text    
    post_time       timestamp
    author          varchar(32)
    n_view          int
    
  
联系
    地图 map  ??

    地址  contact_table
    ID      
    street      varchar(50)
    phone       varchar(20)
    email       varchar(64)
    weibo       varchar(48)    
    wx          varchar(40)
       
    发送联系方式  msg_table
    ID
    name        varchar(16)
    email       varchar(64)
    subject     text
    phone       varchar(20)
    
      
关于  about_table
    ID
    title       varchar(200)
    content     text
    pic_src     varchar(300)    
    href        varchar(300)    
管理员 admin_table
    ID
    username    varchar(32)
    password    varchar(32)
    
       
# 后台接口, 静态资源


# react 

# 拖库（数据库）
MD5 签名算法
- 数据库不能存明文密码
- 加密存储

# 密码 
