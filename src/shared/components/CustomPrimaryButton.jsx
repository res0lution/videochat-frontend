import { Button } from "@mui/material"

const CustomPrimaryButton = ({ 
  label, 
  additionalStyles = {}, 
  disabled, 
  onClick 
}) => {
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: '#5865f2',
        color: '#fff',
        textTransform: 'none',
        fontSize: '16px',
        fontWeight: 500,
        width: '100%',
        height: '40px'
      }}
      style={ additionalStyles }
      disabled={ disabled }
      onClick={ onClick }
    >
      { label }
    </Button>
  )
}

export default CustomPrimaryButton