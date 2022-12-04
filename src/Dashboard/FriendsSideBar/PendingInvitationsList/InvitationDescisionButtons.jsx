import { Check, Clear } from "@mui/icons-material"
import { Box, IconButton } from "@mui/material"

const InvitationDecisionButtons = ({ 
  disabled, 
  handleAcceptInvitation, 
  handleRejectInvitation 
}) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton 
        style={{ color: 'white' }} 
        disabled={disabled} 
        onClick={handleAcceptInvitation}
      >
        <Check />
      </IconButton>

      <IconButton 
        style={{ color: 'white' }} 
        disabled={disabled} 
        onClick={handleRejectInvitation}
      >
        <Clear />
      </IconButton>
    </Box>
  )
}

export default InvitationDecisionButtons