import React from 'react'
import { useEffect } from 'react'
import { Outlet, 
  useLoaderData, 
  useNavigation, 
  useSubmit} from 'react-router-dom'
import Loader from '../components/loader'
import MainNavigation from '../components/MainNavigation'
import { EXPIRED } from '../utils/authConstants'

function RootLayout() {
  const token = useLoaderData()
  const submit = useSubmit()
  useEffect(()=>{
    if(token === EXPIRED){
      submit(null, {action: '/logout', method: 'post'})

    }
    if(!token)
      return;

      setTimeout(()=>{
      submit(null, {action: '/logout', method: 'post'})
    }, 3600000)
  }, [token, submit])

  const navigation = useNavigation()
  navigation.state === 'loading'
  return (
    <main>
      <MainNavigation/>
      {navigation.state === 'loading' ? 
          <Loader/>
        : 
          <Outlet/>
      }
    </main>
  )
}

export default RootLayout