import { createAction } from 'redux-act'

export const login = createAction('login')
export const loginOk = createAction('login successful')
export const refreshToken = createAction('refresh token initiated')
export const refreshTokenOk = createAction('refreshed token successfully')
export const logout = createAction('logout')

export const resetPassword = createAction('resetPassword')
export const setResponseCaptcha = createAction('setResponseCaptcha')
export const forgotPassword = createAction('forgotPassword')
export const forgotPasswordOk = createAction('forgotPassword successful')
export const resetPasswordOk = createAction('resetPasswordOk')