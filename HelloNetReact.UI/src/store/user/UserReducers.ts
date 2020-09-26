import * as actions from './UserActions'
import {UserStateType, RemoveActionType, SetActionType} from './UserStoreTypes'

const defaultState = {
  email: null,
  token: null
}

export default (state: UserStateType = defaultState, action: RemoveActionType | SetActionType) => {
  switch (action.type) {
    case actions.USER_SET:
      return {
        ...action.user
      }
    case actions.USER_REMOVE:
      return {
        ...defaultState
      }
    default:
      return state
  }
}
