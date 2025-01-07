# vue hooks 编程

- react 的 hooks 编程 vue 直接抄
- 内存泄漏
  不会主动取消事件监听 组件销毁 事件处理函数无法被回收
- 生命周期 v-if组件卸载前打扫内存战场
- 把问题交给LLM解决

import useMouse from '../hooks/useMouse' 

function useMouse() {
    let x = 0,y = 0;
    console.log('useMouse')
    return {x,y}
}
export default useMouse // 默认输出的对象

import {useMouse} from '../hooks/useMouse' 

export function useMouse() { 
    let x = 0,y = 0;
    console.log('useMouse')
    return {x,y}
}

- es6 模块化
  - import from 导入
  - export 导出

- hooks 编程风格
  - 函数式编程
  useMouse use开头 hooks的特性
  - 将响应式业务（状态）和 UI 分离开
  - 组件更好维护 复用性好
  - UI 组件开发工程师
  - 组件拆分为 UI界面 和 业务逻辑

- 组件 = UI + State