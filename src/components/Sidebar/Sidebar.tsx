import { Box } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import Groups from "./Groups";
import Search from "./Search";
import UserPanel from "./UserPanel";

const useStyles = makeStyles<void, "showSm" | "hideSm">()(
  (theme, _params, classes) => ({
    sidebar: {
      [theme.breakpoints.down("sm")]: {
        width: "90px",
      },
    },

    hideSm: {
      display: "block",
    },

    showSm: {
      display: "none",
    },
  })
);

const Sidebar = () => {
  const { classes } = useStyles();

  return (
    <Box
      className={classes.sidebar}
      display="flex"
      flexDirection="column"
      width="360px"
      border={1}
      borderTop={0}
      borderBottom={0}
      borderLeft={0}
      borderColor={"divider"}
    >
      <UserPanel />
      <Search />
      <Groups />
    </Box>
  );
};

export default Sidebar;
