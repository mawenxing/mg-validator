# mg-validator
- 这是应用在vue 2.x 版本的一款轻量级表单验证插件

# Demo & github 地址
- ....

# Install
```js
npm i mg-validator
```

# Usage
- 第一步 : 引入插件
```js
// main.js
import mgValidator from 'mg-validator'

Vue.use(mgValidator)
```
- 第二步 : 组件校验
```js
// MyForm.vue
<template>
  <div>
    <div>
      用户名 :
      <input type="text" v-model="username" />
    </div>
    <div>
      密码 :
      <input type="text" v-model="password" />
    </div>
    <div>
      手机号 :
      <input type="text" v-model="mobile" />
    </div>
    <div>
      邮箱 :
      <input type="text" v-model="email" />
    </div>
    <div>
      url :
      <input type="text" v-model="url" />
    </div>
    <ul>
      <li v-for="(err,i) in errors" :key="i" v-text="err"></li>
    </ul>
    <button @click="handleSubmit">登录</button>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      username: "",
      password: "",
      mobile: "",
      email: "",
      url: ""
    };
  },
  // 添加校验规则
  mgValidator: {
    username: "required",
    password: "password(3,6)",
    email: "email",
    mobile: "mobile",
    url: {
      test :/正则/,
      message : 'url格式错误'
    }
  },
  computed: {
    errors() {
      // 显示错误值
      return this.$mgValidator.$errors;
    }
  },
  methods: {
    handleSubmit() {
      // 点击开始校验
      if (this.$mgValidator.check()) {
        console.log("合格");
      } else {
        console.log("不合格");
      }
    }
  }
};
</script>
```

# Docs
- 使用1 : 必填项
```js
 mgValidator: {
    // value值 写required 就是验证必填
    username: "required",
 }
```

- 使用2 : 使用插件内部的几种规则
```js
 mgValidator: {
    username: "required",  // 用户名 必填
     or  
    username: "username(5-10)",  // 用户名 5-10个字符
    password: "password(3,6)", // 密码 3-6个字符
    email: "email", // 邮件验证
    mobile: "mobile", // 手机号验证
    url: "url"
}
```

- 使用3 : 自己添加校验规则
```js
mgValidator: {
  username: {
    test: /^[a-zA-Z0-9_\d]{3,10}$/,
    message: '4-8个字符'
  },
  password: {
    test: /\w{4,8}/,
    message: '4-8个字符'
  }
}
```

# Note
- 本插件是一个轻量级的
- 所以会有部分不兼容问题
- 欢迎提出指正修改意见,感谢!!