<template>
    <div>
        <div>PostShow {{ postId }}</div>
    </div>
</template>

<script setup>
import {useRoute} from 'vue-router'
const route = useRoute() // 当前路由
const { postId} = route.params // 当前路由参数
</script>

<style scoped>

</style>