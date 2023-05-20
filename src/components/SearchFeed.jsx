import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {Videos} from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
 const[videos,setVideos]=useState()
 const {searchTerm}=useParams()
 useEffect(()=>{
  fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
  .then((data) =>setVideos(data.items))
 },[searchTerm])
  return (
    <Stack sx={{ flexDirection: { md: "row", sx: "coulumn" } }}>
      <Box p={2} sx={{overflowY:'auto',flex:2,height:'90vh'}}>
        <Typography variant="h4" fontWeight='bold' color='white' mb={2} >{searchTerm} <span style={{color:'#F31503'}}>videos</span></Typography>
         <Videos videos={videos} justifyContent={'start'} />
      </Box>
    </Stack>
  );
};

export default SearchFeed;
