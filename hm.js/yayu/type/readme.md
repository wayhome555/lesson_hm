# 类型转换

- es6 之前 js 有多少种类型？ 6种
  - 简单数据类型 Primitive 拷贝式赋值 
    - string number boolean null undefined 
    bigint symbol
  - 复杂数据类型 引用式赋值
    - object function array

- 为何 js 类型会改变
  number('1')

- js 是弱类型语言
- 变量的类型 是可以改变的
- 搞清楚变量的确切类型
  - primitive -> 其他
    - boolean
  - object -> 其他
  - 其他 -> primitive
  - 其他 -> object

- object.is() 和 == ===
  主要在于 NAN +0 -0

- Boolean 显示类型转换
  - null、undefined、0、""、NaN、false-> false

- Number 类型转换
  0 1 NaN