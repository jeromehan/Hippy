<template>
  <div id="root">
    <div class="header">
      <label class="title">detail页</label>
      <label class="title" @click="remoteDebug">{{ subtitle }}</label>
    </div>
    <div class="container">
      <ul class="content">
        <li class="content-title">
          <p>详情</p>
        </li>
      </ul>
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
      imgs: {
        backButtonImg
      },
      subtitle: DEBUG_SUBTITLE,
      DEBUG_SUBTITLE
    };
  },
  methods: {
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
  overflow: scroll;
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
</style>
