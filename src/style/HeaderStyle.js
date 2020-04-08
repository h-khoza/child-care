import styled from 'styled-components'



export default styled.header`
display: grid;
grid-template-columns: 1fr 1fr;
max-width: 60.25rem;
width: 90%;
margin: 0 auto;


.logo {
  width: 6.5rem;
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
      a {
        letter-spacing: 3px;
        font-size: 1.125rem;
        text-decoration: none;
        color: var(--grey);

      }
      
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
  font-size: 1.25rem;
  text-transform: capitalize;
  text-decoration: none;
  color: white;
  text-align: center;
  /* font-weight: 400; */
  letter-spacing: 1px;
  border-radius: 5px;
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