import axios from 'axios'
import qs from 'qs' //自带qs

const instance=axios.create({
  baseURL: '/api'
})

//请求拦截器
instance.interceptors.request.use((config)=>{
 
    config.data=qs.stringify(config.data);


    return config
})

//响应拦截器
instance.interceptors.response.use(
  response => response.data,
  error => {
    alert('请求错误',error.msg)
    //返回初始状态的promise
    return new Promise(() => {})
  }
)


export default instance



