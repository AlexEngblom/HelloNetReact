import {UserStateType} from './user/UserStoreTypes'
import {ThunkAction} from 'redux-thunk'
import {Action} from 'redux'

export type StoreType = {
  user: UserStateType
}

export type ThunkResultType<R> = ThunkAction<R, StoreType, any, Action>
