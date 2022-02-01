import React from 'react';
import { Link } from 'react-router-dom';
import ReactCountryFlag from 'react-country-flag';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import StarRating from 'components/Common/StarRating';
import { ratingCalculator } from 'utils/helperFunctions/helperFunctions';
import missingImage from 'assets/image-not-found.jpg';

const CampCard = ({ campground, url }) => {
    const { image, name, price, country } = campground.campground;
    const overAllRating = ratingCalculator(campground.ratings);

    return ( 
        <Card>
            <CardMedia
            component="img"
            height="160"
            image={image.length ? image[0].url : missingImage}
            alt="camp picture"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body2" color="text.secondary" mb={1}>
                        {Number(price) === 0 ?
                        `Free accomodation`
                        :
                        `${price} € / night`
                        }
                    </Typography>
                    {country &&
                    <ReactCountryFlag 
                    countryCode={country.code} 
                    svg 
                    style={{
                        fontSize: '1.5em',
                    }}
                    title={country.name}
                    />
                    }
                </Box>
                {campground.ratings ? 
                <Box display="flex">
                    <StarRating readOnly={true} ratingValue={overAllRating}/>
                </Box>
                :
                <Typography>No ratings yet!</Typography>
                }
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