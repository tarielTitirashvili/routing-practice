import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage(props) {
  const error = useRouteError()
  console.log(error)
  return (
    <div>error</div>
  )
}

export default ErrorPage