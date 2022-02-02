import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import MoreIcon from '@mui/icons-material/MoreVert';
import LoginIcon from '@mui/icons-material/Login';
import { makeStyles } from '@material-ui/styles';
import { TextField } from '@mui/material';
import { FaCampground } from "react-icons/fa";

import { AuthenticationContext } from 'contexts/AuthenticationContext';
import { CampgroundsContext } from 'contexts/CampgroundsContext';
import defaultAvatar from 'assets/defaultAvatar.jpg';

const useStyles = makeStyles({
  header: {
    backgroundColor: 'primary',
    color: 'black',
    position: 'sticky'
  },

  link: {
    color: 'black'
  }
});

const PrimarySearchAppBar = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const { user, handleLogout } = useContext(AuthenticationContext);
  const { setSearchWord } = useContext(CampgroundsContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const onSearch = (data) => {
    setSearchWord(data);
    history.push("/campgrounds")
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const navBarLogOut = () => {
    handleLogout();
    handleMenuClose();
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const classes = useStyles();

  const menuId = 'primary-search-account-menu';
  const renderMenu = (    
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={navBarLogOut}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar className={classes.header} elevation={0} position="sticky">
        <Toolbar>          
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <FaCampground/>
          </IconButton>
          <Link to="/campgrounds" className={classes.link}>
            <Typography
              mr={2}
              variant="h6"
              noWrap
              component="div"
              fontWeight="bold"
              fontFamily="RocknRoll One"
              sx={{ display: { xs: 'none', sm: 'block' }, cursor: "pointer" }}
            >
              BaseCamp
            </Typography>
          </Link>

          <TextField 
          size="small"
          label="Search by name..."
          color="borders"
          {...register('searchWord')}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon onClick={handleSubmit(onSearch)} cursor="pointer"/>
              </InputAdornment>
            )
          }}
          />
          <Box sx={{ flexGrow: 1 }} />
          {user ?
          <> 
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar alt={user.displayName} src={user.photoURL ? user.photoURL : defaultAvatar} title={user.displayName}/>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
          </>
          :
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            href="/login"
          >
            <LoginIcon />
          </IconButton>
          }
        </Toolbar>
      </AppBar>
        {renderMobileMenu}
        {renderMenu}
    </Box>
  );
}

export default PrimarySearchAppBar;