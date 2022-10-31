import React from "react";
import {
  CircularProgress,
  InputAdornment,
  OutlinedInput,
  Box,
  Typography,
  Grid,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useQuery } from "react-query";
import { chatList } from "server/api/chat";
import ChatCard from "../ChatComponent/ChatCard";

const LoadingComponent = () => {
  return (
    <Grid container height="650px">
      <Grid item margin="auto" textAlign="center">
        <CircularProgress color="inherit" />
        <Typography align="center">Loading Chats...</Typography>
      </Grid>
    </Grid>
  );
};

const ChatList = ({ setLayout, setMessageId }) => {
  const { data, isLoading } = useQuery(["dataList, chats"], () => chatList());

  console.log("data", data);
  console.log("isLoading", isLoading);

  // groupchat = people.length > 2

  return (
    <Box height="100%" pt="20px" pl="29px" pr="39px">
      <OutlinedInput
        fullWidth
        placeholder="Search"
        id="outlined-adornment-password"
        endAdornment={
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        }
        size="small"
        sx={{ height: "32px" }}
      />
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          {data.map((message) => {
            const groupChat = message.people.length > 2;
            return (
              <>
                <Box
                  onClick={() => {
                    setLayout("feed");
                    setMessageId(message.id);
                  }}
                >
                  <ChatCard
                    groupChat={groupChat}
                    title={message.title}
                    last_message={message.last_message}
                    created={message.created}
                  />
                </Box>
                <Divider sx={{ mt: "37px", backgroundColor: "primary.gray" }} />
              </>
            );
          })}
        </>
      )}
    </Box>
  );
};

export default ChatList;
