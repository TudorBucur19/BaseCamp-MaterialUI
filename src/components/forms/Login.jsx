import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PrimarySearchAppBar from '../navbar/AppBar';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import FileInput from '../Common/FileInput';
import { CampgroundsContext } from '../../contexts/CampgroundsContext';
import ImageThumbnail from '../Common/ImageThumbnail';

const Login = () => {
    const { handleFileChange, setAvatar, userAvatar, setUserAvatar } = useContext(CampgroundsContext)
    const { 
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError, 
        userName,
        setUserName 
    } = useContext(AuthenticationContext);
    
    return ( 
        <div>
        <PrimarySearchAppBar/>
        <Box display="flex" flexDirection="column" width={{sm: '90%', md:'30%'}} mx="auto" my={6} p={3}>
                <Typography fontWeight="bold" fontSize="1.5rem" mb={2}>
                    Wellcome to BaseCamp
                </Typography>
                
                <form >
                    {!hasAccount && 
                    <TextField 
                    name="userName" 
                    label="User Name" 
                    variant="outlined" 
                    margin="dense" 
                    color="borders" 
                    fullWidth
                    value={userName} 
                    onChange={(e) => setUserName(e.target.value)}
                    />
                    }
                    <TextField 
                    name="email" 
                    label="Email" 
                    variant="outlined" 
                    type="email"
                    margin="dense" 
                    color="borders" 
                    fullWidth
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && <Typography color="red">{emailError}</Typography>}
                    <TextField 
                    name="password" 
                    label="Password" 
                    variant="outlined" 
                    type="password" 
                    margin="dense" 
                    color="borders" 
                    fullWidth
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && <Typography color="red">{passwordError}</Typography>}

                    {!hasAccount && <FileInput handleChange={handleFileChange} inputLabel={'Avatar'} setState={setAvatar}/>}
                    {userAvatar.image.length > 0 && <ImageThumbnail images={userAvatar.image} collection={'usersAvatars'} state={userAvatar} setState={setUserAvatar}/>} 
                
                    <Box>
                    {hasAccount ? (
                        <>
                        <Button variant="contained" color="secondary" size="large" sx={{mt: 1}} fullWidth onClick={handleLogin}>
                            Sign In
                        </Button>
                        <Typography mt={3}>Don't have an account ? <Button variant="text" color="secondary" onClick={() => setHasAccount(!hasAccount)}>Sign up</Button></Typography>
                        </>   
                    ) : (
                        <>
                        <Button variant="contained" color="secondary" size="large" sx={{mt: 1}} fullWidth onClick={() => handleSignup(userAvatar.image[0].url)}>
                            Sign Up
                        </Button>
                        <Typography >Already have an account ? <Button variant="text" color="secondary" onClick={() => setHasAccount(!hasAccount)}>Sign in</Button></Typography>
                        </>
                    )}
                </Box>
                </form>
            </Box>
        </div>
     );
}
 
export default Login;