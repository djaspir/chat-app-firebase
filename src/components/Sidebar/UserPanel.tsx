import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()({
  bold: {
    fontweight: 700,
  },

  iconButton: {
    // backgroundColor: "#f0f2f5",
  },
});

const UserPanel = () => {
  const { classes } = useStyles();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mx={"16px"}
      my={"20px"}
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
        <IconButton size="small" className={classes.iconButton}>
          <MoreHorizIcon />
        </IconButton>
        <IconButton size="small">
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default UserPanel;
