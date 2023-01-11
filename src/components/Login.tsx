import logo from "../assets/logo192.png";

import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";

import { collection, doc, setDoc } from "firebase/firestore";
import { auth, db, provider, User } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const useStyles = makeStyles()((theme) => ({
  container: {
    backgroundColor: theme.palette.action.selected,
  },

  box: {
    backgroundColor: theme.palette.background.default,
  },

  title: {
    fontSize: "26px",
    fontWeight: "bold",
  },

  imageShadow: {
    width: "100px",
    height: "70px",
    borderRadius: "10px",
  },

  image: {
    width: "100%",
    marginTop: "-14px",
  },
}));

const Login = () => {
  const { classes } = useStyles();

  const signInWithGoogle = async () => {
    const { user } = await signInWithPopup(auth, provider);
    saveUserData(user);
  };

  const saveUserData = (user: User) => {
    if (!user) return;

    const userRef = collection(db, "users");
    setDoc(
      doc(userRef, user.uid),
      {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      },
      { merge: true }
    );
  };

  return (
    <Box
      className={classes.container}
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100vw"
      height="100vh"
    >
      <Box
        className={classes.box}
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="400px"
        height="400px"
        borderRadius="10px"
        boxShadow={5}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          maxWidth="400px"
          height="250px"
        >
          <Box className={classes.imageShadow} boxShadow={2}>
            <img className={classes.image} src={logo} alt="" />
          </Box>
          <Typography className={classes.title}>Welcome to ChatApp</Typography>
          <Button
            onClick={signInWithGoogle}
            variant="contained"
            color="primary"
          >
            Sign in with Google
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
