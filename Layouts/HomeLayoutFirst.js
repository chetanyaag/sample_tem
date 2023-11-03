
import Homelayout from './Homelayout.js'
import { Grid, Item, Typography } from '@mui/material'
import {Box} from '@mui/material';

export default function HomeLayoutFirst(props) {
    const handlePostDone=(data)=>{
        props.onPostDone(data)
    }

    return (
        <>
         <Box sx={{ ml:0.5, mt:20}} >
            <Grid container spacing={3}>
                <Grid item xs={12} md={5}>
                    <Typography sx={{color:"black", fontSize:20, fontFamily:"BlinkMacSystemFont"}}> Post Your Ads, details Here </Typography>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Homelayout onPostDone={handlePostDone} /> 
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
            </Box>
        </>
    )
}