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

const MessageHeader = ({ title, participants, setLayout }) => {
  return (
    <AppBar color="transparent" component="nav">
      <Toolbar>
        <ArrowBackIcon onClick={() => setLayout("list")} />
        <Grid container display="grid" ml="17.7px">
          <Grid item>
            <Typography sx={{ color: "primary.main" }} variant="subtitle2">
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography sx={{ fontSize: "10.9px" }}>
              {participants} Participants
            </Typography>
          </Grid>
        </Grid>
        <CloseIcon onClick={() => setLayout("list")} />
      </Toolbar>
    </AppBar>
  );
};

export default MessageHeader;
