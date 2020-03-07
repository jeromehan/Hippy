
import Vue from 'vue';
import App from './app.vue';
import { setApp } from '../../util';

// 禁止终端调试信息输出，取消注释即可使用。
// Vue.config.silent = true;

Vue.config.productionTip = false;
/**
 * 声明一个 app，这是同步生成的
 */
const app = new Vue({
  // 终端指定的 App 名称
  appName: 'feed',
  // 根节点，必须是 Id，当根节点挂载时才会触发上屏
  rootView: '#root',
  // 渲染自己
  render: h => h(App),
  // iPhone 下的状态栏配置
  iPhone: {
    // 状态栏配置
    statusBar: {
      backgroundColor: 4283416717,
    },
  },
});
app.$start(() => {
});
setApp(app);
