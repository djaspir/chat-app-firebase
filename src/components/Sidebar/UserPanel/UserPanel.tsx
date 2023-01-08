import Brightness2Icon from "@mui/icons-material/Brightness2";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

import { Avatar, Box, IconButton, Typography } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "tss-react/mui";
import { toggleDarkTheme } from "../../../state/actions";
import { AppState } from "../../../state/store/store";
import db from "../../../utils/db.json";

import AddChatMenu from "./AddChatMenu";
import OptionsMenu from "./OptionsMenu";

const useStyles = makeStyles()((theme) => ({
  userInfo: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  userActions: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      margin: "auto"
    },
  },

  title: {
    marginLeft: theme.spacing(2),
    fontWeight: 700,
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

  return (
    <Box display="flex" justifyContent="space-between" m={3}>
      <Box className={classes.userInfo} display="flex" alignItems="center">
        <Avatar src={`${user.photoURL}`} />
        <Typography className={classes.title} variant="h5">
          Chats
        </Typography>
      </Box>
      <Box className={classes.userActions} display="flex">
        <OptionsMenu />
        <AddChatMenu />
        {darkThemeEnabled ? (
          <IconButton onClick={() => dispatch(toggleDarkTheme())}>
            <WbSunnyIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => dispatch(toggleDarkTheme())}>
            <Brightness2Icon />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default UserPanel;
