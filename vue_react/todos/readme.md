# 双向绑定

- title data
  {{title}} 数据驱动的页面
  input v-model="title" 数据驱动的input 双向绑定
  input 输入的时候 输入框的值改变了 和数据项title不一样了
  @input 麻烦 v-model 专门解决数据双向绑定

- :class :value ?
  动态绑定业务时用：v-bind

- 数据和页面保持一致
  
- all 所有任务的数量
  - title todos 不一样 独立
  - all 依赖于 对 todos 计算
  - computed 计算属性
    形式是函数 返回值是一个值
  - 当计算属性函数依赖项发生改变时 会重新执行函数 得到新的值
    关注函数体内的依赖项
  - 计算属性也是数据的一类
  - get set 两种操作

- 数据和界面状态的正确性
  - 数据驱动界面 {{}} 单向数据绑定
  - 双向绑定 v-model
    - 先是 界面状态一致
    - 数据要一致
    - v-model 修改数据
    - 状态一致
  - 依赖项的联动一致
    allDone true false todos 也得变

- 不犯错 数据和界面状态一致

- vue 2.0 让开发者 爽 专注于数据业务开发
  data
  methods
  computed
  watch
  简单 缺点 不够灵活
- vue 3.0 ？
  选项式 -> 组合式 setup 对应的 data + method + computed + watch 放在一起
  有利于大型项目的维护（组件代码 > 100行）