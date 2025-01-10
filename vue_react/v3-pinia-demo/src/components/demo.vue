<template>
    <div>
    <p>Current count: {{ count.sum }}</p>
    <p>Double count: {{ count.doubleCount }}</p>
    <button @click="count.increment">Increment</button>
    </div>
  </template>

<script setup>
import { useCounterStore } from '../store/demo';

const count = useCounterStore();
</script>

<style scoped> 
</style>