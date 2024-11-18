# 百度面试题之

## 文档(doeument 顺序)流(从上到下 块级 从左到右 行内)
- document html 文档
  网页的结构
  页面绘制的本质 像素绘制的

  - 按文档流先绘制 #box1 
    盒子的顺序
    精确计算盒子的大小 = 内容（width * height） + 内边距（padding） + 边框（border） + 外边距（margin）
    盒子的位置 在原来的外置上给 margin间距，给位置定位

## position 的属性和原理
文档流有什么关系
- relative
  -相对定位  相对于0坐标的位置 移动 left top
  -盒子原来的占位（文档流中的位置）不受影响
- absolute
  -离开文档流 脱离0坐标的控制了
  -绝对定位  相对于父元素的位置 移动 left top
   找到最近的祖先有定位节点的元素
   如果没有找到的话 相对于body