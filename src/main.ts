// 导入CSS样式文件
import "./assets/main.css";

// 导入Vue和Pinia相关的模块
import { createApp } from "vue";
import { createPinia } from "pinia";

// 导入Vue组件
import App from "./App.vue";

// 创建Vue应用实例
const app = createApp(App);

// 创建Pinia实例
const pinia = createPinia();

// 安装Pinia到Vue应用
app.use(pinia);

// 挂载Vue应用到DOM
app.mount("#app");
