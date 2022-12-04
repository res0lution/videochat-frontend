import { styled } from "@mui/system"
import PendingInvitationsListItem from "./PendingInvitationsListItem"

const DUMMY_INVITATIONS = [
  {
    _id: 1,
    senderId: {
      username: 'Mark',
      mail: 'email@mark.com',
    }
  },
  {
    _id: 2,
    senderId: {
      username: 'John',
      mail: 'email@john.com',
    }
  }
]

const MainContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto"
})

const PendingInvitationsList = () => {
  return (
    <MainContainer>
      {DUMMY_INVITATIONS.map((invitation) => (
        <PendingInvitationsListItem
          key={invitation._id}
          id={invitation._id}
          user={invitation.senderId.username}
          mail={invitation.senderId.mail}
        />
      ))}
    </MainContainer>
  )
}

export default PendingInvitationsList