import React from 'react'
import styled from 'styled-components'
import TittleStatus from '../components/titleStatus'
import LoginStyle from '../style/loginStyle'
import Button from '../components/Button'

export default function NewUser() {
  return (
    <LoginStyle>
      <TittleStatus text="Enter your email address" />
      <main>

        <div className="first-user-btn">
          <p>If you already have a password</p>
          <Button text="Log in" url="/login" />
        </div>

        <form action="">

          <div className="form-control">
            <label htmlFor="email">Email address:</label>
            <input
              name="email"
              onChange='{handleChange}'
              onBlur='{handleErros}'
              placeholder="johndoe@example.com"
              value='{values.email}'
              className="{errors.email_type}" _
            />

            {/* {errors.email_text && <p className={`${errors.email_type}`}>{errors.email_text}</p>} */}

            <svg className="correct" viewBox="0 0 24 24">
              <path d="M5.59,10.58,1.42,6.41,0,7.82l5.59,5.59,12-12L16.18,0Z" />
            </svg>
            <svg className="error show" viewBox="0 0 24 24">
              <path d="M9.99,20A10,10,0,1,1,20,10,10.006,10.006,0,0,1,9.99,20ZM10,2a8,8,0,1,0,8,8A8.009,8.009,0,0,0,10,2Zm1,13H9V13h2v2Zm0-4H9V5h2v6Z" />
            </svg>

            <svg className="warning " viewBox="0 0 24 24">
              <path d="M22,19H0L11,0,22,19ZM10,14v2h2V14Zm0-6v4h2V8Z" />
            </svg>
          </div>

          <button type="submit">Continue</button>
        </form>

      </main>

    </LoginStyle>


  )
}

const NewUserStyle = styled.div`

`