import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  input: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    borderRadius: "50px",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
}));

const Search = () => {
  const { classes } = useStyles();

  return (
    <Box m={2}>
      <Input
        className={classes.input}
        fullWidth
        disableUnderline
        placeholder="Search Chat"
      />
    </Box>
  );
};

export default Search;
