import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";

import { useState } from "react";

import {
  Dialog,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Box,
  Typography,
  Input,
  Button,
} from "@mui/material";

import { makeStyles } from "tss-react/mui";

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
  const [inputPrivate, setInputPrivate] = useState("");
  const [inputGroup, setInputGroup] = useState("");

  const openMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const openPrivateDialog = () => {
    setIsPrivateDialogOpen(true);
  };

  const closePrivateDialog = () => {
    setIsPrivateDialogOpen(false);
  };

  const openGroupDialog = () => {
    setIsGroupDialogOpen(true);
  };

  const closeGroupDialog = () => {
    setIsGroupDialogOpen(false);
  };

  const createPrivateChat = () => {};

  const handlePrivateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPrivate(e.currentTarget.value);
  };

  const createGroupChat = () => {};

  const handleGroupInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputGroup(e.currentTarget.value);
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
          <Input
            placeholder="Search Person"
            onChange={handlePrivateInput}
            value={inputPrivate}
          />
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Button
              color="primary"
              variant="contained"
              onClick={createPrivateChat}
            >
              Create
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={closePrivateDialog}
            >
              Cancel
            </Button>
          </Box>
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
          <Input
            placeholder="Name"
            onChange={handleGroupInput}
            value={inputGroup}
          />
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Button
              color="primary"
              variant="contained"
              onClick={createGroupChat}
            >
              Create
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={closeGroupDialog}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default AddChatMenu;
