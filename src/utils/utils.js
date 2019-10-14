import axios from 'axios'
import qs from 'qs'

// 允许跨域
axios.defaults.withCredentials = true

// 发送时 拦截器
axios.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})
// 响应拦截器
axios.interceptors.response.use(response => response, err => Promise.resolve(err.response))

// 检查状态码
function checkStatus(res) {
  if(res.status === 200 || res.status === 304) {
    return res.data
  }
  return {
    code: 0,
    msg: res.data.msg || res.statusText,
    data: res.statusText
  }
}
// 检查code值
function checkCode(res) {
  if(res.code === 0) {
    throw new Error(res.msg)
  }
  return res
}
// 根据环境，设置baseURL
process.env.NODE_ENV === 'devlopment' ? axios.defaults.baseUrl = "http://localhost:3000" : axios.defaults.baseUrl=""
/**
 * 封装get请求
 * @param {string} url 
 * @param {object} params 
 * @return {object}
 */
export const httpGet = (url, params) => {
  if(!url) return null
  return axios({
    method: 'get',
    url,
    params,
    timeout: 3000
  }).then(checkStatus).then(checkCode)
}
/**
 * 封装post请求
 * @param {string} url 
 * @param {object} data 
 * @return {object}
 */
export const httpPost = (url, data) => {
  if(!url) return null
  return axios({
    method: 'post',
    url,
    data: qs.stringify(data),
    timeout: 3000
  }).then(checkStatus).then(checkCode)
} 
// /**
//  * @param {*} url 
//  * @param {*} params
//  */
// export function httpGet(url, params) {
//   if(!url) return null
//   const result = new Promise((resolve, reject) => {
//      axios.get(url, { params }).then(res => {
//        resolve(res)
//      }).catch(err => {
//        reject(err)
//      }) 
//   })
//   return result
// }

// /**
//  * @param {*} url 
//  * @param {*} data 
//  */
// export function httpPost(url, obj) {
//   if(!url && !obj) {
//     return null
//   }
//   const result = new Promise((resolve, reject) => {
//      axios.post(url, obj).then(res => {
//        resolve(res)
//      }).catch(err => {
//        reject(err)
//      })
//   })
//   return result
// }