import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CampCard = ({ campground, url }) => {
    const { image, name, price } = campground.campground;
    return ( 
        <Card>
            <CardMedia
                component="img"
                height="160"
                image={typeof image === 'object' ? image[0].url : image}
                alt="camp picture"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {Number(price) === 0 ?
                    `Free accomodation`
                    :
                    `${price} $ / night`
                    }
                </Typography>
            </CardContent>
            <CardActions >
                <Link to={`${url}/${campground.id}`}>
                    <Button size="small" variant="outlined" color="secondary">More info</Button>
                </Link>
            </CardActions>
        </Card>
     );
}
 
export default CampCard;