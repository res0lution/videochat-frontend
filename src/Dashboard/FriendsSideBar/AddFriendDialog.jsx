import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { validateMail } from "../../shared/utils/validators"
import InputWithLabel from "../../shared/components/InputWithLabel"
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton"
import { getActions } from "../../store/actions/friendsActions"
import { connect } from "react-redux"

const AddFriendDialog = ({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitation = () => {}
}) => {
  const [mail, setMail] = useState('')
  const [isFormValid, setIsFormValid] = useState('')

  const handleSendInvitation = () => {
    sendFriendInvitation({
      mail,
    })
  }

  const handleCloseDialog = () => {
    closeDialogHandler()
    setMail('')
  }

  useEffect(() => {
    setIsFormValid(validateMail(mail))
  }, [mail, setIsFormValid])

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            <Typography>
              Enter e-mail address of friend which you would like to invite
            </Typography>
          </DialogContentText>

          <InputWithLabel
              label="Mail"
              type='text'
              value={mail}
              setValue={setMail}
              placeholder="Enter mail address"
            />
        </DialogContent>

        <DialogActions>
          <CustomPrimaryButton
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            label="Send"
            additionalStyles={{ 
              marginLeft: '15px',
              marginRight: '15px',
              marginBottom: '10px'
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  )
}

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch)
  }
}

export default connect(null, mapActionsToProps)(AddFriendDialog)