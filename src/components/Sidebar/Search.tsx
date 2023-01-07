import { Box, Input } from "@mui/material";
import { useState } from "react";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  input: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    borderRadius: "50px",
    backgroundColor: theme.palette.action.hover,
  },
}));

const Search = () => {
  const { classes } = useStyles();
  const [input, setInput] = useState("")

  return (
    <Box m={2} mt={1}>
      <Input
        className={classes.input}
        fullWidth
        disableUnderline
        placeholder="Search Chat"
        onChange={(e)=>setInput(e.target.value)}
        value={input}
      />
    </Box>
  );
};

export default Search;
