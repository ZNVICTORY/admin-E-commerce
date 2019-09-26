import axios from 'axios'
/**
 * 
 * @param {*} url 
 * @param {*} params
 */
export function httpGet(url, params) {
  if(!url) return null
  const result = new Promise((resolve, reject) => {
     axios.get(url, { params }).then(res => {
       resolve(res)
     }).catch(err => {
       reject(err)
     }) 
  })
  return result
}
/**
 * @param {*} url 
 * @param {*} data 
 */
export function httpPost(url, obj) {
  if(!url && !obj) {
    return null
  }
  const result = new Promise((resolve, reject) => {
     axios.post(url, obj).then(res => {
       resolve(res)
     }).catch(err => {
       reject(err)
     })
  })
  return result
}