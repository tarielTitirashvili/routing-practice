import React from 'react'
import { Outlet, 
  useNavigation } from 'react-router-dom'
import Loader from '../components/loader'
import MainNavigation from '../components/MainNavigation'

function RootLayout() {

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