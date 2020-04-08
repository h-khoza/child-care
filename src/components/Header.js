import React from 'react'
import { Link } from 'react-router-dom'

import Button from './Button'
import HeaderStyle from '../style/headerStyle'

export default function Header() {
  return (
    <HeaderStyle>

      <div className="logo">
        <Link to="/">
          <img src="./img/logo.png" alt="logo" />
        </Link>
      </div>

      <div className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <Button text="sign in" url="/login" />

    </HeaderStyle>
  )
}
