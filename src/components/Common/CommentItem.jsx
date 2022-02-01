import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Avatar, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';

import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { CampgroundsContext } from 'contexts/CampgroundsContext';
import defaultAvatar from 'assets/defaultAvatar.jpg';


const CommentItem = ({ comment, removeComment, campgroundID }) => {
    const { user } = useContext(AuthenticationContext);
    const { handleCommentChange, editCommentsArray } = useContext(CampgroundsContext);
    const { register, handleSubmit } = useForm({
        defaultValues: {
            commentText: comment.commentText
        }
    });
    const { author } = comment;
    const ownership = author.id === user.uid;
    const [isEditable, setIsEditable] = useState(false);
    const handleClickAway = () => {
        setIsEditable(false);
    };

    const onSubmit = (data) => {
        editCommentsArray('Campgrounds', campgroundID, comment);
        handleCommentChange(data, campgroundID, 'add', 'Campgrounds');
        setIsEditable(false);
    };

    return ( 
        <ClickAwayListener onClickAway={handleClickAway}>
        <Box py={2}>
            <Box display="flex" justifyContent="space-between">
                <Box display="flex">
                    <Avatar 
                    alt={author.name} 
                    src={author.avatar ? author.avatar : defaultAvatar} 
                    sx={{ width: 30, height: 30 }}
                    />
                    <Typography as="h3" ml={1}>{author.name}</Typography>
                </Box>
                <Typography fontSize="0.9rem">{comment.createdAt}</Typography>
            </Box>
                <Box ml={5}>
                    {isEditable ?            
                    <TextField 
                    multiline={true}
                    sx={{my: 1}}
                    inputProps={{sx: {fontSize: '0.9rem'}}}
                    fontSize="0.9rem" 
                    variant="standard" 
                    fullWidth 
                    {...register("commentText")}
                    />
                    :
                    <Typography my={1} fontSize="0.9rem">{comment.commentText}</Typography>
                    }
                </Box>            
            {ownership &&
            <Box>
                {isEditable ? 
                <Button 
                variant="text" 
                color="secondary" 
                onClick={handleSubmit(onSubmit)}
                > 
                    Update
                </Button>
                :
                <Button 
                variant="text" 
                color="secondary" 
                label="Update"
                onClick={() => setIsEditable(true)}
                >
                    Edit
                </Button>
                }
                <IconButton 
                color="danger" 
                size="small" 
                onClick={() => removeComment('Campgrounds', campgroundID, 'remove', comment)}
                >
                    <DeleteSweepOutlinedIcon fontSize="small"/>
                </IconButton>
            </Box>
            }
            <Divider variant="inset"/>
        </Box>
        </ClickAwayListener>
     );
}
 
export default CommentItem;