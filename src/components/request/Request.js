import axios from "axios"

// 创建请求实例
class Request {
  constructor() {
    // 基础host
    this.BaseUrl = "http://"
    // 超时时间
    this.timeout = 2000
  }
  request(config) {
    const instance = axios.create({
      baseUrl: this.baseUrl,
      timeout: this.timeout,
    })
    instance.interceptors.request.use(
      (config) => {
        config.headers.Authorization = localStorage.getItem("token")
        return config
      },
      (err) => Promise.reject(err)
    )
    instance.interceptors.response.use(
      (res) => res.data,
      (err) => Promise.reject(err)
    )
    return instance
  }
}

export default new Request()
