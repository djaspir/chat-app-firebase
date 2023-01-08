import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";

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
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Private" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PeopleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Group" />
        </MenuItem>
      </Menu>
    </>
  );
};

export default AddChatMenu;
