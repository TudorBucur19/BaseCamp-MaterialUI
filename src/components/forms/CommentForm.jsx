import React, { useContext } from 'react';
import { Avatar, Button, Paper } from '@mui/material';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';

import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { CampgroundsContext } from '../../contexts/CampgroundsContext';

const CommentForm = ({author, campID}) => {
    const { user } = useContext(AuthenticationContext);
    const { handleCommentChange, handleCommentSubmit, comment } = useContext(CampgroundsContext);
    console.log(comment)
    
    return ( 
        <Paper sx={{mt: 2, p: 2, display: "flex", flexDirection: "column"}}>
            <Box display="flex">
                <Avatar alt={author} src="/static/images/avatar/1.jpg" sx={{ width: 30, height: 30, mr: 2 }}/>
                <Box component="form" flexGrow="1" display="flex" flexDirection="column" alignItems="flex-end">
                    <TextField 
                    name="comment" 
                    label="Add new comment" 
                    variant="outlined" 
                    margin="dense" 
                    multiline 
                    minRows="2" 
                    color="borders" 
                    fullWidth
                    value={comment}
                    onChange={(e) => handleCommentChange(e, user.displayName, new Date())}
                    />
                    <Box mt={1}>
                        <Button 
                        variant="outlined" 
                        color="secondary"
                        onClick={() => handleCommentSubmit('Campgrounds', campID)}
                        >
                            <AddCommentOutlinedIcon/>
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Paper>
     );
}
 
export default CommentForm;