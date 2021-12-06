import React from 'react';
import { makeStyles } from '@material-ui/core';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';

const FileInput = ({ handleChange, inputLabel, setState}) => {
    const useStyles = makeStyles({
        fileInput: {
            display: 'none',
            visibility: 'none',
        }
    });
    const classes = useStyles();

    return ( 
        <Box display="flex" mt={1}>
            <Button
            variant="outlined"
            component="label"
            color="secondary"
            sx={{mb: 1, width: {xs: '100%', sm: '50%'}}}
            startIcon={<AddAPhotoOutlinedIcon/>}
            >
                {inputLabel}
                <input type="file" className={classes.fileInput} onChange={(e) => handleChange(e.target.files[0], setState)}/>
            </Button>
            <Typography ml={2}>Choose an image</Typography>
        </Box> 
     );
}
 
export default FileInput;