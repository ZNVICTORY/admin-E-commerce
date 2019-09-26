 import { httpGet, httpPost } from '../../utils/utils'

 const AUTH_SUCCESS = 'auth_success'
 const ERROR_MSG = 'error_msg'
 const SEARCHINFO = 'search_info'
 const defaultState = {
   msg: '', 
   redirectPath: '',
   data: []
 }
 /**
  * 返回reducer
  * @param {*} state 
  * @param {*} action 
  */
 export const product = (state = defaultState, action) => {
  switch(action.type) {
    case AUTH_SUCCESS : return { ...state, data:action.payload.data}
    case SEARCHINFO  : return { ...state, data:action.payload.data}
    case ERROR_MSG : return { ...state, msg: action.payload}
    default: return state
  }
}
/**
 * 返回成功action
 * @param {*} data 
 */
const succAction = (data) => {
  return {
    type: AUTH_SUCCESS,
    payload: data
  }
}
const searchAction = (data) => {
  return {
    type: SEARCHINFO,
    payload: data
  }
}
/**
 * 返回错误action
 * @param {*} msg 
 */
const errMsg = (msg) => {
  return {
    type: ERROR_MSG,
    payload: msg
  }
}
/**
 * 获取所有商品信息
 */
export const getProduct = () => {
  const url = '/api/v1/admin/product/list'
  return async (dispatch) => {
    const result = await httpGet(url)
    if(result.data.code === 0 && result.data.success) {
       return dispatch(succAction(result.data))
    }
       return dispatch(errMsg(result.data.msg))
  }
}
/**
 * 根据商品ID修改商品状态
 * @param {*} id 
 */
export const checkStatus = (id) => {
  const url = '/api/v1/admin/product/update'
  return async (dispatch) => {
    const result = await httpPost(url, {id})
    if(result.data.code === 0 && result.data.success) {
       return dispatch(searchAction(result.data))
    } 
    return dispatch(errMsg(result.data.msg))
  }
}
/**
 * 根据商品ID获取商品信息
 * @param {*} id 
 */
export const getProductById = (id) => {
  const params = { 'id': id}
  const url = '/api/v1/admin/product/listitem'
  return async (dispatch) => {
    const result = await httpGet(url, params)
    if(result.data.code === 0 && result.data.success) {
        return dispatch(searchAction(result.data))
    }
    return dispatch(errMsg(result.data.msg))
  }
}
/**
 * 根据商品ID修改商品信息
 * @param {*} id 
 */
export const updateProdById = (id, data) => {
  const url = '/api/v1/admin/product/saveinfo'
  return async (dispatch) => {
    const result = await httpPost(url, {id, data})
    if(result.data.code === 0 && result.data.success) {
       return dispatch(succAction(result.data))
    }
    return dispatch(errMsg(result.data.msg))
  }
}
/**
 * 根据商品名称获取商品信息
 * @param {*} name 
 */
export const getProductByName = (name) => {
   const params = { 'name': name}
   const url = '/api/v1/admin/product/listitem'
   return async (dispatch) => {
     const result = await httpGet(url, params)
     if(result.data.code === 0 && result.data.success) {
        return dispatch(succAction(result.data))
     }
     return dispatch(errMsg(result.data.msg))
  } 
}
/**
 * 添加商品信息
 * @param {*} obj 
 */
export const increaseProduct = (obj) => {
  const url = '/api/v1/admin/product/increase'
  return async (dispatch) => {
    const result = await httpPost(url, obj)
    if(result.data.code === 0 && result.data.success) {
      return dispatch(succAction(result.data))
    }
    return dispatch(errMsg(result.data.msg))
  }
}
/**
 * 获取所有品类信息
 */
export const getCategory = () => {
  const url = '/api/v1/admin/product/category'
  return async (dispatch) => {
    const result = await httpGet(url)
    if(result.data.code === 0 && result.data.success) {
      return dispatch(succAction(result.data))
    }
    return dispatch(errMsg(result.data.msg))
  }
}

export const updateCategory = (id, info) => {
  const url = '/api/v1/admin/product/updatecate'
  const obj = { id : id, info : info}
  return  async (dispatch) => {
    const result = await httpPost(url, obj)
    if(result.data.code === 0 && result.data.success) {
      return dispatch(succAction(result.data))
    }
    return dispatch(errMsg(result.data.msg))
  }
}

export const addCateSort = (sort) => {
  const obj = {'sort': sort}
  return async (dispatch) => {
    const result = await httpPost('/api/v1/admin/product/catesort', obj)
    if(result.data.code === 0 && result.data.success) {
      return dispatch(succAction(result.data))
    }
    return dispatch(errMsg(result.data.msg))
  }
}