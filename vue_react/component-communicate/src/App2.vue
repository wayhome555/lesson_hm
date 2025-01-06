<script setup>
// composition API
import { 
  ref, // 简单数据类型
  reactive, // 复杂数据类型
 } from 'vue'

 // 组合API
 // counter 计数业务
 const counter = ref(0); 
 const increment = () => {
  counter.value++
 }

 // user
 const state = reactive({
  name:'Alice',
  age:18,
 })

 const updataState = () => {
  state.name = 'Bob'
  state.age++
 }
</script>

<template>
  <div>
    <p>{{ counter }}</p>
    <button @click="increment">+1</button>

    <p>Name:{{ state.name }}</p>
    <p>Age:{{ state.age }}</p>
    <button @click="updataState">Update State</button>
  </div>
</template>

<style scoped>
</style>
