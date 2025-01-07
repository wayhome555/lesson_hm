// hooks/useMouse.js
import { ref, onMounted, onUnmounted } from 'vue';

// export 关键字用于导出一个函数，以便在其他地方导入和使用
export function useMouse() {
  // 使用ref创建两个响应式的坐标变量
  let x = ref(0);
  let y = ref(0);

  // 定义更新坐标的函数
  const updateCoordinates = (event) => {
    x.value = event.clientX;
    y.value = event.clientY;
    console.log('useMouse')
  };

  // 在组件挂载时添加mousemove事件监听器
  onMounted(() => {
    window.addEventListener('mousemove', updateCoordinates);
  });

  // 在组件卸载前移除mousemove事件监听器
  onUnmounted(() => {
    window.removeEventListener('mousemove', updateCoordinates);
  });

  // 返回x和y，让调用者可以解构使用
  return { x, y };
}
 

export function useMemo() {
    console.log('useMemo')
}

export default {
    name: 'useMouse'
}