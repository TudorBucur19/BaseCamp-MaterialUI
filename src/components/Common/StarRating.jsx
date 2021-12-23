import React, { useState, useContext } from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

import { AuthenticationContext } from 'contexts/AuthenticationContext';
import { CampgroundsContext } from 'contexts/CampgroundsContext';
import { ratingLabels } from 'utils/configValues';

const StarRating = ({readOnly, ratingValue, campId }) => {
    const [value, setValue] = useState(ratingValue);
    const [hover, setHover] = useState(-1);
    const { user } = useContext(AuthenticationContext);
    const { handleRatingUpdate } = useContext(CampgroundsContext);

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
                <Box ml={2}>{ratingLabels[hover !== -1 ? hover : value]}</Box>
            )}
        </Box>
     );
}
 
export default StarRating;