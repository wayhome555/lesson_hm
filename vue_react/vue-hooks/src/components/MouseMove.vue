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