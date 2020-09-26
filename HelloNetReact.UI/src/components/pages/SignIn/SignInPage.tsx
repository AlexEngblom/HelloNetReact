import React from 'react'

import SignInContent from './SignInContent'
import * as userActions from 'store/user/UserActions'
import * as userStorage from 'utils/userStorage/UserStorage'
import {useDispatch} from 'store/Store'

const SignInPage = () => {
  const dispatch = useDispatch()

  function authenticate(email: string, remember: boolean) {
    // Simulate token generation
    const authData = {
      email,
      token: Math.random()
        .toString(36)
        .substr(2)
    }

    if (remember) {
      userStorage.save(authData)
    }

    dispatch(userActions.set(authData))
  }

  return <SignInContent authenticate={authenticate} />
}

export default SignInPage
