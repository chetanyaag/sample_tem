
import PostOne from "./PostOne";
import { Box, Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";

export default function HomePosts(props) {

    const [postData, setPostData] = useState([])

    useEffect(()=>{
        setPostData(props.posts)
        console.log("tes")
    })



    return (
        <Box sx={{ mt: 10, ml: 2 }}>
            <Stack direction="row" spacing={3}>
                <Grid container>
                    {postData.map((post, index) => (
                        <Grid item xs={12} md={3} key={index} sx={{mb:2}}>
                        <PostOne title={post.title} desc={post.desc} />
                        </Grid>
                    ))}

                </Grid>
            </Stack>
        </Box>
    )
}