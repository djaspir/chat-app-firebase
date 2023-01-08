import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { useState } from "react";

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
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  dialogTitle: {
    fontSize: "20px",
    fontWeight: "bold",
  },
}));

const GroupMenu = () => {
  const { classes } = useStyles();
  const isOwner = true;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isAddPersonDialogOpen, setIsAddPersonDialogOpen] = useState(false);
  const [addPersonInput, setAddPersonInput] = useState("");

  const openMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const openAddPersonDialog = () => {
    setIsAddPersonDialogOpen(true);
  };

  const closeAddPersonDialog = () => {
    setIsAddPersonDialogOpen(false);
    setAddPersonInput("");
  };

  const handleAddPersonInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddPersonInput(e.currentTarget.value);
  };

  const addPerson = () => {};

  return (
    <>
      <IconButton onClick={openMenu}>
        <MoreHorizIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeMenu}
      >
        <MenuItem onClick={openAddPersonDialog}>
          <ListItemIcon>
            <AddIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Add Person" />
        </MenuItem>
        <MenuItem onClick={closeMenu}>
          <ListItemIcon>
            <EditIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Rename" />
        </MenuItem>
        {isOwner ? (
          <MenuItem onClick={closeMenu}>
            <ListItemIcon>
              <DeleteIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Delete" />
          </MenuItem>
        ) : (
          <MenuItem onClick={closeMenu}>
            <ListItemIcon>
              <ExitToAppIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Leave" />
          </MenuItem>
        )}
        <Dialog open={isAddPersonDialogOpen} onClose={closeAddPersonDialog}>
          <Box p={2}>
            <Typography
              className={classes.dialogTitle}
              align="center"
              gutterBottom
            >
              Add Person
            </Typography>
            <Input
              placeholder="Search Person"
              onChange={handleAddPersonInput}
              value={addPersonInput}
            />
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Button color="primary" variant="contained" onClick={addPerson}>
                Create
              </Button>
              <Button
                color="secondary"
                variant="contained"
                onClick={closeAddPersonDialog}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Dialog>
      </Menu>
    </>
  );
};

export default GroupMenu;
