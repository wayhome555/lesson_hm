# BATJTMD

## 腾讯
### VEUI 前端框架

- 先写结构
  - 总结构 page 盒子
  - 上下结构
  - title + desc
  - button 区域

### BEM国际命名规范
> 简单，可复用的 根据页面结构和功能区块 来命名类名的国际规范
.weui-cells block
Block 页面由区块（独立功能）构成
Element 区块由元素构成
BE 是可以嵌套的

- 页面结构套路(十几个)
  .page>.page_hd+.page_bd+.page_ft
  - .page block 块
   - .page__hd Element 元素
   - .page__bd

  - .weui-btn
    项目代号 + 元素

- css 源码
  - 模块化
  - 多人协作

- 分组选择器 [,]
- 后代选择器 [空格]