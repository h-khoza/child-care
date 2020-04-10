export default function validateAuth(values) {

  let errors = {
    error_state: false,

  }
  // let errorsType = {}

  //Email erros
  if (!values.email) {

    errors.email_text = 'Email is Required';
    errors.email_type = 'error';
    errors.error_state = true

  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {

    errors.email_text = 'Invalid email adddress'
    errors.email_type = 'warning';
    errors.error_state = true

  } else {
    errors.email_type = 'correct';
    errors.error_state = false

  }

  //password errors
  if (!values.password) {
    errors.password_text = 'Password is Required';
    errors.password_type = 'error';
    errors.error_state = true

  }

  // else if (values.password.length < 6) {

  //   errors.password.text = 'Password must be at least six characters'
  //   errors.password.type = "warning"

  //   errors.password = ''
  // } else {
  //   errors.password.type = "correct"

  // }

  return errors;

}