<template>
  <div>
    <div>
      用户名:
      <input type="text" v-model="username" />
      <span>{{ errors.username && errors.username }}</span>
    </div>
    <div>
      密 码:
      <input type="text" v-model="password" />
      <span>{{ errors.password && errors.password }}</span>
    </div>
    <div>
      邮 件:
      <input type="text" v-model="email" />
      <span>{{ errors.email && errors.email }}</span>
    </div>
    <div>
      url:
      <input type="text" v-model="url" />
      <span>{{ errors.url && errors.url }}</span>
    </div>
    <div>
      手机号:
      <input type="text" v-model="mobile" />
      <span>{{ errors.mobile && errors.mobile }}</span>
    </div>
    <button @click="handleCheck">校验</button>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      username: "",
      password: "",
      email: "",
      url: "",
      mobile: ""
    };
  },
  computed: {
    errors() {
      // 获取错误
      return this.$mgValidator.$errors;
    }
  },
  // 添加规则
  mgValidator: {
    // username: "required",
    username: "username(3,5)",
    password: "password(5,10)",
    email: "email",
    url: "url",
    mobile: "mobile"
  },
  methods: {
    // 开始校验
    handleCheck() {
      if (this.$mgValidator.check()) {
        console.log("合格");
      } else {
        console.log("不合格");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span {
  color: red;
}

button {
  width: 100px;
  height: 50px;
  font-size: 30px;
  margin-top: 10px;
}
</style>
