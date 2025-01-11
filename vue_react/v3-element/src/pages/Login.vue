<template>
    <div style="display: flex; justify-content: center;">
      <el-form ref="formRef" :model="form" :rules="rules" label-width="auto">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" size="small" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password" size="small" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onsubmit" :loading="loading">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue';
  
  const formRef = ref(null);
  // 表单数据
  const form = reactive({
    username: '',
    password: ''
  });
  
  const rules = {
    username: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
      { min: 5, max: 10, message: '长度在5到10个字符之间', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 5, max: 10, message: '长度在5到10个字符之间', trigger: 'blur' }
    ]
  };
  
  // 登录按钮 loading
  const loading = ref(false);
  
  // 登录
  const onsubmit = () => {
    if (formRef.value) {
      loading.value = true;
      formRef.value.validate((valid) => {
        if (valid) {
          console.log('验证成功');
          // 在这里添加你的登录逻辑
        } else {
          console.log('验证失败');
        }
        loading.value = false; // 不管成功与否都要关闭 loading
      });
    }
  };
  </script>
  
  <style scoped>
  /* 如果有特定的样式需求，请在这里添加 */
  </style>