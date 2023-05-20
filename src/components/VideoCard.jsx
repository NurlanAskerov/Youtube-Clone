import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  demoVideoUrl,
  demoVideoTitle,
  demoThumbnailUrl,
  demoChannelTitle,
  demoChannelUrl,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { xs: "90vw", sm: "360px" },
        boxShadow: "none",
        borderRadius: 0,
        backgroundColor: "black",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          component="img"
          height="194"
          image={snippet.thumbnails.high.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ borderRadius: "10px" }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#000", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography fontWeight="bold" variant="subtitle" color="#fff">
            {snippet.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" color="gray">
            {snippet.channelTitle || demoChannelTitle}
            <CheckCircleIcon
              sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
