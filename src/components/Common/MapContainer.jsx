import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Box from '@mui/material/Box';

const MapContainer = ({ height, width, onClick, coords, currentPosition }) => {
    
    const mapStyle = {
        height: height,
        width: width
    };

    const defaultCenter = currentPosition ? currentPosition : {lat: 45.745, lng: 25.200};

    return ( 
        <Box>
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                mapContainerStyle={mapStyle}
                center={coords ? coords : defaultCenter}
                zoom={10}
                onClick={(e) => onClick(e)}
                >
                    {coords &&
                    <Marker
                    position={coords}
                    />
                    }

                </GoogleMap>
            </LoadScript>
        </Box>
     );
}
 
export default MapContainer;