import AddIcon from "@mui/icons-material/Add";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  bold: {
    fontWeight: 700,
  },

  iconButton: {
    marginLeft: theme.spacing(1),
  },
}));

const UserPanel = () => {
  const { classes } = useStyles();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      m={2}
    >
      <Box display="flex" alignItems="center" width="100%">
        <Avatar />
        <Box pl={"10px"}>
          <Typography className={classes.bold} variant="h5">
            Chats
          </Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        <IconButton className={classes.iconButton}>
          <MoreHorizIcon />
        </IconButton>
        <IconButton className={classes.iconButton}>
          <AddIcon />
        </IconButton>
        {true ? (
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
