import { Avatar, Box, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import GroupMenu from "./GroupMenu";
import PrivateMenu from "./PrivateMenu";

const useStyles = makeStyles()(() => ({
  bold: {
    fontWeight: 700,
  },
}));

const ChatPanel = () => {
  const { classes } = useStyles();
  const isPrivate = true;

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
      {isPrivate ? <PrivateMenu /> : <GroupMenu />}
    </Box>
  );
};

export default ChatPanel;
