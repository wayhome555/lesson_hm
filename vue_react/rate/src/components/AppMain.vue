<template>
    <main>
        Main
        <h1>你的评分是{{ score }}</h1>
        <Rate :value="score"/>
        <Item />
        <Item />
    </main>
</template>

<script setup>
// 将数据从父组件传递给子组件
import Rate from './Rate.vue'
import Item from './Item.vue'
import { ref } from 'vue'

const score = ref(5)

</script>

<style scoped>
main {
    flex:1;
    height:500px;
    background-color: lightblue;
}
</style>