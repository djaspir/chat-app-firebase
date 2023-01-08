import { useState } from "react";

import { Box, IconButton, Input } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SendIcon from "@mui/icons-material/Send";

import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  form: {
    display: "flex",
    width: "100%",
  },

  input: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    borderRadius: "50px",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(2),
    backgroundColor: theme.palette.action.hover,
  },
}));

const SendBox = () => {
  const { classes } = useStyles();
  const [input, setInput] = useState("");

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === "") return;
    console.log("message", input);
    setInput("");
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      p={1}
      border={1}
      borderLeft={0}
      borderBottom={0}
      borderRight={0}
      borderColor={"divider"}
    >
      <IconButton>
        <EmojiEmotionsIcon />
      </IconButton>
      <form className={classes.form} onSubmit={sendMessage}>
        <Input
          className={classes.input}
          fullWidth
          disableUnderline
          placeholder="Aa"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <IconButton type="submit">
          <SendIcon />
        </IconButton>
      </form>
    </Box>
  );
};

export default SendBox;
