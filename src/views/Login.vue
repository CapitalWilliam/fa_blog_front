<template>
  <div class="login-panel">
    <n-card title="卡片插槽示例">
      <n-form :rules="rules" :model="admin">
        <n-form-item path="account" label="账号">
          <n-input v-model:value="admin.account" placeholder="请输入账号"/>
        </n-form-item>
        <n-form-item path="password" label="密码">
          <n-input
              v-model:value="admin.password"
              type="password"
              placeholder="请输入密码"
          />
        </n-form-item>
      </n-form>
      <template #footer>
        <n-checkbox v-model:checked="admin.rember" label=" 记住我"/>
        <n-button @click="login">登录</n-button>
      </template>
    </n-card>
  </div>
</template>

<script setup>
import {ref, reactive, inject} from "vue";
import {stringify} from "qs";

const axios = inject("axios");

let rules = {
  account: [{required: true, message: "请输入账号", trigger: "blur"},
    {min: 3, max: 30, message: "账号长度在 3 到 12 个字符", trigger: "blur"}],

  password: [
    {required: true, message: "请输入密码", trigger: "blur"},
    {min: 4, max: 18, message: "密码长度在 6 到 18 个字符", trigger: "blur"},
  ],
};

const admin = reactive(({
  account: "",
  password: "",
  rember: false
}))

const login = async () => {
  let result = await axios.post("/login", stringify({
        username: admin.account,
        password: admin.password,
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
  );
  console.log(result);
};

</script>

<style lang="scss" scoped>
.login-panel {
  width: 500px;
  margin: 130px auto 0;
}
</style>