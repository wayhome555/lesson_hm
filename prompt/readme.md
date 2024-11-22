# Prompt 设计模式

- 吴恩达 Prompt Engineering

- LLM 开发模板
  - 代码工程
  1. npm init -y
  2. 将 dependencies:{} 部分拷贝过去
    npm i
    node 后端项目的依赖

- dotenv 的理解
  - process.env 对象
  - key 不能在代码中以明文出现
  - 项目根目录下添加一个.env文件,包含key等信息
  - 不能提交到github 找到.gitignore 中添加这类文件的声明
  - dotenv.config() 将.env 读入process.env 中