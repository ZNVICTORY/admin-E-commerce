import { httpGet } from '../../utils/utils'

const SUCCESS_AUTH = "SUCCESS_AUTH"
const ERROR_MSG    = 'ERROR_MSG'
const DETAIL_AUTH  = 'DETAIL_AUTH'

const defaultState = {

}

export const order = (state = defaultState, action) => {
  switch(action.type) {
    case SUCCESS_AUTH : return { ...state, ...action.payload}
    case DETAIL_AUTH  : return { ...state, data: action.payload.data, info: action.payload.info}
    case ERROR_MSG    : return { ...state, msg: action.payload}
    default           : return state
  }
}

const successAction = (data) => {
  return {
    type: SUCCESS_AUTH,
    payload: data
  }
}

const errMsg = (msg) => {
  return {
    type: ERROR_MSG,
    payload: msg
  }
}
const detailAction = (data) => {
  return {
    type: DETAIL_AUTH,
    payload: data
  }
}

export const getOrderLsit = () => {
  return async (dispatch) => {
    const result = await httpGet('/api/v1/admin/order/list')
    if(result.data.code === 0 && result.data.success) {
       return dispatch(successAction(result.data))
    }
     return dispatch(errMsg(result.data.msg))
  }
}

export const getOrderById = (id) => {
  const params = { 'id': id}
  return async (dispatch) => {
    const result = await httpGet('/api/v1/admin/order/item', params)
    if(result.data.code === 0 && result.data.success) {
      return dispatch(successAction(result.data))
    }
    return dispatch(errMsg(result.data.msg))
  }
}

export const getOrderDetailById = (id) => {
  const params = { 'id' : id}
  return async (dispatch) => {
    const result = await httpGet('/api/v1/admin/order/detail', params)
    if(result.data.code === 0 && result.data.success) {
      return dispatch(detailAction(result.data))
    }
     return dispatch(errMsg(result.data.msg))
  }
}