import axios from 'axios'
import { Message, Loading } from 'element-ui'
// import { getToken } from '@/utils/auth'
import config from '@/config'
let loading
function startLoading () { // 使用Element loading-start 方法
  loading = Loading.service({
    lock: true,
    text: '加载中……',
    fullscreen: true,
    background: 'rgba(0, 0, 0, 0)'
  })
}
function endLoading () { // 使用Element loading-close 方法
  loading.close()
}
let needLoadingRequestCount = 0
export function showFullScreenLoading () {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

export function tryHideFullScreenLoading () {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}
// create an axios instance
const service = axios.create({
  baseURL: config.BASE_API // api 的 base_url
})

// request interceptor
service.interceptors.request.use()

// response interceptor
service.interceptors.response.use(
  response => {
    tryHideFullScreenLoading()
    return response.data
  },
  error => {
    console.log('err' + error)
    tryHideFullScreenLoading()
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
