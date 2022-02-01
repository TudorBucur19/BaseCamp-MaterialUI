import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { CampgroundsContext } from 'contexts/CampgroundsContext';
import PrimarySearchAppBar from 'components/navbar/AppBar';
import { AuthenticationContext } from 'contexts/AuthenticationContext';
import FileInput from 'components/Common/FileInput';
import ImageThumbnail from 'components/Common/ImageThumbnail';
import { signUpSchema, signInSchema } from 'utils/yupSchemas';

const Login = () => { 
    const { handleFileChange, setAvatar, userAvatar, setUserAvatar } = useContext(CampgroundsContext);
    const { handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = useContext(AuthenticationContext);  
    const schema = hasAccount ? signInSchema : signUpSchema;
    const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(schema) });
    
    return ( 
        <div>
        <PrimarySearchAppBar/>
        <Box display="flex" flexDirection="column" width={{sm: '90%', md:'30%'}} mx="auto" my={6} p={3}>
                <Typography fontWeight="bold" fontSize="1.5rem" mb={2}>
                    Wellcome to BaseCamp
                </Typography>
                
                <form>
                    {!hasAccount && 
                    <Box>
                        <TextField 
                        label="User Name" 
                        variant="outlined" 
                        margin="dense" 
                        color="borders" 
                        fullWidth
                        {...register('userName')}
                        />
                        <Typography>{errors.userName?.message}</Typography>
                    </Box>
                    }
                    <Box>
                        <TextField 
                        label="Email" 
                        variant="outlined" 
                        type="email"
                        margin="dense" 
                        color="borders" 
                        fullWidth
                        {...register('email', {required: true})}
                        />
                        <Typography capitalize color="red">{errors.email?.message}</Typography>
                        {emailError && <Typography color="red">{emailError}</Typography>}
                    </Box>

                    <Box>
                        <TextField 
                        label="Password" 
                        variant="outlined" 
                        type="password" 
                        margin="dense" 
                        color="borders" 
                        fullWidth
                        {...register('password', {required: true})}
                        />
                        <Typography color="red">{errors.password?.message}</Typography>
                        {passwordError && <Typography color="red">{passwordError}</Typography>}
                    </Box>

                    {!hasAccount && <FileInput handleChange={handleFileChange} inputLabel={'Avatar'} setState={setAvatar}/>}
                    {userAvatar.image.length > 0 && <ImageThumbnail images={userAvatar.image} collection={'usersAvatars'} state={userAvatar} setState={setUserAvatar}/>} 
                
                    <Box>
                    {hasAccount ? (
                        <>
                        <Button 
                        variant="contained" 
                        color="secondary" 
                        size="large" 
                        sx={{mt: 1}}
                        fullWidth 
                        onClick={handleSubmit(handleLogin)}
                        >
                            Sign In
                        </Button>

                        <Typography 
                        mt={3}
                        >
                            Don't have an account ? 
                            <Button variant="text" color="secondary" onClick={() => setHasAccount(!hasAccount)}>Sign up</Button>
                        </Typography>
                        </>   
                    ) : (
                        <>
                        <Button 
                        variant="contained" 
                        color="secondary" 
                        size="large" 
                        sx={{mt: 1}} 
                        fullWidth 
                        onClick={handleSubmit((data) => handleSignup(data, userAvatar.image[0]?.url))}
                        >
                            Sign Up
                        </Button>
                        <Typography>
                            Already have an account ? 
                            <Button variant="text" color="secondary" onClick={() => setHasAccount(!hasAccount)}>Sign in</Button>
                        </Typography>
                        </>
                    )}
                </Box>
                </form>
            </Box>
        </div>
     );
}
 
export default Login;