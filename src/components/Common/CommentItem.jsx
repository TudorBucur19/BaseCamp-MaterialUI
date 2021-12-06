import React, { useContext } from 'react';
import { Avatar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';

import { AuthenticationContext } from '../../contexts/AuthenticationContext';

const CommentItem = ({ comment, handleClick }) => {
    const { user } = useContext(AuthenticationContext);
    const ownership = comment.author === user.displayName;
    return ( 
        <Box py={2}>
            <Box display="flex" justifyContent="space-between">
                <Box display="flex">
                    <Avatar alt={comment.author} src="/static/images/avatar/1.jpg" sx={{ width: 30, height: 30 }}/>
                    <Typography as="h3" ml={1}>{comment.author}</Typography>
                </Box>
                <Typography fontSize="0.9rem">10 days ago</Typography>
            </Box>
            <Typography my={1} ml={5} fontSize="0.9rem">{comment.comment}</Typography>
            {ownership &&
            <IconButton 
            color="danger" 
            size="small" 
            onClick={() => handleClick(comment.id)}
            >
                <DeleteSweepOutlinedIcon fontSize="small"/>
            </IconButton>
            }
            <Divider variant="inset"/>
        </Box>
     );
}
 
export default CommentItem;