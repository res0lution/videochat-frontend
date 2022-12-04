import { Menu, MoreVert } from "@mui/icons-material"
import { IconButton, MenuItem } from "@mui/material"
import { logout } from "../shared/utils/auth";
import { useState } from "react"

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleMenuOpen = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const handleMenuClose = (e) => {
    setAnchorEl(null)
  }

  return (
    <div>
      <IconButton
        onClick={handleMenuClose}
        style={{ color: 'white' }}
      >
        <MoreVert />
      </IconButton>

      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuOpen}
        MenuListProps={{
          "aria-labelledby": "menu"
        }}
      >
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default DropdownMenu