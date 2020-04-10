import { useState, useEffect } from "react"

function useFormValidation(initialState, validate) {

  const [values, setValues] = useState(initialState)

  const [errors, setErrors] = useState({})
  const [isSubmitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (isSubmitting) {

      if (errors.error_stat) {
        console.log("authenticate", values.email, values.password)
        setSubmitting(false)

      } else {
        setSubmitting(false)
        console.log(errors)
      }
    }



  }, [errors, values, isSubmitting])


  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }



  function handleErros(event) {

    const validateErros = validate(values)

    if (event.target.className) {
      event.target.classList.remove(event.target.className)
    }
    event.target.classList.add(validateErros.email_type)

    setErrors(validateErros)

    // console.log(validateErros.emailType)


  }

  function handleSubmit(event) {
    event.preventDefault()
    const validateErros = validate(values)
    setErrors(validateErros)
    setSubmitting(true)
  }


  return { handleSubmit, handleChange, values, handleErros, errors, isSubmitting }

}

export default useFormValidation