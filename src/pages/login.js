import React from 'react'
import LoginStyle from '../style/loginStyle'
import TittleSatues from '../components/titleStatus'
import Button from '../components/Button'

import useFormValidation from '../hooks/useFormValidation'
import validate from '../hooks/validateAuth'



const INITIAL_STATE = {
  email: "",
  password: ""
}

export default function Login() {

  const { handleSubmit, handleChange, values,
    handleErros, errors, isSubmitting } = useFormValidation(INITIAL_STATE, validate)


  return (
    <LoginStyle>
      <TittleSatues text="Log in" />

      <main>
        <div className="first-user-btn">
          <p>First time user, create a new password here</p>
          <Button text="New User" url="/new-user" />
        </div>

        <form action="" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="email">Email address:</label>
            <input
              name="email"
              onChange={handleChange}
              onBlur={handleErros}
              placeholder="johndoe@example.com"
              value={values.email}
              className={`${errors.email_type}`}
            />

            {errors.email_text && <p className={`${errors.email_type}`}>{errors.email_text}</p>}

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

          <div className="form-control">
            <label htmlFor="password">password:</label>
            <input
              name="password"
              type="password"
              onChange={handleChange}
              onBlur={handleErros}
              placeholder="Enter your password"
              className={`${errors.password_type}`}

            />

            {errors.password_text && <p className={`${errors.password_type}`}>{errors.password_text}</p>}

            <svg className="correct" viewBox="0 0 24 24">
              <path d="M5.59,10.58,1.42,6.41,0,7.82l5.59,5.59,12-12L16.18,0Z" />
            </svg>
            <svg className="error" viewBox="0 0 24 24">
              <path d="M9.99,20A10,10,0,1,1,20,10,10.006,10.006,0,0,1,9.99,20ZM10,2a8,8,0,1,0,8,8A8.009,8.009,0,0,0,10,2Zm1,13H9V13h2v2Zm0-4H9V5h2v6Z" />
            </svg>

            <svg className="warning" viewBox="0 0 24 24">
              <path d="M22,19H0L11,0,22,19ZM10,14v2h2V14Zm0-6v4h2V8Z" />
            </svg>
          </div>


          <button className={errors.error_state && "btn-fade"} disabled={isSubmitting} type="submit">Log in</button>

        </form>


        <a className="link" href="/reset-password">forgot password</a>
      </main>

    </LoginStyle>
  )
}
