import AddIcon from "@mui/icons-material/Add";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";

import { useState } from "react";

import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";

const AddChatMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const openMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={openMenu}>
        <AddIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Private" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PeopleOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Group" />
        </MenuItem>
      </Menu>
    </>
  );
};

export default AddChatMenu;
