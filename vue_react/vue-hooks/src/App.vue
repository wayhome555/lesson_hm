<script setup>
import { ref } from 'vue'
import MouseMove from './components/MouseMove.vue';

const showMouse = ref(true)
const toggleMouse = () => {
  showMouse.value = !showMouse.value
}
</script>

<template>
  <div>
<MouseMove v-if="showMouse" />
<button @click="toggleMouse">切换显示</button>
  </div>
</template>

<style scoped>

</style>

