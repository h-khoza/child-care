import React from 'react'
import LoginStyle from '../style/loginStyle'
import TittleSatues from '../components/titleStatus'
import Button from '../components/Button'

export default function login() {
  return (
    <LoginStyle>
      <TittleSatues text="Log in" />

      <main>
        <div className="first-user-btn">
          <p>First time user, create a new password here</p>
          <Button text="New User" url="/new-user" />
        </div>
        <form action="" method="POST">
          <div className="input">
            <label for="email">Email address:</label>
            <input type="email" id="email" placeholder="Email address" />
          </div>
          <div className="input">
            <label for="Password" >Password:</label>
            <input type="password" class="form-control" id="Password" placeholder="Password" />
          </div>

          <button type="submit">Log in</button>

        </form>
        <a href="/reset-password">forgot password</a>
      </main>

    </LoginStyle>
  )
}
