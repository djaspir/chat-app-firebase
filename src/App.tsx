import { Box } from "@mui/material";

import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Box display="flex" height="100vh">
      <Sidebar />
      <Chat />
    </Box>
  );
};

export default App;
