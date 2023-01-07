import { Box, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import db from "../../utils/db.json";

const useStyles = makeStyles()((theme) => ({
  scrollBox: {
    overflowY: "scroll",
  },

  message: {
    minHeight: "min-content",
    position: "relative",
    borderRadius: "10px",
    marginRight: "auto",
    backgroundColor: theme.palette.text.secondary,
  },

  ownMessage: {
    marginRight: "0",
    marginLeft: "auto",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "& $messageInfo": {
      right: "5px",
      left: "auto",
    },
  },

  messageInfo: {
    position: "absolute",
    top: "-20px",
    left: "5px",
    color: theme.palette.text.secondary,
    fontWeight: "bold",
  },
}));

const Messages = () => {
  const { classes } = useStyles();
  const groupMessages = db.groupMessages;
  const userId = "u1";
  const messages = groupMessages[0].messages;

  return (
    <Box
      flex={1}
      className={classes.scrollBox}
      display="flex"
      flexDirection="column-reverse"
      p={2}
      pr={1}
    >
      {messages.map((message) => (
        <Box
          display="flex"
          key={message.id}
          className={`${classes.message} ${
            message.sentBy === userId ? classes.ownMessage : ""
          }`}
          p={1}
          mt={4}
        >
          <Typography className={classes.messageInfo} variant="caption">
            {/*h {message.sentBy} */}
            <div>Jasper</div>
          </Typography>
          <div>{message.text}</div>
        </Box>
      ))}
    </Box>
  );
};

export default Messages;
