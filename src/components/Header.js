import React from 'react'
import Logo from '../assets/logo.png'
import "./Header.css"


const Header = () => {
  return (
    <header className='logo'>
        <img src={Logo} alt='' />
        <a href='/'>Home</a>

    </header>
  )
}

export default Header
