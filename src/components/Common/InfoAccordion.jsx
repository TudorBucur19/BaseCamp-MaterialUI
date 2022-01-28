import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import ThumbsUpDownOutlinedIcon from '@mui/icons-material/ThumbsUpDownOutlined';

import StarRating from 'components/Common/StarRating';
import MapContainer from 'components/Common/MapContainer';
import { ratingLabels } from 'utils/configValues';


const InfoAccordion = ({ campground, campId, user }) => {
    const currentUserRating = campground && user && campground.ratings?.find(rating => rating.owner === user.uid);
    return ( 
    <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <MapOutlinedIcon/><Typography ml={1}>Location</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {campground.campground.coords ?
            <Box>
              <MapContainer height="300px" width="100%" coords={campground.campground.coords} />
            </Box>
            :
            <Box display="flex">
              <SentimentDissatisfiedOutlinedIcon/><Typography ml={2}>Location is not provided</Typography>
            </Box>
            }
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
           <ThumbsUpDownOutlinedIcon/><Typography ml={1}>Rate this Campground</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {user ?
            <Box>
              {currentUserRating ? 
              <>
              <Typography>You rated this campground as <Box fontWeight="bold">{ratingLabels[currentUserRating.rating]}</Box></Typography>
              <StarRating ratingValue={currentUserRating.rating} campId={campId} readOnly/>
              </>
              :
              <StarRating ratingValue={0} campId={campId}/>
              }
            </Box>
            :
            <Typography>Only loged-in users can rate a campground!</Typography>
          }
          </AccordionDetails>
        </Accordion>
      </div> 
    );
}
 
export default InfoAccordion;