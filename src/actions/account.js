import { createAction } from 'redux-act'

export const getMe = createAction('getMe')
export const setMe = createAction('setMe')

export const getUsers = createAction('getUsers')
export const setUsers = createAction('setUsers')
export const addUser = createAction('addUser')
export const patchUser = createAction('patchUser')
export const deleteUser = createAction('deleteUser')

export const patchMany = createAction('patchMany')
export const deleteMany = createAction('deleteMany')