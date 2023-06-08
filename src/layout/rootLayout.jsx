import React from 'react'
import { Outlet, 
  useNavigation } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

function RootLayout() {

  const navigation = useNavigation()
  navigation.state === 'loading'
  return (
    <main>
      <MainNavigation/>
      {navigation.state === 'loading' ? 
          <h1 
          style={{
            width:'100%', 
            minHeight: '30vh', 
            display: 'flex', 
            justifyContent:'center', 
            alignItems:'center' 
          }}
        > ...Loading </h1> 
        : 
          <Outlet/>
      }
    </main>
  )
}

export default RootLayout