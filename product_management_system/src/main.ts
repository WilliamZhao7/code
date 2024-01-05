import { createApp } from 'vue'

import App from '@/App.vue'
//引入element插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)

//Element-Plus 国际化配置
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// 引入svg图片管理
import 'virtual:svg-icons-register'





const app = createApp(App)

// 引入自定义全局组件
import globalComponents from '@/components'
app.use(globalComponents)

// 引入全局样式
import '@/styles/index.scss'

//测试代码：测试假的接口是否能使用
import axios from 'axios'

axios({
  url: '/api/user/login',
  method: 'post',
  data: {
    username: 'admin',
    password: '111111'
  }
})

// 安装Element-Plus插件
app.use(ElementPlus, {
  locale: zhCn,
})



console.log(import.meta.env)

app.mount('#app')



