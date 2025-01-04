<template>
    <div>
    {{rate}}
    {{ count }}
    {{ props.value }}
    </div>
</template>

<script setup>
import { ref,defineProps,computed } from 'vue'
let count = ref(0) // 组件自有的响应式数据
// 子组件和父组件不一定是一直绑定的
// 定义props业务 消费数据 不是自身的数据 和父组件绑定
// 告诉外界 我需要什么数据
// 参数数据 外界传入 不是自有的
let props = defineProps({
    value:Number
})
// 字符串切割 slice(起始位置,结束位置)
// 计算属性
let rate = computed(()=> "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value))
</script>

<style scoped>

</style>