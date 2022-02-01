import React, { useContext } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

import { CampgroundsContext } from '../../contexts/CampgroundsContext';


const ImageThumbnail = ({images, collection, state, setState}) => {
    const { removeStorageFile } = useContext(CampgroundsContext);
    
    return ( 
        <ImageList sx={{ width: '100%', height: 'auto', maxHeight: 450 }} cols={2} rowHeight="auto" gap={5}>
        {images.map((item, index) => (
          <ImageListItem key={item.img}>
            <img
              src={item.url}
              alt={item.name}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.name}
              actionIcon={
                <IconButton
                  color='danger'
                  onClick={() => removeStorageFile(collection, item.name, index, state, setState)}
                >
                  <HighlightOffOutlinedIcon />
                </IconButton>
              }
            />
          </ImageListItem>
      ))}
    </ImageList>
     );
}
 
export default ImageThumbnail;