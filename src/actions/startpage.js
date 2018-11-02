import { createAction } from 'redux-act'

export const closeForgotPass = createAction('closeForgotPass')
export const openForgotPass = createAction('openForgotPass')
export const receiveForgotPass = createAction('receiveForgotPass')

export const closeRegistration = createAction('closeRegistration')
export const openRegistration = createAction('openRegistration')
export const receiveRegisterData = createAction('receiveRegisterData')
export const chageEmailInput = createAction('chageEmailInput')

export const setRegistrationEmail = createAction('setRegistrationEmail')


