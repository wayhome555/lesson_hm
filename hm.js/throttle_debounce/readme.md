- 认识几个url
  url的设计模式 restful api
  网站是用来暴露资源的 如何将资源暴露出去 
  - http://localhost:3001/posts 列表页的链接
  - http://localhost:3001/posts/:id id查询参数 详情页的链接
  - http://localhost:3001/users/:id 用户主页的链接

- 数据的查询 read
- 访问资源的方式
  - apiFox web请求代理
    Post,Get,Delete,Put,Patch
  - 资源 db.json users posts
  - HTTP 协议
    - 请求行 Method + url + http 版本
    - 请求头 Cookie
    - 请求体 
  - json-server 
    - http 服务
    - db.json 数据资源向外提供访问 CRUD 操作

- 会设计restful api 接口
  - 需求
    - 展示文章列表 GET
    - 新增一篇文章 POST
    - 删除一篇文章 DELETE
      
- json-sever 是一个支持restful api 接口的工具
  - 安装
    - npm i json-server
  - 启动
    - "dev":"json-server --watch db.json --port 3001"
    - npm run dev
  - 访问