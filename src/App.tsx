import { Box, CircularProgress } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import { auth } from "./firebase";

const App = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <Box display="flex" height="100vh">
      {loading ? (
        <Box margin="auto">
          <CircularProgress size="150px" />
        </Box>
      ) : user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </Box>
  );
};

export default App;
