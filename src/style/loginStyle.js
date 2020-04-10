import styled from 'styled-components'

export default styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
  max-width: 60.25rem;

  main {
    margin-top: 2rem;
    text-align: center;

    .first-user-btn {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
 
      p {
        color: var(--grey);
        opacity: .5;
        letter-spacing: 1px;
      }

      .btn {
        background-color: var(--orange);
        display: inline-block;
        margin-left: 1rem;
        align-self: center;
        padding: .5rem 1rem;
      }

      @media only screen and (min-width: 40.625em ) {
        justify-content: right;
        flex-direction: row;
      }
    }
    
    form {
      .form-control {

        text-align: left;
        display: flex;
        align-items: center;
        font-size: 1.25rem;
        color: var(--grey);
        position: relative;
        flex-direction: column;

        &:not(:last-child){
          margin-bottom: 1rem;
        }

        label {
          display: block;
          width: 100%;
          padding: .4rem;

  
        }

        input {
          padding: .6rem .5rem;
          border: 2px solid rgba(0, 0, 0, .4);
          border-radius: 8px;
          width: 100%;

          &:focus { border: 2px solid #0094FF  }

          &::placeholder {
            font-size: 1.25rem;
          }
          
          &.correct { border: 2px solid #02d57c; }
          &.error { border: 2px solid #ff516d; }
          &.warning { border: 2px solid #f8b300; }

        }

      

        svg {
          position: absolute;
          width: 1.5rem;
          height: 1.5rem;
          display: none;
          right: .5rem;
          top: 72%;
          transform: translateY(-50%);

          &.correct { 
            fill: #02d57c; transform: translate(3.41 5.59); }
          &.error { transform: translate(2 2); fill: #ff516d  }
          &.warning { transform: translate(1 2); fill: #f8b300 }


        }

        /* NOTE: this is where the magic happen */

        .correct ~ .correct {
          display: inline-block;
        }

        .error ~ .error {
          display: inline-block;
        }

        .warning ~ .warning {
          display: inline-block;
        }

        

        @media only screen and (min-width: 40.625em ){
          flex-direction: row;
          justify-content: center;
          font-size: 1.5rem;

          &:not(:last-child){
            margin-bottom: 2rem;
          }
          label {
            flex-grow: 1;
            text-align: right;
            padding-right: 1rem;
            max-width: 40%;
            
          }

          input { 
            flex-grow: 1;
          }
          svg { 
            top: 50%;
            &.correct {top: 58% }
          }
        }
      }

      p {
        position: absolute;
        display: block;
        font-size: 1rem;
        bottom: -2.25rem;
        left: 40%;

        &.error { color: #ff516d }
        &.warning { color: #f8b300 }

      }

      button {
        display: inline-block;
        padding: .3em 1em;
        font-size: 1.25rem;
        text-transform: capitalize;
        text-decoration: none;
        color: white;
        text-align: center;
        border: none;
        cursor: pointer;
        letter-spacing: 1px;
        border-radius: 5px;
        background-color: var(--green);
      }

      .btn-fade {
        opacity: .5;
      }


    }



  }

    .link {
      margin-top: 1rem;
      display: inline-block;
      opacity: .4;
      padding-bottom: 2rem;
    }




`