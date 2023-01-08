import Box from "@mui/material/Box";
import ChatPanel from "./ChatPanel/ChatPanel";
import Messages from "./Messages";
import SendBox from "./SendBox";

const Chat = () => {
  return (
    <Box display="flex" flexDirection="column" flex={1}>
      <ChatPanel />
      <Messages />
      <SendBox />
    </Box>
  );
};

export default Chat;
