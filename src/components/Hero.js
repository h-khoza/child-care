import React from 'react'
import HeroStyle from '../style/heroStyle'
import Button from './Button'

export default function Hero() {
  return (
    <HeroStyle>
      <h1>
        The smart way to care for your child
      </h1>

      <div className="img">
        <div className="left"></div>
        <div className="right"></div>
      </div>

      <div className="sub-text">
        <p> If you're a parent and you wanna view
        the process  of your child click the button
      bellow</p>

        <Button text="View Child" url="#" />
      </div>
    </HeroStyle>
  )
}
