import React from "react";
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import MessageHeader from "../ChatComponent/MessageHeader";
import { useQuery } from "react-query";
import { chatFeed } from "server/api/chat";
import MyMessage from "../ChatComponent/MyMessage";
import TheirMessage from "../ChatComponent/TheirMessage";
import { useEffect } from "react";
import MessageForm from "../ChatComponent/MessageForm";

const ChatFeed = ({ setLayout, messageId }) => {
  console.log("id", messageId);

  const { data, isLoading } = useQuery(
    ["dataList", "chatFeed", messageId],
    () => chatFeed(messageId)
  );

  console.log("data", data);

  const renderMessages = () => {
    return data.chats.map((message, index) => {
      const lastMessageKey = index === 0 ? null : message?.id;
      const isMyMessage = message?.sender_username === "Auliya Michelle";
      console.log("message", message);
      return (
        <Box key={`msg${index}`} display="grid">
          <Box className="message-block" width="100%">
            {isMyMessage ? (
              <MyMessage message={message.text} />
            ) : (
              <TheirMessage message={message.text} />
            )}
          </Box>
        </Box>
      );
    });
  };

  console.log("data", data);

  if (isLoading) return <b>Tunggu Ya</b>;

  return (
    <Box display="flex">
      <MessageHeader
        title={data.title}
        participants={data.people.length}
        setLayout={setLayout}
      />
      <Box component="main">
        <Toolbar />
        <Box className="chat-feed" width="734px">
          {renderMessages()}
        </Box>

        <Box className="message-form-container">
          <MessageForm chatId={messageId} />
        </Box>
      </Box>
    </Box>
  );
};

export default ChatFeed;
