import { Stack } from "@mui/material";
import React from "react";
import { logo } from "../utils/constants";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        backgroundColor: "#000",
        position: "sticky",
        top: 0,
        justifyContent: "space-between",
      }}
      p={2}
    >
      <Link to="/" display="flex" alignItems="center">
        <img src={logo} alt={logo} height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
