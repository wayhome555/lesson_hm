// 中央 状态管理 login userInfo
// 定义一个仓库

import { defineStore } from "pinia";
import { ref } from "vue";

// 仓库名 函数
export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);

  const increment = () => {
    count.value++;
  };
  return { count, increment};
});
