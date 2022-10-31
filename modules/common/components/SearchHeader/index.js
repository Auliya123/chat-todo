import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Input, InputAdornment } from "@mui/material";

const SearchHeader = () => {
  return (
    <Input
      fullWidth
      disableUnderline={true}
      id="input-with-icon-adornment"
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon style={{ color: "white" }} />
        </InputAdornment>
      }
    />
  );
};

export default SearchHeader;
