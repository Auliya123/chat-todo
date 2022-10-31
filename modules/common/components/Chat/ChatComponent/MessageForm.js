import { TextField, Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { isTyping } from "react-chat-engine";
import { useMutation } from "react-query";
import { sendChat } from "server/api/chat";

const MessageForm = ({ chatId }) => {
  const [value, setValue] = useState("");

  const mutationCreate = useMutation("sendMessage", (text) =>
    sendChat(chatId, text)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = value.trim();

    if (text.length > 0) mutationCreate.mutate(text);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <TextField
        className="message-input"
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
        variant="outlined"
        placeholder="Type a new message"
        sx={{ bottom: 0, width: 580, marginLeft: 3, marginRight: 2 }}
      />
      <Button variant="contained" sx={{ width: 34, height: 40 }}>
        Send
      </Button>
    </form>
  );
};

export default MessageForm;
