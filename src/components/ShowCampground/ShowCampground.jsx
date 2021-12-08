import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
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
import { CommentsContext } from '../../contexts/CommentsContext';
import PrimarySearchAppBar from '../navbar/AppBar';


const ShowCampground = () => {
    const { campgroundsList, handleCommentsUpdate, removeItem } = useContext(CampgroundsContext);
    const { user } = useContext(AuthenticationContext);
    //const { removeComment } = useContext(CommentsContext);
    const { id } = useParams(); 
    const camp = campgroundsList && campgroundsList.find(campground => campground.id === id);
    const comments = camp && camp.comments;
    const image = camp && camp.campground.image;
    const ownership = camp && user && camp.campground.author === user.displayName;
      
    return ( 
        <>        
        {camp && 
        <div>
            <PrimarySearchAppBar/>
            <Container sx={{mb: "2rem"}}>    
                <Grid container spacing={4} mt={1}>
                    <Grid item xs={12} md={4}>                        
                        <InfoAccordion campground={camp}/>                        
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
                                
                                <Typography mt={2} fontWeight="bold">
                                    {`submitted by: ${camp.campground.author}`}
                                </Typography>                                
                            </CardContent>
                            
                            <CardActions sx={{padding: 2, justifyContent: "flex-end"}}>
                                {ownership &&
                                <Stack direction="row" spacing={1}>
                                    <IconButton color="secondary" variant="outlined"><EditOutlinedIcon/></IconButton>
                                    <IconButton color="danger" variant="outlined"><DeleteSweepOutlinedIcon onClick={() => removeItem(id)}/></IconButton>
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
            </Container>   
        </div>
        }
        </>                    
     );
};
 
export default ShowCampground;