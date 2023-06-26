import { redirect } from "react-router-dom";
import { EXPIRED } from "./authConstants";

export function getTokenDuration() {
  const expiration = localStorage.getItem('expiration')
  const expirationDate = new Date(expiration)
  const now = new Date()
  return expirationDate.getTime() - now.getTime()
}

export function getAuthToken() {
  const tokenDuration = getTokenDuration()
  const token = localStorage.getItem('token')
  
  if(!token)
    return null
  
  if(tokenDuration<=0)
    return EXPIRED

  return token
}

export function tokenLoader() {
  return getAuthToken()
}

export const checkAuthLoader = () => {
  const token = getAuthToken();

  if(!token){
    return redirect('/auth')
  }
  return true
}