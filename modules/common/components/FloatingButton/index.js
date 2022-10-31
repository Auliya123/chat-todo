import React, { useState } from "react";
import {
  Box,
  Fab,
  Grid,
  SpeedDial,
  SpeedDialAction,
  Typography,
  Popover,
  Popper,
  Fade,
  Paper,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import ChromeReaderModeOutlinedIcon from "@mui/icons-material/ChromeReaderModeOutlined";
import { FavoriteOutlined } from "@mui/icons-material";
import Chat from "../Chat";

const FloatingButton = () => {
  const [open, setOpen] = React.useState(false);
  const [icon, setIcon] = React.useState(<BoltIcon />);
  const [openChat, setOpenChat] = useState(false);

  const actions = [
    {
      icon: (
        <QuestionAnswerOutlinedIcon
          sx={{ color: "indicator.purple" }}
          onClick={(e) => handleOpenChat(e)}
        />
      ),
      name: "Chats",
    },
    {
      icon: <ChromeReaderModeOutlinedIcon sx={{ color: "indicator.orange" }} />,
      name: "Task",
    },
  ];

  // const handleClick = () => {
  //   handleClose();
  //   window.open(SocialLinks[network], '_blank');
  // };

  const handleOpenChat = (event) => {
    console.log("event", event);
    setOpenChat(event.currentTarget);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    // setOpen(false);
    setIcon(<BoltIcon />);
  };

  const chatOpened = Boolean(openChat);
  const id = chatOpened ? "simple-popover" : undefined;

  return (
    // <Box
    //   position="absolute"
    //   display="flex"
    //   gap="26px"
    //   bottom={27}
    //   right={27}
    //   alignItems="flex-end"
    // >
    //   {/* <Box display="grid">
    //     <Typography color="white" variant="caption" textAlign="center">
    //       Task
    //     </Typography>
    //     <Fab aria-label="chats" sx={{ bgcolor: "white" }}>
    //       <ChromeReaderModeOutlinedIcon sx={{ color: "indicator.orange" }} />
    //     </Fab>
    //   </Box>
    //   <Box display="grid">
    //     <Typography color="white" variant="caption" textAlign="center">
    //       Inbox
    //     </Typography>
    //     <Fab aria-label="chats" sx={{ bgcolor: "white" }}>
    //       <QuestionAnswerOutlinedIcon sx={{ color: "indicator.purple" }} />
    //     </Fab>
    //   </Box>
    //   <Fab color="primary" aria-label="add">
    //     <BoltIcon />
    //   </Fab> */}

    // </Box>
    <Box position="fixed" bottom={27} right={27}>
      <SpeedDial
        direction="left"
        ariaLabel="SpeedDial"
        position="absolute"
        icon={icon}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        FabProps={{
          color: "primary",
          size: "medium",
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            id={action.name}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipPlacement="top-start"
          />
        ))}
      </SpeedDial>

      <Popper
        open={openChat}
        anchorEl={openChat}
        placement="top-end"
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper
              sx={{ marginBottom: "15px", width: "734px", height: "737px" }}
            >
              <Chat />
            </Paper>
          </Fade>
        )}
      </Popper>
    </Box>
  );
};

export default FloatingButton;
