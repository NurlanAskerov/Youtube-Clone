import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { demoChannelUrl, demoProfilePicture } from "../utils/constants";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetail }) => {
  return (
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <Box
        sx={{
          boxShadow: "none",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "90vw", sm: "360px" },
          height: "326px",
          margin: "auto",
        }}
      >
        <Card
          sx={{
            backgroundColor: "black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            height="194"
            sx={{
              borderRadius: "50%",
              width: "180px",
              height: "180px",
              border: "1px solid #e3e3e3",
            }}
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.title}
          />
          <CardContent>
            <Typography variant="h6" color="white">
              {channelDetail?.snippet?.title}{" "}
              <CheckCircleIcon
                sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
              />
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Link>
  );
};

export default ChannelCard;
