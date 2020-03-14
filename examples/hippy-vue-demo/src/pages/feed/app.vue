<template>
  <div id="root">
    <div class="header">
      <label class="title">feed页</label>
      <label class="title" @click="remoteDebug">{{ subtitle }}</label>
    </div>
    <!-- <div class="container">
      <ul class="content">
        <li class="content-title">
          <p>新闻列表</p>
        </li>
      </ul>
    </div>-->
    <div class="zx-main">
      <div class="headers">
        <span class="login-name">登录</span>
      </div>
      <div class="form">
        <div class="inputs">
          <input class="user-input" type="text" placeholder="用户名" />
        </div>
        <div class="inputs">
          <input
            class="password-input"
            type="password"
            ref="password"
            @change="textChange"
            placeholder="密码"
            @click="stopPropagation"
          />
        </div>
        <div class="inputs">
          <span class="xs">{{password}}</span>
        </div>
      </div>
      <div class="footer">
        <button class="buttons reset">
          <span class="reset-name">重置</span>
        </button>
        <button class="buttons" @click="dl()">
          <span class="loginbtn-name">登录</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import backButtonImg from "../../back-icon.png";

let DEBUG_SUBTITLE = "";
if (Vue.Native) {
  DEBUG_SUBTITLE = "本地调试";
}

export default {
  name: "App",
  watch: {
    $route(to) {
      if (to.name === undefined) {
        this.subtitle = DEBUG_SUBTITLE;
        return;
      }
      this.subtitle = to.name;
    }
  },
  data() {
    return {
      password: "",
      imgs: {
        backButtonImg
      },
      subtitle: DEBUG_SUBTITLE,
      DEBUG_SUBTITLE
    };
  },
  methods: {
    async denglu() {
      console.log(await this.$refs.password.getValue());
    },
    textChange(e) {
      this.password = e;
    },
    stopPropagation(evt) {
      evt.stopPropagation();
    },
    goToHome() {
      this.$router.back();
    },
    remoteDebug() {
      if (this.subtitle !== DEBUG_SUBTITLE || !Vue.Native) {
        return;
      }
      Vue.Native.callNative(
        "TestModule",
        "debug",
        this.$options.parent.$options.rootViewId
      );
    }
  }
};
</script>
<style scope>
.xs {
  width: 300px;
  height: 50px;
}
#root {
  flex: 1;
}
.header {
  height: 60px;
  color: red;
  background-color: #40b883;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.title {
  font-size: 20px;
  line-height: 60px;
  margin-left: 20px;
  margin-right: 20px;
  font-weight: bold;
  color: #ffffff;
}
.container {
  background-color: #fff;
  flex: 1;
}
.content {
  flex: 1;
  margin-top: 10px;
}
.content-title {
  height: 60px;
  background: #fff;
}
.content-title p {
  color: #555;
  text-align: center;
}

.zx-main {
  flex: 1;
  background-color: #fff;
}
.zx-main .headers {
  height: 80px;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-name {
  color: #4d60a9;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
}
.form .inputs {
  text-align: center;
  margin: 20px;
  /* flex: 1; */
  /* height: 50px; */
  /* border-width: 1px; */
  /* border-style: solid;
  border-color: #666;
  padding-left: 20px; */
}

.password-input,
.user-input {
  outline: medium;
  -webkit-appearance: none;
  -webkit-user-select: auto;
  flex: 1;
  height: 50px;
  color: #242424;
  font-size: 16px;
  placeholder-text-color: #aaa;
  border-width: 1px;
  border-style: solid;
  border-color: #666;
  padding-left: 100px;
}
.zx-main .footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
}
.footer .buttons {
  height: 50px;
  width: 140px;
  border-style: solid;
  border-color: #4d60a9;
  border-width: 1px;
  border-radius: 5px;
  background-color: #4d60a9;
  color: #ffffff;
  /* align-items: center; */
  outline: medium;
  display: flex;
  justify-content: center;
  align-items: center;
}
.reset-name {
  text-align: center;
  font-size: 24px;
  color: #fff;
}
.loginbtn-name {
  font-size: 24px;
  color: #fff;
}
</style>
