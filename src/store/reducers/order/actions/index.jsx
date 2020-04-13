import orderTypes from '../actionsTypes'
import { httpGet } from '../../../../utils/utils'

const successAction = (data) => {
  return {
    type: orderTypes.SUCCESS_AUTH,
    payload: data
  }
}
const errMsg = (msg) => {
  return {
    type: orderTypes.ERROR_MSG,
    payload: msg
  }
}
const detailAction = (data) => {
  return {
    type: orderTypes.DETAIL_AUTH,
    payload: data
  }
}
export const getOrderLsit = () => {
  return async (dispatch) => {
    const result = await httpGet('/api/v1/admin/order/list')
    if (result.data.code === 0 && result.data.success) {
      return dispatch(successAction(result.data))
    }
    return dispatch(errMsg(result.data.msg))
  }
}

export const getOrderById = (id) => {
  const params = { 'id': id }
  return async (dispatch) => {
    const result = await httpGet('/api/v1/admin/order/item', params)
    if (result.data.code === 0 && result.data.success) {
      return dispatch(successAction(result.data))
    }
    return dispatch(errMsg(result.data.msg))
  }
}

export const getOrderDetailById = (id) => {
  const params = { 'id': id }
  return async (dispatch) => {
    const result = await httpGet('/api/v1/admin/order/detail', params)
    if (result.data.code === 0 && result.data.success) {
      return dispatch(detailAction(result.data))
    }
    return dispatch(errMsg(result.data.msg))
  }
}