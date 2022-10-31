import React, { useState } from "react";
import {
  ChatEngineWrapper,
  Socket,
  ChatCard,
  ChatEngine,
} from "react-chat-engine";
import ChatList from "common/components/Chat/ChatList";
import ChatFeed from "common/components/Chat/ChatFeed";

import { Box } from "@mui/material";

const Chat = () => {
  const [layout, setLayout] = useState("list");
  const [messageId, setMessageId] = useState(null);
  return (
    <Box>
      {layout === "list" && (
        <ChatList setLayout={setLayout} setMessageId={setMessageId} />
      )}
      {layout === "feed" && (
        <ChatFeed messageId={messageId} setLayout={setLayout} />
      )}
    </Box>
  );
};

export default Chat;
