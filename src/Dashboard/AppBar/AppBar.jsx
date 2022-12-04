import { styled } from "@mui/system"
import DropdownMenu from "./DropdownMenu"

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
      <DropdownMenu />
    </MainContainer>
  )
}

export default AppBar