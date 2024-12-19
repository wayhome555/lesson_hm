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

- +号的转换原则
  - 如果两个操作数都是数字：+ 运算符执行加法操作。
  - 如果其中一个操作数是字符串：+ 运算符执行字符串连接操作。
  - 如果其中一个操作数是对象（如数组）：+ 运算符首先尝试将对象转换为原始值（通过调用 valueOf() 或 toString() 方法），然后再根据转换后的原始值类型决定执行加法还是字符串连接。

- == 号的转换原则
  - 如果两个操作数的类型相同：
如果两个操作数都是 undefined 或 null，则它们相等。
如果两个操作数都是数字，则直接比较它们的值。
如果两个操作数都是字符串，则直接比较它们的值。
如果两个操作数都是布尔值，则直接比较它们的值。
如果两个操作数都是对象，则比较它们是否引用同一个对象。
  - 如果两个操作数的类型不同：
如果一个操作数是 null，另一个操作数是 undefined，则它们相等。
如果一个操作数是数字，另一个操作数是字符串，则尝试将字符串转换为数字，然后比较。
如果一个操作数是布尔值，另一个操作数是数字或字符串，则尝试将布尔值转换为数字（true 转换为 1，false 转换为 0），然后比较。
如果一个操作数是对象，另一个操作数是数字或字符串，则尝试将对象转换为原始值（通过调用 valueOf() 或 toString() 方法），然后比较。
