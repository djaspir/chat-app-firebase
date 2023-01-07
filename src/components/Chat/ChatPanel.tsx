import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const useStyles = makeStyles()(() => ({
  bold: {
    fontWeight: 700,
  },
}));

const ChatPanel = () => {
  const { classes } = useStyles();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={2}
      py={1}
      border={1}
      borderLeft={0}
      borderTop={0}
      borderRight={0}
      borderColor={"divider"}
    >
      <Box display="flex">
        <Avatar />
        <Box ml={2}>
          <Typography className={classes.bold}>User Name</Typography>
          <Typography variant="caption" color="textSecondary">
            Last message sent
          </Typography>
        </Box>
      </Box>
      <Box>
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ChatPanel;
