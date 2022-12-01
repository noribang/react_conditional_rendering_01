import React from 'react'
import Login from './Login'
import Logout from './Logout'

function Header({ isLoggedIn }) {
//   console.log(isLoggedIn)

function getButton() {
    
}

  return (
    <header>
      <h1>PetLand</h1>
      <nav>
        <Login />
      </nav>
    </header>
  )
}

export default Header