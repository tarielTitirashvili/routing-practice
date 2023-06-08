import React from 'react'
import { useRouteError } from 'react-router-dom'
import MainNavigation from './MainNavigation'

function ErrorPage() {
  // useRouteError gets error object from route error
  const error = useRouteError()
  
  console.log(error)

  if(error.status === 404) {
    return<div>
      <MainNavigation/>
      <h1 className='message error' >error 404</h1>
    </div>
  }else{
    const {message} = error?.data
    
      return<div>
        <MainNavigation/>
        <h3 className='message error' >{message? message : 'something went wrong'}</h3>
      </div>
  }
}

export default ErrorPage