import React from 'react'
import styled from 'styled-components'

import useFormValidation from '../hooks/useFormValidation'
import validateAuth from '../hooks/validateAuth'

const INITIAL_STATE = {
  email: "",
  password: ""
}

export default function Formpractice() {

  const {
    handleSubmit, handleChange, values,
    handleErros, errors, isSubmitting } = useFormValidation(INITIAL_STATE, validateAuth)


  return (
    <div>
      <h2>Register Here</h2>
      <FormStyled action="" onSubmit={handleSubmit}>
        <input
          name="email"
          onChange={handleChange}
          onBlur={handleErros}
          value={values.email}
          className={errors.email && 'erro-input'}
          autoComplete="off"
          placeholder="Your email address"
        />
        {errors.email && <p className="erro-text">{errors.email}</p>}
        <input
          name="password"
          onChange={handleChange}
          onBlur={handleErros}
          value={values.password}
          className={errors.password && 'erro-input'}
          autoComplete="off"
          type="password"
          placeholder="choose a safe password"
        />
        {errors.password && <p className="erro-text">{errors.password}</p>}

        <button disabled={isSubmitting} type="submit">Submit</button>

      </FormStyled>
    </div>
  )
}


const FormStyled = styled.form`
  margin-left: 20rem;

  .erro-text {
    color: red;
  }
  input.erro-input {
    border: 1px solid red;
  }

  input {
    display: block;
    margin-bottom: 1rem;
    padding: .5rem 1rem;

  }


`