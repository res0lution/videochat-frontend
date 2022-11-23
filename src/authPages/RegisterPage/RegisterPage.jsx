import { Typography } from "@mui/material"
import { useState, useEffect } from "react"
import AuthBox from "../../shared/components/AuthBox"
import { validateRegisterForm } from "../../shared/utils/validators"
import RegisterPageFooter from "./RegisterPageFooter"
import RegisterPageInputs from "./RegisterPageInputs"

const RegisterPage = () => {
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [isFormValid, setIsFormValid] = useState(false)

  useEffect(() => {
    setIsFormValid(validateRegisterForm({ mail, username, password }))
  }, [mail, username, password, setIsFormValid])

  const handleRegister = () => {

  }

  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: '#fff' }}>
        Create an account
      </Typography>

      <RegisterPageInputs
        mail={mail}
        setMail={setMail}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />

      <RegisterPageFooter
        isFormValid={isFormValid} 
        handleLogin={handleRegister} 
      />
    </AuthBox>
  )
}

export default RegisterPage