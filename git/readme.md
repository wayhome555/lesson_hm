- git 有什么用？
版本控制软件 备份与恢复
协作开发 支持非线性开发 代码审查 支持非线性开发
跨平台支持 开源社区支持

- git 有哪些命令？
 - git init 初始化
 把代码加入仓库
 - git add . 
 - git commit -m "提交信息"
 - git push origin main

## 大厂需要的git能力？
 - git是必备技能
 - 高级技巧 考点
 - git 文档内置
 你是如何了解git命令和参数的？深入了解某个命令
 - git help 常用的git命令
 - git help -a 列出所有名单
 vim 编辑器 j k 上下移动 q 退出
 - git help 命令名 查看命令的详细使用方法

## 代码仓库
 文件夹 -> 开发目录（网站） -> 代码仓库（git）
- 好处
  项目代码版本（version） git关注的是代码版本
  回到文件的任意版本

- git 仓库里存的是啥？
  文件的版本
  一直建立快照
  .git 目录 就是 仓库
  git 相关的内容就放在.git目录里
- git config 配置 操作留下了责任人，多人协作的思想
  git config --list 查看配置信息

  git config --global user.name "xxx"
  git config --global user.email "xxx" 本地 远程 比对
  --global 全局配置

- git status
  当前仓库的状态
  on branch main 主分支 默认分支

  untracked file 未跟踪文件 还没有纳入版本管理
  use commit 

- git add file
  将文件的当前版本 先添加到暂存区

- git commit -m "提交信息"
  提交信息要严谨规范 有意义 围绕开发需求
  一个上午 2-5次提交

- 为什么要暂存区，仓库两个概念
  选择性提交
  分批提交 分几次add 一次commit
  预览更改

- git log 查看历史提交记录
  --oneline 单行显示

