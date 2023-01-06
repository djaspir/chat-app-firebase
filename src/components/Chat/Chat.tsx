import Box from "@mui/material/Box";
import ChatPanel from "./ChatPanel";
import Messages from "./Messages";
import SendBox from "./SendBox";

const Chat = () => {
  return (
    <Box>
      <ChatPanel />
      <Messages />
      <SendBox />
    </Box>
  );
};

export default Chat;
