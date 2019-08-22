import React from 'react'
import './NavBar.scss'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav className='navigation'>
        <Link to='/'><h1>Welcome To ManagerApp!</h1></Link>
      </nav>
    </div>
  )
}

export default NavBar