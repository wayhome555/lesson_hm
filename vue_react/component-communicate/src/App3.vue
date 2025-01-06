<template>
    <div>
        <p>来自子组件的消息：{{ messageFromChild }}</p>
        <ChildComponent @child-message="handleChildMessage" :title="title"/>

    </div>
</template>

<script setup>
// @ 事件 不是JS内置事件 自定义事件
// 父子组件通信
import {ref} from 'vue'
import ChildComponent from './components/ChildComponent.vue'
const messageFromChild = ref('')

const title = ref('来自父组件的标题')

// 自定义事件 父子组件间的约定
const handleChildMessage = (message) => {
    console.log('父组件接收到子组件的消息：',message)
    messageFromChild.value = message
}


</script>

<style scoped>

</style>