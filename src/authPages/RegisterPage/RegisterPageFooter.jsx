import { Tooltip } from "@mui/material"
import { useHistory } from "react-router-dom"
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton"
import RedirectInfo from "../../shared/components/RedirectInfo"

const getFormNotValidMessage = () => 'Enter correct email and password'

const getFormValidMessage = () => 'Press to register!'

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  const history = useHistory()

  const handlePushToLoginPage = () => {
    history.push('/login')
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
          label="Register"
          additionalStyles={{ marginTop: '30px' }}
          disabled={!isFormValid}
          onClick={handleRegister}
        />
      </div>

      <RedirectInfo
        text=""
        redirectText="Already have an account?"
        additionalStyles={{ marginTop: '5px' }}
        redirectHandler={handlePushToLoginPage}
      />
    </>
  )
}

export default RegisterPageFooter