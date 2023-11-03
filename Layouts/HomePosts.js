
import PostOne from "./PostOne";
import { Box, Grid, Stack } from "@mui/material";
import { useEffect, useState } from "react";

export default function HomePosts(props) {

    const [postData, setPostData] = useState([])
    const [seconds, setSeconds] = useState(0);
    useEffect(()=>{
        setPostData(props.posts)
        console.log("tes")
        const intervalId = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
          }, 1000); // 1000 milliseconds = 1 second
      
          // Cleanup the interval when the component unmounts or the dependency array changes
          return () => {
            clearInterval(intervalId);
          };
    },[])



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