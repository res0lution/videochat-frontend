import { styled } from "@mui/system"

const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%'
})

const Label = styled('p')({
  color: '#b9bbbe',
  textTransform: 'uppercase',
  fontWeight: '800',
  fontSize: '16px'
})

const Input = styled('input')({
  flexGrow: 1,
  height: '40px',
  border: '1px solid #000',
  borderRadius: '5px',
  color: '#dcddde',
  background: '#35393f',
  textTransform: 'uppercase',
  margin: 0,
  padding: '0 5px',
  fontSize: '16px'
})

const InputWithLabel = ({ value, setValue, label, type, placeholder }) => {
  const handleValueChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <Wrapper>
      <Label>{ label }</Label>
      <Input
        value={ value }
        onChange={ handleValueChange }
        type={ type }
        placeholder={ placeholder }
      />
    </Wrapper>
  )
}

export default InputWithLabel