import GoodsTypes from './actionTypes'

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
function product(state = defaultState, action) {
  switch (action.type) {
    case GoodsTypes.AUTH_SUCCESS: 
      return { ...state, data: action.payload.data };
    case GoodsTypes.SEARCHINFO: 
      return { ...state, data: action.payload.data };
    case GoodsTypes.ERROR_MSG: 
      return { ...state, msg: action.payload };
    default: return state
  }
}
export default product
export * from './actions'