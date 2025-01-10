<template>
    <div>
        <p>Mouse X: {{ x }}</p>
        <p>Mouse Y: {{ y }}</p>
    </div>
</template>

<script setup>
import {useMouse,useMemo} from '../hooks/useMouse' // ..跳到上一级目录
import Hook from '../hooks/useMouse'
const {x,y} = useMouse()
useMemo()

console.log(Hook)
</script>

<style scoped>

</style>

<!-- <template>
    <div>
      <p>Mouse X: {{ mousePos.x }}</p>
      <p>Mouse Y: {{ mousePos.y }}</p>
    </div>
  </template>
  
  <script setup>
  import { 
    reactive,
    onMounted
  } from 'vue'
  
  const mousePos = reactive({
    x: 0,
    y: 0
  })
  
  // 定义一个函数来更新mousePos对象
  const updateMousePosition = (e) => {
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;
    console.log('Mouse moved');
  }
  
  // 在组件挂载时添加mousemove事件监听器
  onMounted(() => {
    window.addEventListener('mousemove', updateMousePosition);
  })
  </script>
  
  <style scoped>
  </style>
   -->