import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage(props) {
  // useRouteError gets error object from route error
  const error = useRouteError()
  if(error.status === 404) {
    return<div>
      <h3>error 404</h3>
    </div>
  }else{
    const {isError, message} = JSON.parse(error?.data)
    if(isError) {
      return<div>
        <h3>{message? message : 'something went wrong'}</h3>
      </div>
    }
  }
}

export default ErrorPage