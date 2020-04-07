import styled from 'styled-components'
import bgHero from '../img/bg-hero.jpg'


const HeaderStyle = styled.header`
display: grid;
grid-template-columns: 1fr 1fr;
padding: 1.875rem 2rem 0 2rem;
background: linear-gradient(to bottom,#F8FCFB 0% ,transparent  100% );

  @media only screen and (min-width: 40.625em ){
    grid-template-columns: 1fr 1fr 1fr;
  }

.logo {
  width: 6.25rem;
  align-self: center;
  grid-row: 1 / 2;
  grid-column: 1 / 2;

  img {
    width: 100%;
    transform: translateY(8px);
  }
}

.nav {
  grid-column: 1 / 3;
  color: var(--grey);
  justify-self: center;
  padding-top: .5rem;

  ul {
    list-style: none;
    padding: 0;

    li {
      display: inline-block;
      letter-spacing: 3px;
      font-size: 1.125rem;

      &:not(:last-child) {
        padding-right: 1rem;
      }
    }

  }



}

.btn {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  margin-left: auto;
  align-self: center;

  display: inline-block;
  padding: .3em 1em;
  font-size: 1.125rem;
  text-transform: capitalize;
  text-decoration: none;
  color: white;
  text-align: center;
  /* font-weight: 400; */
  letter-spacing: 1px;
  border-radius: 8px;
  background-color: var(--green);
   

}

@media only screen and (min-width: 40.625em ){
  grid-template-columns: 1fr 2fr 1fr;

  .btn { grid-column: 3 / 4 }
  .nav { grid-column: 2 / 3}
  /* .nav { justify-self: center } */
    
}
/* Hello*/


`

const HeroStyle = styled.div`
  h1 {
    font-size: 1.875rem;
    color: var(--black);
    text-transform: capitalize;
    letter-spacing: 4px;
    line-height: 1.6;
  }

  .img {
    width: 100%;
    height: 50vh;
    background: url("${bgHero}") no-repeat;
    background-size: 140%;
    background-position: left bottom;
    position: relative;


    .left, .right {
      position: absolute;
      height: 100%;
      width: 45%;
      background: rgba(0, 0, 50, .5);

      

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

    }

  }

`

export { HeaderStyle, HeroStyle }