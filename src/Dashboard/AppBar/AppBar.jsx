import { styled } from "@mui/system"

const MainContainer = styled('div')({
  position: 'absolute',
  right: "0",
  top: "0",
  borderBottom: "1px solid black",
  width: "72px",
  height: "48px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: "#36393f",
  padding: "0 15px"
})

const AppBar = () => {
  return (
    <MainContainer>

    </MainContainer>
  )
}

export default AppBar