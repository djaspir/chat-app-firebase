import { Box } from "@mui/material";

import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import { auth } from "./firebase";

const App = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <Box display="flex" height="100vh">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : loading ? (
        ""
      ) : (
        <Login />
      )}
    </Box>
  );
};

export default App;
