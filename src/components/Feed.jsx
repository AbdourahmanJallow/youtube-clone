import { useEffect, useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { SideBar, Videos } from "../components";
import { fetchFromApi } from "../assets/fetchFromApi";

function Feed() {
    const [videos, setVideos] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");

    useEffect(() => {
        fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) =>
            setVideos(data.items)
        );
    }, [selectedCategory]);

    return (
        <Stack
            sx={{
                flexDirection: {
                    sx: "column",
                    md: "row"
                }
            }}
        >
            <Box
                sx={{
                    height: { sx: "auto", md: "92vh" },
                    borderRight: "1px solid #3d3d3d",
                    px: { sx: 0, md: 2 }
                }}
            >
                <SideBar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <Typography
                    className='copyright'
                    variant='body2'
                    sx={{ mt: 1.5, color: "#fff" }}
                >
                    Copyright 2023 Dex
                </Typography>
            </Box>

            <Box
                p={2}
                sx={{
                    overflowY: "auto",
                    height: "90vh",
                    flex: 2
                }}
            >
                <Typography
                    variant='h4'
                    fontWeight={`bold`}
                    mb={2}
                    sx={{
                        color: "white"
                    }}
                >
                    {selectedCategory}{" "}
                    <span
                        style={{
                            // color: "#fc1503"
                            color: "#FF0000"
                        }}
                    >
                        videos
                    </span>
                </Typography>

                <Videos videos={videos} />
            </Box>
        </Stack>
    );
}

export default Feed;
