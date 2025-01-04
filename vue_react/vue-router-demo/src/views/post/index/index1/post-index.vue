<template>
    <div>
    PostIndex
    {{ sort }}
    </div>
</template>

<script setup>
import {defineSlots,} from 'vue'
const props = defineProps({
    sort : String
})
const {sort} = props // 解构
</script>

<style scoped>

</style>