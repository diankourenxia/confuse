import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
createApp(App).use(Antd)
.mount('#app')
.$nextTick(window.removeLoading)


console.log('fs', window.fs)
console.log('ipcRenderer', window.ipcRenderer)
