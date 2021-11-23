import React, { useContext } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { CampgroundsContext } from '../../contexts/CampgroundsContext';
import { maxHeight } from '@mui/system';


const ImageThumbnail = ({images, collection, state, setState}) => {
    const { removeStorageFile } = useContext(CampgroundsContext);
    return ( 
        <ImageList sx={{ width: '100%', height: 'auto', maxHeight: 450 }} cols={2} rowHeight="auto" gap={5}>
        {images.map((item, index) => (
        <ImageListItem key={item.img}>
          <img
            src={item.url}
            //srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
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