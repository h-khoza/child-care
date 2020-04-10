import React from 'react'
import styled from 'styled-components'


export default function titleStatus({ text }) {
  return (
    <TittleStatusStyle>
      <h2>{text}</h2>
    </TittleStatusStyle>
  )
}




const TittleStatusStyle = styled.div`
  padding: .5rem;
  margin: 4rem auto 0 auto;
  text-align: center;
  background-color: var(--green);
  color: white;
  border-radius: .875rem;
  font-size: .875rem;
  position: relative;

  &::after, &::before {
    display: block;
    content: "";
    background-color: var(--orange);
    height: 3rem;
    width: 5rem;
    position: absolute;
    border-bottom-right-radius: 1rem;
    border-top-left-radius: 1rem;
  }
  
   &::after {
    bottom: -0.5rem;
    left: -0.5rem;
    border-bottom-left-radius: 1rem;
   }

  &::before {
    top: -0.5rem;
    right: -0.5rem;
    border-top-right-radius: 1rem;
  }

  @media only screen and (min-width: 40.625em ){
    border-radius: 1rem;
    padding: 1.5rem;
    font-size: 1.5rem;
    text-transform: capitalize;
    
    &::after, &::before {
      height: 4rem;
      width: 6rem;
      border-bottom-right-radius: 1.5rem;
      border-top-left-radius: 1.5rem;
    }
    &::after {
      border-bottom-left-radius: 1.5rem;
   }

  &::before {
    border-top-right-radius: 1.5rem;
  }



}

`