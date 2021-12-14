import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { useContext } from 'react';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { CampgroundsContext } from '../../contexts/CampgroundsContext';

const StarRating = ({readOnly, ratingValue, campId}) => {
    const [value, setValue] = useState(ratingValue);
    const [hover, setHover] = useState(-1);
    const { user } = useContext(AuthenticationContext);
    const { handleRatingUpdate } = useContext(CampgroundsContext);

    const labels = {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
    };

    return ( 
         <Box
        sx={{
        width: 'fitContent',
        display: 'flex',
        alignItems: 'center',
        mr: 2,
        }}
        >
            <Rating 
            name="half-rating-read" 
            value={value} 
            precision={0.5}
            onChange={(event, newValue) => {
                setValue(newValue);
                handleRatingUpdate('Campgrounds', campId, {rating: newValue, owner: user.uid});
              }}

            onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}

            readOnly={readOnly} 
            />
            {! readOnly && value !== null && (
                <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
        </Box>
     );
}
 
export default StarRating;