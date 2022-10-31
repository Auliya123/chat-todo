import { createTheme } from "@mui/material/styles";

//Create a theme instance
const theme = createTheme({
  palette: {
    layout: {
      gray: "#333333",
    },
    primary: {
      main: "#2F80ED",
      black: "#4F4F4F",
      inherit: "#828282",
      white: "#E0E0E0",
    },
    indicator: {
      orange: "#F8B76B",
      purple: "#8885FF",
      red: "#EB5757",
      yellow: "#F2C94C",
    },
    chats: {
      orange: "#FCEED3",
      purple: "#EEDCFF",
      green: "#D2F2EA",
    },
  },
});

export default theme;
