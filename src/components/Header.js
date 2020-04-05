import React from 'react'
import logo from '../img/logo.png'
import Button from './Button'
import { HeaderStyle } from '../style/Style'

export default function Header() {
  return (
    <HeaderStyle>

      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <Button text="sign in" url="#" />

    </HeaderStyle>
  )
}
