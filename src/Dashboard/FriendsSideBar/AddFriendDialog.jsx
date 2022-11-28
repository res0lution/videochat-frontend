import { Dialog, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { validateMail } from "../../shared/utils/validators"
import InputWithLabel from "../../shared/components/InputWithLabel"

const AddFriendDialog = ({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitation = () => {}
}) => {
  const [mail, setMail] = useState('')
  const [isFormValid, setIsFormValid] = useState('')

  const handleSendInvitation = () => {}

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
      </Dialog>
    </div>
  )
}

export default AddFriendDialog