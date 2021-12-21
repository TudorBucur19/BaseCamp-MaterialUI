import React, { useContext } from 'react';
import { Avatar, Button, Paper } from '@mui/material';
import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';

import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { CampgroundsContext } from '../../contexts/CampgroundsContext';
import { useForm } from 'react-hook-form';

const CommentForm = ({ campID }) => {
    const { user } = useContext(AuthenticationContext);
    const { handleCommentChange } = useContext(CampgroundsContext);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        handleCommentChange(data, campID, 'add', 'Campgrounds')
        reset();
    }
    
    return ( 
        <Paper sx={{mt: 2, p: 2, display: "flex", flexDirection: "column"}}>
            <Box display="flex">
                <Avatar alt={user.displayName} src={ user.photoURL ? user.photoURL : "/static/images/avatar/1.jpg"} sx={{ width: 30, height: 30, mr: 2 }}/>
                <Box component="form" flexGrow="1" display="flex" flexDirection="column" alignItems="flex-end">
                    <TextField 
                    label="Add new comment" 
                    variant="outlined" 
                    margin="dense" 
                    multiline 
                    minRows="2" 
                    color="borders" 
                    fullWidth
                    {...register('commentText', {required: true})}
                    />
                    <Box mt={1}>
                        <Button 
                        variant="outlined" 
                        color="secondary"
                        onClick={handleSubmit(onSubmit)}
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