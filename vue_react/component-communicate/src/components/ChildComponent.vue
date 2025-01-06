<template>
    <div>
        <h2>{{ title }}</h2>
        <button @click="sendMessageToParent">发信息给父组件</button>
    </div>
</template>

<script setup>
import { 
    defineProps,
    defineEmits,
    ref,
 } from 'vue';

const childMessage = ref('hello parent')

const emits = defineEmits('child-message')
const sendMessageToParent = () => {
    emits('child-message',childMessage.value)
}
defineProps({
    title: {
        type: String,
        required: true
    }
})

</script>

<style scoped>
 
</style>