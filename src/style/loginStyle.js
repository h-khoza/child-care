import styled from 'styled-components'

export default styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
  max-width: 60.25rem;

  main {
    margin-top: 2rem;

    .first-user-btn {
      display: flex;
      justify-content: right;
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
    }

    form {
      .input {
        border: 2px solid rgba(0,0,0,.4);
        padding: .75rem 1rem;
        border-radius: 10px;
        display: grid;
        grid-template-columns: 1fr 2fr;
        &:not(:last-child){
          margin-bottom: 2rem;
        }

        label {
          font-size: 1.25rem;
          color: var(--grey);
          text-align: right;
          transform: translate3d(50%, 0, 0);
          transition: all .3s ease-in;
          opacity: 0;


          }
        }

        input {
          border: none;
          font-size: 1.25rem;
          color: var(--grey);
          justify-self: center;
          display: inline-block;
          width: 100%;
          margin-left: 1rem;
          

          &::placeholder {
            font-size: 1.25rem;
            
          }

        

          
        }

      }


    }
 

  }




`