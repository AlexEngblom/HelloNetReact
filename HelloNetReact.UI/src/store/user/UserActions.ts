import * as userStorage from 'utils/userStorage/UserStorage'
import {UserType} from 'types/user'
import {SetActionType} from './UserStoreTypes'
import {ThunkResultType} from 'store/StoreTypes'

export const USER_SET = 'USER:SET'
export const USER_REMOVE = 'USER:REMOVE'

export function set(user: UserType): SetActionType {
  return {
    type: USER_SET,
    user
  }
}

export function remove(): ThunkResultType<void> {
  return (dispatch) => {
    dispatch({type: USER_REMOVE})
    userStorage.clear()
  }
}
