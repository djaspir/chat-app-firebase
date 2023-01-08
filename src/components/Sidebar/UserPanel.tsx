import AddIcon from "@mui/icons-material/Add";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ReportOutlinedIcon from "@mui/icons-material/ReportOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

import {
  Avatar,
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "tss-react/mui";
import { toggleDarkTheme } from "../../state/actions";
import { AppState } from "../../state/store/store";
import db from "../../utils/db.json";

const useStyles = makeStyles()((theme) => ({
  title: {
    marginLeft: theme.spacing(2),
    fontWeight: 700,
  },

  iconButton: {
    marginLeft: theme.spacing(1),
  },

  listItemIcon: {
    minWidth: 0,
    marginRight: theme.spacing(1),
  },
}));

const UserPanel = () => {
  const darkThemeEnabled = useSelector(
    (state: AppState) => state.darkThemeEnabled
  );
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const user = db.users[0];
  const [anchorElMore, setAnchorElMore] = useState<null | HTMLElement>(null);
  const [anchorElAdd, setAnchorElAdd] = useState<null | HTMLElement>(null);

  const openMore = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElMore(e.currentTarget);
  };

  const openAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElAdd(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorElMore(null);
    setAnchorElAdd(null);
  };

  const signOut = () => {
    handleClose();
  };

  return (
    <Box display="flex" justifyContent="space-between" m={3}>
      <Box display="flex" alignItems="center">
        <Avatar src={`${user.photoURL}`} />
        <Typography className={classes.title} variant="h5">
          Chats
        </Typography>
      </Box>
      <Box display="flex">
        <IconButton className={classes.iconButton} onClick={openMore}>
          <MoreHorizIcon />
        </IconButton>
        <Menu
          anchorEl={anchorElMore}
          keepMounted
          open={Boolean(anchorElMore)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon className={classes.listItemIcon}>
              <SettingsOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Preferences" />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon className={classes.listItemIcon}>
              <HelpOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Help" />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon className={classes.listItemIcon}>
              <ReportOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Report an Issue" />
          </MenuItem>
          <MenuItem onClick={signOut}>
            <ListItemIcon className={classes.listItemIcon}>
              <ExitToAppIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </MenuItem>
        </Menu>
        <IconButton className={classes.iconButton} onClick={openAdd}>
          <AddIcon />
        </IconButton>
        <Menu
          anchorEl={anchorElAdd}
          keepMounted
          open={Boolean(anchorElAdd)}
          onClose={handleClose}
        >
          <MenuItem onClick={signOut}>
            <ListItemIcon className={classes.listItemIcon}>
              <PersonOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Private" />
          </MenuItem>
          <MenuItem onClick={signOut}>
            <ListItemIcon className={classes.listItemIcon}>
              <PeopleOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Group" />
          </MenuItem>
        </Menu>
        {darkThemeEnabled ? (
          <IconButton
            className={classes.iconButton}
            onClick={() => dispatch(toggleDarkTheme())}
          >
            <WbSunnyIcon />
          </IconButton>
        ) : (
          <IconButton
            className={classes.iconButton}
            onClick={() => dispatch(toggleDarkTheme())}
          >
            <Brightness2Icon />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default UserPanel;
