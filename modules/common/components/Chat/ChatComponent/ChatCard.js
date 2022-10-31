import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import moment from "moment/moment";

const GroupIcon = () => {
  return (
    <Box display="flex" width="51px" height="34px">
      <Avatar sx={{ width: "34px", height: "34px" }}>
        <PersonOutlineOutlinedIcon />
      </Avatar>
      <Avatar
        sx={{
          width: "34px",
          height: "34px",
          ml: "-20px",
          bgcolor: "primary.main",
        }}
      >
        <PersonOutlineOutlinedIcon />
      </Avatar>
    </Box>
  );
};

const PersonalIcon = ({ name }) => {
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: "primary.main",
      },
      children: `${name.split(" ")[0][0]}`,
    };
  }

  return <Avatar {...stringAvatar(name)} sx={{ width: 34, height: 34 }} />;
};

const ChatCard = ({ groupChat, title, last_message, created }) => {
  console.log("groupChat", groupChat);
  return (
    <Box display="flex" mt="26px" alignItems="center">
      <Box width="51px">
        {groupChat ? <GroupIcon /> : <PersonalIcon name="FastVisa Support" />}
      </Box>
      <Box display="grid" ml="16px">
        <Box display="flex">
          <Typography
            variant="caption"
            sx={{
              color: "primary.main",
              fontWeight: "bold",
              maxWidth: "415px",
            }}
          >
            {title}
          </Typography>
          <Typography variant="caption" ml="16px">
            {last_message.created
              ? moment(last_message.created).format("DD/mm/yyyy hh:mm")
              : moment(created).format("DD/mm/yyyy hh:mm")}
          </Typography>
        </Box>
        <Box display="grid">
          {groupChat && (
            <Typography variant="caption" sx={{ fontWeight: "bold" }}>
              {last_message?.sender_username}
            </Typography>
          )}
          <Typography variant="caption">{last_message?.text} </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ChatCard;
