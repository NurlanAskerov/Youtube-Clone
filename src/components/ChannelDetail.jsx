import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { ChannelCard, Videos } from "./";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useState } from "react";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchresults = async () => {
      const channelData = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(channelData?.items[0]);
      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`
      );
      setVideos(videosData?.items);
    };
    fetchresults();
  }, [id]);
  return (
    <Box>
      <Box
        sx={{
          background:
            "linear-gradient(90deg, rgba(0,216,242,0.891281512605042) 22%, rgba(0,31,36,0.7764355742296919) 52%, rgba(93,0,255,1) 89%)",
          height: "200px",
        }}
      ></Box>
      <Box sx={{ display: "flex", justifyContent: "between" }}>
        {" "}
        <ChannelCard channelDetail={channelDetail} />
        <Typography
          variant="h6"
          color="white"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {channelDetail?.snippet?.description.length > 200
            ? channelDetail?.snippet?.description.slice(0, 200) + "..."
            : channelDetail?.snippet?.description}
        </Typography>{" "}
        <Box sx={{ mr: { sm: "100px" } }} />
      </Box>
      <Box p={2} display="flex">
        <Videos videos={videos} justifyContent={"center"} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
