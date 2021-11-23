import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import PrimarySearchAppBar from '../navbar/AppBar';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import FileInput from '../Common/FileInput';
import { CampgroundsContext } from '../../contexts/CampgroundsContext';

const Login = () => {
    const { handleFileChange, setAvatar, userAvatar } = useContext(CampgroundsContext)
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
                {/* {campground.image.length > 0 && 
                   <ImageThumbnail images={campground.image}/>
                }  */}
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

                    {!hasAccount && <FileInput handleChange={handleFileChange} inputLabel={'Avatar'} setState={setAvatar}/>}
                
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
                        <Typography >Have an account ? <Button variant="text" color="secondary" onClick={() => setHasAccount(!hasAccount)}>Sign in</Button></Typography>
                        </>
                    )}
                </Box>
                </form>
            </Box>
        {/* <section className="login">
            <div className="login-container">
            <label>User Name</label>
                <input 
                    type="text"
                    autoFocus
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}                
                />

                <label>Email</label>
                <input 
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}                
                />
                <p className={ emailError ? "error-msg" : "hidden"}>{emailError}</p>
                <label>Password</label>
                <input 
                    type="password"
                    autoFocus
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}                
                />
                <p className={ passwordError ? "error-msg" : "hidden"}>{passwordError}</p>

                <div className="btn-container">
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin}>Sign in</button>
                        <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>   
                    ) : (
                        <>
                        <button onClick={handleSignup}>Sign up</button>
                        <p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                        </>
                    )}
                </div>

            </div>
        </section> */}
        </div>
     );
}
 
export default Login;