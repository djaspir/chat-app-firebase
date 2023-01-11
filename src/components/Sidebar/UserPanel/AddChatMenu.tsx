import AddIcon from "@mui/icons-material/Add";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import {
  Box,
  Button,
  Dialog,
  IconButton,
  Input,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { makeStyles } from "tss-react/mui";
import { db, auth } from "../../../firebase";

const useStyles = makeStyles()(() => ({
  dialogTitle: {
    fontSize: "21px",
    fontWeight: "bold",
  },
}));

const AddChatMenu = () => {
  const { classes } = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isPrivateDialogOpen, setIsPrivateDialogOpen] = useState(false);
  const [isGroupDialogOpen, setIsGroupDialogOpen] = useState(false);
  const [input, setInput] = useState("");

  const openMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const openPrivateDialog = () => {
    closeMenu();
    setIsPrivateDialogOpen(true);
  };

  const closePrivateDialog = () => {
    setIsPrivateDialogOpen(false);
    setInput("");
  };

  const openGroupDialog = () => {
    closeMenu();
    setIsGroupDialogOpen(true);
  };

  const closeGroupDialog = () => {
    setIsGroupDialogOpen(false);
    setInput("");
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  const createPrivateChat = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closePrivateDialog();
  };

  const createGroupChat = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const groupRef = collection(db, "groups");
    addDoc(groupRef, {
      name: input,
      ownerId: auth.currentUser?.uid,
      member: [auth.currentUser?.uid],
      type: "group",
    });
    closeGroupDialog();
  };

  return (
    <>
      <IconButton onClick={openMenu}>
        <AddIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeMenu}
      >
        <MenuItem onClick={openPrivateDialog}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Private" />
        </MenuItem>
        <MenuItem onClick={openGroupDialog}>
          <ListItemIcon>
            <PeopleIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Group" />
        </MenuItem>
      </Menu>
      <Dialog open={isPrivateDialogOpen} onClose={closePrivateDialog}>
        <Box p={2}>
          <Typography
            className={classes.dialogTitle}
            alignItems="center"
            gutterBottom
          >
            Create Private Chat
          </Typography>
          <form onSubmit={createPrivateChat}>
            <Input
              placeholder="Search Person"
              onChange={handleInput}
              value="input"
              required
            />
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Button color="primary" variant="contained" type="submit">
                Create
              </Button>
              <Button
                color="secondary"
                variant="contained"
                onClick={closePrivateDialog}
              >
                Close
              </Button>
            </Box>
          </form>
        </Box>
      </Dialog>
      <Dialog open={isGroupDialogOpen} onClose={closeGroupDialog}>
        <Box p={2}>
          <Typography
            className={classes.dialogTitle}
            alignItems="center"
            gutterBottom
          >
            Create Group Chat
          </Typography>
          <form onSubmit={createGroupChat}> 
            <Input placeholder="Name" onChange={handleInput} value={input} />
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Button color="primary" variant="contained" type="submit">
                Create
              </Button>
              <Button
                color="secondary"
                variant="contained"
                onClick={closeGroupDialog}
              >
                Close
              </Button>
            </Box>
          </form>
        </Box>
      </Dialog>
    </>
  );
};

export default AddChatMenu;
