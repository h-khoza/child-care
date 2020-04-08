import styled from 'styled-components'
import bgHero from '../img/bg-hero.jpg'

export default styled.div`

  display: grid;
  grid-template-columns: 1fr;


  h1 {
    display: block;
    font-size: 1.875rem;
    color: var(--black);
    text-transform: capitalize;
    letter-spacing: 4px;
    line-height: 1.6;
    margin: 0;
    margin-bottom: .875rem;
  }

  .img {
    width: 100%;
    height: 50vh;
    min-height: 17.5rem;
    position: relative;
    max-width: 29rem;
    margin: 0 auto;

    &::after, &::before {
      position: absolute;
      content: "";
      display: block;
      height: 6.25rem;
      width: 3.125rem;
      z-index: -1;
      
    }

    &::after {
      left: 40%;
      top: -6%;
      background-color: var(--orange);
      border-bottom-right-radius: 2rem;
      border-top-left-radius: 2rem;
    }

    &::before {
      right: 40%;
      bottom: -6%;
      background-color: var(--green);
      border-top-left-radius: 2rem;
      border-bottom-right-radius: 2rem;
    }


    .left, .right {
      position: absolute;
      height: 100%;
      width: 47%;
      background: url("${bgHero}");
      background-size: cover;

    }

    .left {
      left: 0;
      border-top-left-radius: 30rem;
      border-bottom-left-radius: 30rem;
      border-bottom-right-radius: 30rem;
    }

    .right {
      right: 0;
      border-bottom-right-radius: 30rem;
      border-top-right-radius: 30rem;
      border-top-left-radius: 30rem;
      background-position: 65%;

    }

  }

  .sub-text {
    p {
      padding-top: 1rem;
      font-size: 1.25rem;
      color: var(--black);
    }

    .btn {
      display: block;
      padding: .5em 1em;
      font-size: 1.5rem;
      text-transform: capitalize;
      text-decoration: none;
      color: white;
      text-align: center;
      font-weight: 600;
      letter-spacing: 1px;
      border-radius: 5px;
      background-color: var(--green);
      margin: 0 auto;
    }
  }
 
  @media only screen and (min-width: 40.625em ){
    grid-template-columns: 1fr 1.5fr;
    grid-template-rows: 1fr 1fr;
    margin-top: 4rem;

    
    h1 {
      align-self: flex-end;
      font-size: 2.25rem;
    }
    .img {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
      align-self: center;
      height: 60vh;
      margin: 0 0 0 auto;
   
    }
    .sub-text .btn {
      display: inline-block;
    }
  }

`