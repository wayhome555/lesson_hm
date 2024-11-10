# 星球大战

- <!DOCTYPE html>
  html5 版本声明头
- <html lang="en">
  根元素，指定文档的语言为英语
- <meta charset="UTF-8">
  设置文档的字符编码为UTF-8，确保文本正确显示。
- <meta name="viewport" content="width=device-width,   initial-scale=1.0">
  设置视口，使页面在移动设备上正确显示，宽度等于设备宽度，初始缩放比例为1.0。

- *
 css 通配符，选择所有元素
 margin: 0;padding: 0; 所有元素初始化一致
 由于有不同的浏览器厂商，默认值不一样
 需要在页面样式开始之前，做一个样式reset
 让任何浏览器访问，我们的页面都是一张白纸
 在所有浏览器上体验一致

 但是*性能不太好，所以我们宁愿列出来所有的标签

- 居中
  - 定位 position：absolute
   - 百分比相对于父元素
  - transform 变基属性
   - translate 移动
     x 水平移动 左负右正
     y 垂直移动 上负下正
  - 背景大法
   盒子在页面的占位会出来

  - css 动画
   - animation
   - keyframes 
   - transform scale translateY
   - 飞船模拟动画 逼真
   - 1% 时间差 画龙点睛
   - transform - style : perspective-3d 开启3d支持
     perspective:800px; 视点，眼睛离屏幕的距离
   - inline 元素不支持transform，display 属性切换为inline-block