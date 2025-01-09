<template>
    <div>
        <h2>CompA</h2>
        <p>Count: {{ counterStore.count }}</p>
        <button @click="counterStore.increment">add</button>
        <CompSubA /> 
    </div>
</template>

<script setup>
// 引入store
import { useCounterStore } from '../store/counter'; 
// 引入子组件
import CompSubA from './CompSubA.vue';
const counterStore = useCounterStore();
console.log(counterStore);
const { count, increment } = counterStore;

</script>

<style scoped>

</style>