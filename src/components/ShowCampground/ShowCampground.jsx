import React, { useContext, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Container } from '@mui/material';

import InfoAccordion from '../Common/InfoAccordion';
import CommentItem from '../Common/CommentItem';
import CommentForm from '../forms/CommentForm';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { CampgroundsContext } from '../../contexts/CampgroundsContext';
import PrimarySearchAppBar from '../navbar/AppBar';
import DialogBox from '../Common/DialogBox';
import StarRating from '../Common/StarRating';
import { ratingCalculator } from '../../utils/helperFunctions/helperFunctions';


const ShowCampground = () => {
    const { campgroundsList, handleCommentsUpdate, removeItem } = useContext(CampgroundsContext);
    const { user } = useContext(AuthenticationContext);
    const { id } = useParams(); 
    const camp = campgroundsList && campgroundsList.find(campground => campground.id === id);
    const comments = camp && camp.comments;
    const image = camp && camp.campground.image;
    const ownership = camp && user && camp.campground.author === user.displayName;
    const [open, setOpen] = useState(false);
    const ratingOwnership = camp?.ratings && camp.ratings.filter(rating => rating.owner === user.uid).length;
    const overAllRating = ratingCalculator(camp.ratings);
    
    const dialogTextContent = {
        deleteCampMsg: "You are about to remove this campground and it's data. Are you sure?",
        campHeader: "Remove this Campground?"
    }
    
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
      
    return ( 
        <>        
        {camp && 
        <div>
            <PrimarySearchAppBar/>
            <Container sx={{mb: "2rem"}}>    
                <Grid container spacing={4} mt={1}>
                    <Grid item xs={12} md={4}>                        
                        <InfoAccordion campground={camp} campId={id} ratingOwnership={ratingOwnership} user={user}/>                        
                    </Grid>
                    <Grid item xs={12} md={8}>                
                        <Card >
                            <CardMedia
                                component="img"
                                height="fit-content"
                                image={typeof image === 'object' ? image[0].url : image}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Box display="flex" justifyContent="space-between">
                                    <Typography gutterBottom variant="h5" component="div" fontWeight="bold" color="info.main">
                                        {camp.campground.name}
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">
                                        $ {camp.campground.price} /night
                                    </Typography>
                                </Box>
                                <Typography variant="body2" color="text.secondary">
                                {camp.campground.description}
                                </Typography>
                                
                                <Typography my={2} fontWeight="bold">
                                    {`submitted by: ${camp.campground.author}`}
                                </Typography>    
                                {camp.ratings && 
                                <Box display="flex">
                                    <StarRating readOnly={true} ratingValue={overAllRating}/>
                                    <Typography color="text.primary">{`(${camp.ratings.length} ratings)`}</Typography>
                                </Box>           
                                }                 
                            </CardContent>
                            
                            <CardActions sx={{padding: 2, justifyContent: "flex-end"}}>
                                {ownership &&
                                <Stack direction="row" spacing={1}>
                                    <Link to={`/campgrounds/${id}/editcampground`}>
                                        <IconButton color="secondary" variant="outlined"><EditOutlinedIcon/></IconButton>
                                    </Link>
                                    <IconButton color="danger" variant="outlined"><DeleteSweepOutlinedIcon onClick={handleClickOpen}/></IconButton>
                                </Stack>
                                }
                            </CardActions>
                        </Card>
                        {comments && comments.length > 0 &&
                        <Paper sx={{mt: 2, p: 2, display: "flex", flexDirection: "column"}} >
                            {comments.map((comment) => 
                                <CommentItem 
                                key={comment.id}
                                comment={comment}
                                removeComment={handleCommentsUpdate}
                                campgroundID = {id}
                                />
                            )}
                        </Paper>
                        }
                        {user &&
                            <CommentForm campID={id}/>
                        }
                    </Grid>
                </Grid>  
                <DialogBox {...{open, handleClose, dialogTextContent}} onAgree={removeItem} identifier={id}/>     
            </Container>   
        </div>
        }
        </>                    
     );
};
 
export default ShowCampground;