import { Box } from "@mui/material";
import React from "react";

const TheirMessage = ({ message }) => {
  return (
    <Box
      className="message"
      float="left"
      backgroundColor="chats.orange"
      marginLeft="4px"
      width="fit-content"
      p="10px 18.2px 10px 10px"
      maxWidth="518px"
      style={{ float: "left" }}
      marginTop="16.4px"
      marginBottom="25.9px"
    >
      {message}
    </Box>
  );
};

export default TheirMessage;
