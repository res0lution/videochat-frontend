import { Tooltip } from "@mui/material"
import { useHistory } from "react-router-dom"
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton"
import RedirectInfo from "../../shared/components/RedirectInfo"

const getFormNotValidMessage = () => 'Enter correct email and password'

const getFormValidMessage = () => 'Press to log in!'

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const history = useHistory()

  const handlePushToRegisterPage = () => {
    history.push('/register')
  }

  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>{!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}</div>
      </Tooltip>

      <div>
        <CustomPrimaryButton
          label="Login"
          additionalStyles={{ marginTop: '30px' }}
          disabled={!isFormValid}
          onClick={handleLogin}
        />
      </div>

      <RedirectInfo
        text="Need an account? "
        redirectText="Create an account"
        additionalStyles={{ marginTop: '5px' }}
        redirectHandler={handlePushToRegisterPage}
      />
    </>
  )
}

export default LoginPageFooter