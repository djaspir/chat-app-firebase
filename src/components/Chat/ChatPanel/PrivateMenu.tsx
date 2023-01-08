import BlockIcon from "@mui/icons-material/Block";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { useState } from "react";

import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";

const PrivateMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const openMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={openMenu}>
        <MoreHorizIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <BlockIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Block" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DeleteIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Delete" />
        </MenuItem>
      </Menu>
    </>
  );
};

export default PrivateMenu;
