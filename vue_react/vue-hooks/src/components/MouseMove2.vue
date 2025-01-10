<template>
    <div>
      <p>Mouse X: {{ mousePos.x }}</p>
      <p>Mouse Y: {{ mousePos.y }}</p>
    </div>
  </template>
  
  <script setup>
  import { 
    reactive,
    onMounted,
    onUnmounted // 添加此钩子以确保可以清理事件监听器
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
  
  // 在组件卸载前移除mousemove事件监听器
  onUnmounted(() => {
    window.removeEventListener('mousemove', updateMousePosition);
  })
  </script>
  
  <style scoped>
  </style>