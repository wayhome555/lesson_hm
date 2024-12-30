# 响应式

{{count}}
let count = ref(0) // 响应式对象
count.value++ // 数据修改

- getter setter

- 数据业务 value count -> 包装成为响应式对象 ref -> 被拦截去更新依赖数据的地方
  - 声明了数据（value count）
  - 把数据作为对象的属性
  - es5 就有 Object.defineProperty(obj, key, {get, set})
    在修改数据的同时 顺便把get set 都执行一遍（比如更新DOM）
  - 缺点 每个属性都要做一遍
