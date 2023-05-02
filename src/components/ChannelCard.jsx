import React from "react";
import { CardContent, Box, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../assets/constants";

const ChannelCard = ({ channelDetail, marginTop }) => {
    console.log(channelDetail);
    return (
        <Box
            sx={{
                boxShadow: "none",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: { xs: "356px", md: "320px" },
                height: "326px",
                margin: "auto",
                marginTop: marginTop
            }}
        >
            <Link to={`/channel/${channelDetail?.id?.channelId}`}>
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white"
                    }}
                >
                    <CardMedia
                        // component='img'
                        image={channelDetail?.snippet?.thumbnails?.high?.url}
                        alt={channelDetail?.snippet?.title}
                        sx={{
                            height: "180px",
                            width: "180px",
                            borderRadius: "50%",
                            mb: 2,
                            border: "1px solid #e3e3e3"
                        }}
                    />
                    <Typography variant={`h6`}>
                        {channelDetail?.snippet?.title}
                        <CheckCircle
                            sx={{
                                fontSize: 14,
                                color: "gray",
                                ml: "5px"
                            }}
                        />
                    </Typography>
                    {channelDetail?.statistics?.subscriberCount && (
                        <Typography
                            fontSize={18}
                            fontWeight='bold'
                            sx={{
                                color: "white",
                                ml: "5px"
                            }}
                        >
                            {parseInt(
                                channelDetail?.statistics?.subscriberCount
                            ).toLocaleString()}{" "}
                            Subscribers
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box>
    );
};

export default ChannelCard;
