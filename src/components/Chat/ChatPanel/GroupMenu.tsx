import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { useState } from "react";

import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";

const GroupMenu = () => {
  const isOwner = true;

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
            <AddIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Add Person" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Rename" />
        </MenuItem>
        {isOwner ? (
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <DeleteIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Delete" />
          </MenuItem>
        ) : (
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <ExitToAppIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Leave" />
          </MenuItem>
        )}
      </Menu>
    </>
  );
};

export default GroupMenu;
