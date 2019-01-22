
import axios from 'axios'
// Vue.use(axios)  //报错。不是所有插件都支持use安装的
// window.axios = axios  绑定全局
// Vue.prototype.$http = axios;

import store from '../store'
import * as types from '../store/types'

axios.interceptors.request.use(function(config) {
    store.dispatch(types.VIEW_LOADING,true)
    return config;
},function(error) {
    return Promise.reject(error);
})

axios.interceptors.response.use(function(response) {
    store.dispatch(types.VIEW_LOADING,false)
    return response;
},function (error) {
    return Promise.reject(error);
})

export default {
    install: function (Vue) {
        Vue.prototype.$http = axios;
        window.axios = axios;
    }
}