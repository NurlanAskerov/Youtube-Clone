import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, justifyContent }) => {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      justifyContent={justifyContent}
      alignItems="start"
      ml="3%"
      gap={2}
    >
      {videos?.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
