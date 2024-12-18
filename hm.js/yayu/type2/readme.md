# 显式类型转换和隐式类型转换
- String Number Boolean 函数类型 强制类型转换
- 构造函数 new
- Primitive 怎么转对象

- 对象转Primitive

- 包装类
  "abc".length
  1.23.toFixed(1)
  - JS 一切面向对象 自动帮我们包装数据类型

- 对象转Primitive
  - Boolean
  - String
    - Object.prototype.toString.call()
    确切类型
    - 数组 调用原型上的toString方法
    - 函数 返回源代码
    - 日期
  - Number

- Object => Primitive
  - String 
    - 先 valueOf 方法 如果是原始值 就返回
    - 否则 调用toString方法 返回
    - 否则 抛出异常TypeError

- Object => String|Number
  - toPrimitive 是使命
  - toString
  - valueOf
  - Number valueOf -> toString -> TypeError
  - String toString -> valueOf -> TypeError




