import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../assets/fetchFromApi";
import { Videos, ChannelCard } from "./";

function ChannelDetail() {
    const [channelDetail, setChannelDetail] = useState([]);
    const [videos, setVideos] = useState([]);
    const { id } = useParams();

    console.log(channelDetail);
    console.log(videos);
    useEffect(() => {
        fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
            setChannelDetail(data?.items[0])
        );
        fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
            (data) => setVideos(data?.items)
        );
    }, [id]);

    return (
        <Box minHeight='95vh'>
            <Box>
                <div
                    style={{
                        background: " rgb(2,0,36)",
                        background:
                            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,242,255,1) 52%, rgba(185,94,180,1) 72%)",
                        zIndex: 10,
                        height: "300px"
                    }}
                />
                <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
            </Box>

            <Box display='flex' p='2'>
                <Box
                    sx={{
                        mr: { sm: "100px" }
                    }}
                />
                <Videos videos={videos} />
            </Box>
        </Box>
    );
}

export default ChannelDetail;
