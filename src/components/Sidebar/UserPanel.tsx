import AddIcon from "@mui/icons-material/Add";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
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
      <Box display="flex" alignItems="center">
        <Avatar src={`${user.photoURL}`} />
        <Typography className={classes.title} variant="h5">
          Chats
        </Typography>
      </Box>
      <Box display="flex">
        <IconButton className={classes.iconButton}>
          <MoreHorizIcon />
        </IconButton>
        <IconButton className={classes.iconButton}>
          <AddIcon />
        </IconButton>
        {darkThemeEnabled ? (
          <IconButton
            className={classes.iconButton}
            onClick={() => dispatch(toggleDarkTheme())}
          >
            <Brightness7Icon />
          </IconButton>
        ) : (
          <IconButton
            className={classes.iconButton}
            onClick={() => dispatch(toggleDarkTheme())}
          >
            <Brightness4Icon />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default UserPanel;
