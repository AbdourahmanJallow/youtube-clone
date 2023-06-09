import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

function Videos({ videos, direction }) {
    // console.log(videos);
    if (!videos?.length) return "Loading videos";

    return (
        <Stack
            direction={direction || "row"}
            justifyContent='start'
            flexWrap='wrap'
            gap={2}
        >
            {videos.map((item, index) => (
                <Box key={index}>
                    {item?.id?.videoId && <VideoCard video={item} />}
                    {item?.id?.channelId && (
                        <ChannelCard channelDetail={item} />
                    )}
                </Box>
            ))}
        </Stack>
    );
}

export default Videos;
