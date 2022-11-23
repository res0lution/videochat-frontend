import InputWithLabel from "../../shared/components/InputWithLabel"

const RegisterPageInputs = ({ 
    mail, 
    setMail, 
    username, 
    setUsername, 
    password, 
    setPassword 
}) => {
  return (
    <>
      <InputWithLabel
        value={ mail }
        setValue={ setMail }
        label='E-mail'
        type='text'
        placeholder='Enter your email address'
      />

      <InputWithLabel
        value={ username }
        setValue={ setUsername }
        label='user'
        type='text'
        placeholder='Enter your user name'
      />

      <InputWithLabel
        value={ password }
        setValue={ setPassword }
        label='Password'
        type='password'
        placeholder='Enter password'
      />
    </>
  )
}

export default RegisterPageInputs