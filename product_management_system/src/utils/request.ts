import axios from 'axios'
import { ElMessage } from 'element-plus';

// 创建axios实例
let request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API, // 路径上携带api
    timeout: 5000
})

// 添加请求响应拦截器
request.interceptors.request.use((config) => {
    // config 配置对象， headers属性请求头
    return config
})

// 添加响应拦截器
request.interceptors.response.use((response) => {
    // 成功回调，返回简化数据
    return response.data
}, (error) => {
    //失败回调，处理http网络错误

    // 存储错误信息
    let message = ''

    let status = error.response.status

    switch (status) {
        case 401:
            message = 'Token 过期'
            break
        case 403:
            message = '无权访问'
            break
        case 404:
            message = '地址错误'
            break
        case 500:
            message = '服务器问题'
            break
        default:
            message = '网络问题'
            break
    }

    // 提示错误信息
    ElMessage({
        type: 'error',
        message
    })

    return Promise.reject(error)

})

// 对外暴露
export default request;