
import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_ORDER_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 20000 // request timeout
})

service.interceptors.request.use(
  config => {
    // config.url = `${process.env.VUE_APP_ORDER_API}${config.url}`
    return config
  },
  error => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */
  response => {
    const res = response.data
    if (res && res.x) {
      if (res && res.x && res.x.ok) {
        return res.data
      } else {
        if (res.x.msg === 'please login' || res.x.code === 16) {
          return Promise.reject(res)
        } else {
          return Promise.reject(res)
        }
      }
    } else {
      return Promise.reject(res)
    }
  },
  error => {
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.x.msg
    ) {
      // 后端服务报错会添加冒号，前端匹配剔除
      alert(error.response.data.x.msg)
    }
    return Promise.reject(
      (error && error.response && error.response.data) || error
    )
  }
)

export default service
