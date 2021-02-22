import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import VueCreateDM from 'vue-create-dm';
import router from "@/router"
import  store from '@/store'
import 'ant-design-vue/dist/antd.css';
createApp(App).use(router).use(store).use(Antd).use(VueCreateDM).mount('#app')
