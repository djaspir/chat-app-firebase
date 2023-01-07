import AddIcon from "@mui/icons-material/Add";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  title: {
    marginLeft: theme.spacing(1),
    fontWeight: 700,
  },

  iconButton: {
    marginLeft: theme.spacing(1),
  },
}));

const UserPanel = () => {
  const { classes } = useStyles();
  const darkTheme = false;

  return (
    <Box display="flex" justifyContent="space-between" m={2}>
      <Box display="flex" alignItems="center">
        <Avatar />
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
        {darkTheme ? (
          <IconButton className={classes.iconButton}>
            <Brightness4Icon />
          </IconButton>
        ) : (
          <IconButton className={classes.iconButton}>
            <Brightness7Icon />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default UserPanel;
