import { grey, red } from '@mui/material/colors';

export const customTheme = {
    palette: {
        primary: {
          main: grey[200],
        },
        secondary: {
          main: '#02a804',
        },
        borders: {
          main: grey[600],
        },
        danger: {
          main: red[700]
        },
      },

      typography: {
        fontFamily: "'Arial', 'sans-serif'",
        h3: {
          '@media (max-width:600px)': {
            fontSize: '1.5rem',
          },
        },
        h5: {
          '@media (max-width:600px)': {
            fontSize: '1rem',
          },
      },      
      }
};