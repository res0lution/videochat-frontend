import { useState } from "react"
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton"

const additionalStyles = {
  width: "80%",
  height: "30px",
  marginTop: "10px",
  marginLeft: "5px",
  background: "#3ba55d"
}

const AddFriendButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleOpenAddFriendDialog = () => {
    setIsDialogOpen(true)
  }

  const handleCloseAddFriendDialog = () => {
    setIsDialogOpen(false)
  }

  return (
    <>
      <CustomPrimaryButton
        additionalStyles={additionalStyles}
        label="Add Friend"
        onClick={handleOpenAddFriendDialog}
      />

      <AddFriendButton
        isDialogOpen={isDialogOpen}
        closeDialogHandler={handleCloseAddFriendDialog}
      />
    </>
  )
}

export default AddFriendButton