import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {SideBar,Videos} from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
 const [selectedCategory,setSelectedCategory]=useState('New')
 const[videos,setVideos]=useState()
 useEffect(()=>{
  fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
  .then((data) =>setVideos(data.items))
 },[selectedCategory])
  return (
    <Stack sx={{ flexDirection: { md: "row", sx: "coulumn" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className="copyright" variant="body2" color="white" sx={{mt:1.5}} >
          Copyright 2023
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY:'auto',flex:2,height:'90vh'}}>
        <Typography variant="h4" fontWeight='bold' color='white' mb={2} >{selectedCategory} <span style={{color:'#F31503'}}>videos</span></Typography>
         <Videos videos={videos} justifyContent={'start'} />
      </Box>
    </Stack>
  );
};

export default Feed;
