import { useEffect, useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Videos } from "../components";
import { fetchFromApi } from "../assets/fetchFromApi";
import { useParams } from "react-router-dom";

function SearchFeed() {
    const [videos, setVideos] = useState([]);
    const { searchTerm } = useParams();

    useEffect(() => {
        fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
            setVideos(data.items)
        );
    }, [searchTerm]);

    return (
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
                Search results for{" "}
                <span
                    style={{
                        // color: "#fc1503"
                        color: "#FF0000"
                    }}
                >
                    {searchTerm}
                </span>{" "}
                videos
            </Typography>

            <Videos videos={videos} />
        </Box>
    );
}

export default SearchFeed;
