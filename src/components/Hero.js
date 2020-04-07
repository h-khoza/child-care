import React from 'react'
import { HeroStyle } from '../style/Style'
import Button from './Button'
import bgHero from '../img/bg-hero.jpg'
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
        <h2> If you're a parent and you wanna view
        the process  of your child click the button
      bellow</h2>

        <Button text="View Child" url="#" />
      </div>
    </HeroStyle>
  )
}
