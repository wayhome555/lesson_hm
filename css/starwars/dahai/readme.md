# CSS 底层基础

- 何为 CSS ？
```css
selector {
    property: value;(declaration)
}
h1 {
    color: red;/*声明*/
    text-align: center;
}
```

- css(Cascading Style Sheets 层叠样式表)
  - 必须依附于 html dom
  - css 选择 dom 元素运用样式规则
  - css 是怎么引入的
    - style 内联样式
    - link 外部样式
    - @import 导入外部样式
    - 行内样式 <p style=""></p>
  - 先下载样式 再解析dom
    dom + css = render tree(显示页面 数据结构)
    -> 浏览器 渲染引擎 -> 渲染得到页面

- 优先级
  - 从小到大
  - 计算规则
  *10
  标签1 类名10 id100 行内1000 !important max
  - 当选择器比较复杂的时候 优先级加法
    .container ul li:nth-child(odd) 
    = 10 + 1 + 1 + 10 = 22
    一定选择最后的元素

- css 选择器分成哪几类
  - 基础选择器
    - 标签选择器
    - 类选择器
    - id选择器
    - 通配符选择器 * 性能不好
  - 组合选择器
    - 后代选择器 空格
    - 子元素选择器 >
    - 相邻兄弟选择器 +
    - 普通兄弟选择器 ~
  - 伪类选择器
    - 链接伪类选择器
    - 状态伪类选择器 ::active ::hover ::selection... 可交互
    - 结构伪类选择器 :nth-child
  - 伪元素选择器
  - 属性选择器
