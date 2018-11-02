import { put, call } from 'redux-saga/effects'

import {
  LOGIN,
  RESETPASSWORD,
  FORGOTPASSWORD,
  REFRESHTOKEN
} from '../constants/api'

import {
  logout,
  loginOk,
  resetPasswordOk,
  forgotPasswordOk
} from '../actions/auth'

import { callHttp } from '../utils/api';
import { post } from '../utils/httpUtil';
import { toastr } from 'react-redux-toastr'; 
import * as messageTypes from '../constants/messageTypes';

export function* login({ payload }) {
 
  const { email, password } = payload
  try {
    
    const data = yield callHttp(post, LOGIN, { email, password })
    
    yield put(
      loginOk({
        token: data.token,
        refreshToken: data.refresh_tokens
      })
    )
  } catch (err) {
    yield put(toastr.error(messageTypes.ERROR, err.message))
  }
}

export function* refreshToken() {
  try {
    const refreshToken = localStorage.getItem('refreshToken')
    const data = yield call(post, REFRESHTOKEN, { refresh_token: refreshToken })
    yield put(loginOk({
      token: data.token,
      refreshToken: data.refresh_token
    }))
  } catch (err) {
    yield put(logout())
    yield put(toastr.error(messageTypes.ERROR, err.message))
  }
}

export function* forgotPassword({ payload }) {
  const { email } = payload
  
  try {
    yield callHttp(post, FORGOTPASSWORD, { email })
    yield put(forgotPasswordOk())
    toastr.success(messageTypes.SUCCESS, "Forgot password call succeeded")
  }
  catch (err) {
    yield put(toastr.error(messageTypes.ERROR, err.message))
  }
}

export function* resetPassword({ payload }) {
  try {
    const { email, password, token } = payload    
    yield callHttp(post, RESETPASSWORD, { email: email, password: password, token: token })    
    yield put(resetPasswordOk())
    toastr.success(messageTypes.SUCCESS, "Reset password succeeded")
  } catch (err) {
    yield put(toastr.error(messageTypes.ERROR, err.message))
  }
}
