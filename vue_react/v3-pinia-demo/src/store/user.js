// 全局共享的用户状态
import { defineStore } from "pinia";
import { ref,reactive } from "vue";

// hooks 编程
export const useUserStore = defineStore("user", () => {
const isLogin = ref(false);

const toLogin = () => {
    isLogin.value = true;
}
const toLogout = () => {
    isLogin.value = false;
}

const userInfo = reactive({
    name:"",
    avatar:"",
    message:0,
    uid:null
})

const setUserInfo = () => {
    userInfo.name = 'a';
    userInfo.avatar = 'https://p3-passport.byteacctimg.com/img/user-avatar/f64add2f4b10505e8076b46509e0bf63~150x150.awebp';
    userInfo.message = 0;
    userInfo.uid = 110;
}

return {
    isLogin,
    toLogin,
    toLogout,
    userInfo,
    setUserInfo
}
});