<template>
    <div>
        <h2>CompSubA{{ count }}</h2>
    </div>
</template>

<script setup>
import { toRefs } from 'vue'; // 重置响应式
import { useCounterStore } from '../store/counter'; 
const counterStore = useCounterStore(); // 连接数据
const { count, increment } = toRefs(counterStore); // 结构会使响应式丢失
</script>

<style scoped>

</style>