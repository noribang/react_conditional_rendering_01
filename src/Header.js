import React from 'react'
import Login from './Login'
import Logout from './Logout'

function Header({ isLoggedIn }) {
//   console.log(isLoggedIn)

function getButton() {
    if (isLoggedIn) {
        return <Logout />
    } else {
        return <Login />
    }
}

  return (
    <header>
      <h1>PetLand</h1>
      <nav>
        {/* <Login /> */}
        {getButton()}
      </nav>
    </header>
  )
}

export default Header