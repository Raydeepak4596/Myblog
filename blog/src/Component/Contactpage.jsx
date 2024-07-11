import { Box, Button, Container, InputBase, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const Contactpage = () => {
  return (
   <Box>
       <Typography textAlign='center'><h2>Please fill any query</h2></Typography>
    <Container sx={{height:'50vh', display:'flex' , alignItems:'center',justifyContent:'center'}}>
   
        <Stack sx={{width:'50%' , height:'auto' ,padding:'2rem 1rem', backgroundColor:'lightgrey' , color:'white'}} >
            <TextField placeholder='Name'   variant='standard'></TextField>
            <TextField  type='email' placeholder='Email' variant='standard'></TextField>
          <TextField multiline placeholder='Description' sx={{minHeight:'5rem'}} ></TextField>
            <Button variant='contained'>Post</Button>
        </Stack>
    </Container>

   </Box>
  )
}

export default Contactpage