import orderTypes from './actionsTypes'

const defaultState = {}

function order(state = defaultState, action) {
  switch (action.type) {
    case orderTypes.SUCCESS_AUTH: 
      return { ...state, ...action.payload };
    case orderTypes.DETAIL_AUTH: 
      return { ...state, data: action.payload.data, info: action.payload.info };
    case orderTypes.ERROR_MSG: 
      return { ...state, msg: action.payload };
    default: return state
  }
}
export default order
export * from './actions'
