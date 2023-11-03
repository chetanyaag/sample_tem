import Paper from '@mui/material/Paper';
import { Stack, TextField } from '@mui/material';
import {Box} from '@mui/material';
import {Button} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
export default function Homelayout(props) {

    const [title, setTitle] = useState()
    const [ desc, setDesc] = useState()

    const handleOnPost = (event) =>{
        var data = {"title": title, "desc":desc};
        props.onPostDone(data);
    }

    const handleTitleChange = (event) =>{
        const changedTitle = event.currentTarget.value;
        setTitle(changedTitle)
    }
    
    const handleDescChange = (event) => {
        const changedDesc = event.currentTarget.value;
        setDesc(changedDesc)
    }

    return(
        <>
       
        <Paper elevation={4} sx={{padding:1}}>
            <Stack direction='row' spacing={3}>
        <TextField id="title" label="Title" variant="outlined" value={title} onChange={handleTitleChange}/>
        <TextField id="description" label="Description" variant="outlined"value={desc} onChange={handleDescChange} />
        <TextField id="img" label="Images" variant="outlined" />
        <Button variant="contained" onClick={handleOnPost}> <AddIcon /> Post</Button>
        </Stack>
        </Paper>

        </>
    )
}