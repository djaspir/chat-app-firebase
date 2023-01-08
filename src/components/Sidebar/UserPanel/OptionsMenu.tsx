import { useState } from "react";

import {
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import ReportIcon from "@mui/icons-material/Report";

const OptionsMenu = () => {
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
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Preferences" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <HelpIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Help" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ReportIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Report an Issue" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ExitToAppIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </MenuItem>
      </Menu>
    </>
  );
};

export default OptionsMenu;
