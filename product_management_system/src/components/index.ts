// 自定义插件，注册全局组件

// 引入所有自定义全局组件
import SvgIcon from '@/components/SvgIcon/index.vue'
import Pagination from '@/components/Pagination/index.vue'

//引入element-plus提供全部图标组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const allGlobalComponent: any = { Pagination, SvgIcon }

// 对外暴露插件对象
export default {
    // 自定义插件的方法
    install(app: any) {
        //注册所有自定义的全局组件
        Object.keys(allGlobalComponent).forEach(key => {
            console.log(allGlobalComponent[key])
            app.component(key, allGlobalComponent[key])
        })

        //将element-plus提供图标注册为全局组件
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
    }
}






