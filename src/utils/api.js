
import { call, put, take } from 'redux-saga/effects'
import { refreshToken, loginOk } from '../actions/auth'
import jwt_decode from 'jwt-decode'

export function* callHttp(...args) {
  if (process.env.REACT_APP_MOCK) return

  try {
    const token = localStorage.getItem('token');

    if (token) {

      let decoded;
      try {
        decoded = jwt_decode(token)
      } catch (error) {
        console.log(`Invalid token ${token}`)
      }

      if (decoded && typeof decoded.exp !== 'undefined' && decoded.exp < ((new Date()).getTime() / 1000)) {
        throw new Error('401 Forbidden')
      }
    }

    const data = yield call(...args)
    return data
  } catch (err) {
    if (err.status === 401) {
      yield put(refreshToken())
      yield take(loginOk)
      try {
        const data = yield call(...args)
        return data
      } catch (err2) {
        console.log(err2)
        throw err2
      }
    }
    throw err
  }
}
