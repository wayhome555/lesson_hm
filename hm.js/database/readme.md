- 姓名 工资 部门 

- 选择合适的数据库
  - 关系型数据库
    - MySQL
    - Oracle
    - SQL Server
    - PostgreSQL
  - 非关系型数据库
    - MongoDB
    - Redis
    - Cassandra
    - HBase
    - Neo4j
    - Couchbase
    - ArangoDB
    - DynamoDB
    - Memcached
    - VoltDB

- 数据库三大范式
  - 第一范式：确保每列保持原子性，即每列只包含单一属性。
  - 第二范式：确保表中的每列都与主键相关，即每列都完全依赖于主键。
  - 第三范式：确保每列都不依赖于其他非主键列，即不存在传递依赖关系。

- sqlite



//js 早期没有模块化的方案
//js 业务简单 页面交互
// 幻灯片 js 就干这事
// 越来越复杂了，文件分离，模块化方案需要
const sqlite3 = require('sqlite3');
// 数据库操作句柄 
// 后端逻辑和数据库逻辑是分开的
// 路径
// I/O 操作

const db =new sqlite3.Database('./mydatabase.db',
    async(err) => {
        // err 是否出错 容错是关键
        // node js 快 ms级别
        // 数据库 别的服务器/硬盘上 s级别
        // await 等待
        if (err) {
        console.log('数据库连接失败',err);
        return;
        }
        console.log('数据库连接成功');
        // 数据库操作句柄

        await da.run(
        `
        create table if not exists employees(
        id integer primary key,
        name text not null,
        department text not null,
        salary integer not null
        )
        `
        )
    }
    
);
