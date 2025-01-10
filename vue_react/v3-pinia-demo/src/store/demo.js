// stores/counter.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

// export const useCounterStore = defineStore('counter', {

//   state: () => ({
//     sum: 0,
//   }),

//   getters: {
//     doubleCount: (state) => state.sum * 2,
//   },

//   actions: {
//     increment() {
//       this.sum++;
//     },
//   }
// });

export const useCounterStore = defineStore('counter',() => {

    const sum = ref(0);
    const doubleCount = () => sum.value * 2;
    const increment = () => {
        sum.value++;
    }
    
    return {
        sum,
        doubleCount,
        increment
    }
})