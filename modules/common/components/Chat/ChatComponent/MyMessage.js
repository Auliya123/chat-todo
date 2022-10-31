import { Box } from "@mui/material";
import React from "react";

const MyMessage = ({ message }) => {
  console.log("message", message);
  return (
    <Box
      className="message"
      float="right"
      ml="18px"
      bgcolor="chats.purple"
      width="fit-content"
      p="10px 18.2px 10px 10px"
      maxWidth="518px"
      marginTop="16.4px"
      marginBottom="25.9px"
      style={{ float: "right" }}
    >
      {message}
    </Box>
  );
};

export default MyMessage;
