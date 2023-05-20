import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };
  return (
    <Paper
      component="form"
      sx={{
        borderRadius: 20,
        mr: { sm: 5 },
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
      }}
      onSubmit={handleSubmit}
    >
      <input
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        placeholder="Search..."
        className="search-bar"
        value={searchTerm}
      />
      <IconButton type="submit" sx={{ padding: "10px", color: "red" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
