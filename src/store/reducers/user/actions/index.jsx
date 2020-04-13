import userTypes from '../actionTypes'
import { httpPost, httpGet } from '../../../../utils/utils'
/**
 * @param {*} value 
 */
function errMsg(value) {
  return {
    type: userTypes.ERRORDATA,
    payload: value
  }
}
/**
 * @param {*} data 
 */
function succMsg(data) {
  return {
    type: userTypes.AUTH_SUCCESS,
    payload: data
  }
}

/**********************处理登陆请求************************** */
/**
 * 
 * @param {*} username
 * @param {*} password 
 */
export function login({ username, password }) {
  if (!username || !password) {
    return errMsg('用户名密码不能为空')
  }
  return async (dispatch) => {
    const result = await httpPost('/api/v1/admin/user/login', { username, password })
    if (result.status === 200 && result.data.code === 0) {
      return dispatch(succMsg(result.data))
    }
    return dispatch(errMsg(result.data.msg))
  }
}
/**
 * 获取所有注册用户信息
 */
export const getUserList = () => {
  return async (dispatch) => {
    const url = '/api/v1/admin/user/userlist'
    const result = await httpGet(url)
    if (result.data.code === 0 && result.data.success) {
      return dispatch(succMsg(result.data))
    }
    return dispatch(errMsg(result.data.msg))
  }
}
