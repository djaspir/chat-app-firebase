import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "tss-react/mui";
import db from "../../utils/db.json";

const useStyles = makeStyles()(() => ({
  avatar: {
    height: "50px",
    width: "50px",
  },

  scrollBox: {
    overflowY: "scroll",
  },
}));

const Groups = () => {
  const { classes } = useStyles();
  const groups = db.groups;

  return (
    <Box
      className={classes.scrollBox}
      display="flex"
      flexDirection="column"
      m={2}
    >
      {groups.map((group) => (
        <Button key={group.id}>
          <Box display="flex" width="100%" p={1}>
            <Avatar className={classes.avatar} />
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              ml={2}
            >
              <Typography>{group.name}</Typography>
              <Typography variant="caption" color="textSecondary" align="left">
                {group.recentMessage.text}
              </Typography>
            </Box>
          </Box>
        </Button>
      ))}
    </Box>
  );
};

export default Groups;
