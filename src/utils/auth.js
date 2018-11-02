/* global localStorage:true */

export const loggedIn = () => {
    return localStorage.getItem('token')
  }
  
  export const logout = () => {
    return localStorage.removeItem('token')
  }
  