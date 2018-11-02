const BACKEND = process.env.REACT_APP_API_URL
console.log(process.env)

export const LOGIN = `${BACKEND}login`
export const REFRESHTOKEN = `${BACKEND}token/refresh`

export const FORGOTPASSWORD = `${BACKEND}forgotpassword`
export const RESETPASSWORD = `${BACKEND}resetpassword`

export const USERS = `${BACKEND}my/user`
export const USER = (id) => `${BACKEND}my/user/${id}`

export const GROUP_USERS = `${BACKEND}my/users`

export const ME = `${BACKEND}me`