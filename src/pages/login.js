import  {React, useRef, useState } from "react"

import { Form } from "react-bootstrap"
import { ThemeProvider } from '@mui/material/styles';
import { defaultButton, StyledTextField } from '../styles/MUIstyles.js'
import { IconButton, InputAdornment, Box, Button, TextField } from '@mui/material';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useRouter } from 'next/navigation'

import { useAuth } from "../authContext.js"

export default function Login({setShowLogin}) {

    const emailRef = useRef()
    const passwordRef = useRef()
  
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const router = useRouter();

    async function handleSubmit(e) {
        
        e.preventDefault()
       
        try {
          setError("")
          setLoading(true)
          await login(emailRef.current.value, passwordRef.current.value)
          console.log(emailRef.current.value)
          
          setShowLogin(false);
        } catch {
          setError("Failed to create an account")
        }
    
        setLoading(false)

   }
      async function handleClickShowPassword(e)
      {
        setShowPassword(!showPassword)
      }

    return (

        <Box textAlign='center' sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems:"center"}}>
            <h1 className='boldText'>Login</h1>
            
            <Form onSubmit={handleSubmit}>
            <StyledTextField label="Email" variant="filled" type="email" inputRef={emailRef} required></StyledTextField>
    
    
         
            
            <StyledTextField label="Password" variant="filled" required
           type={showPassword ? "text" : "password"}
           InputProps={{
             endAdornment: (
               <InputAdornment position="end">
                 <IconButton
                   sx={{color: 'black'}}
                   aria-label="toggle password visibility"
                   onClick={handleClickShowPassword}
                 >
                   {showPassword ? <Visibility /> : <VisibilityOff />}
                 </IconButton>
               </InputAdornment>
             )
             
           }}
           inputRef={passwordRef}
           />
         
    
        
    
          <ThemeProvider theme={defaultButton}>
             <Button  disabled={loading} sx={{ justifyContent:'center'}} variant="contained" id = "SignIn" type = "submit">
               Sign In
             </Button>
           </ThemeProvider>
          
        </Form>
    
    
       
       </Box>
    )
}