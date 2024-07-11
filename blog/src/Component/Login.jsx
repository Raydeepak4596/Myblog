import { Box, Button, Container, Divider, InputBase, TextField, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate()
    return (
        <>
            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Box sx={{ height: 'auto', padding: '2rem',width:'30rem' }}>
                <Box sx={{backgroundColor:'blue',width:'100%' , color:'white',textAlign:'center'}}>   <Typography ><h1>Login</h1></Typography></Box>
                <Divider/>
                    <form>
                        <TextField variant='standard' sx={{width:'100%'}} placeholder='Username'  /><br/>
                        <TextField variant='standard' placeholder='Password' sx={{width:'100%'}} /><br/>
                        <Button type='submit'>Submit</Button>
                        <Divider/>
                        <Typography sx={{display:'flex',justifyContent:'flex-end' ,marginTop:'1rem',fontSize:'1.5rem'}} onClick={()=>navigate('/register')}>Register</Typography>
                    </form>
                </Box>

            </Container>
        </>
    )
}

export default Login