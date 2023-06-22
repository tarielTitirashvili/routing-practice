import { redirect } from "react-router-dom";

export function getAuthToken() {
  return localStorage.getItem('token')
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