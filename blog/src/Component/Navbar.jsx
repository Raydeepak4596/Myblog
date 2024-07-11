import React, { useState } from 'react'
import { AppBar,Box,Stack,Button, IconButton, Menu , InputBase, Toolbar, Typography, styled, Drawer, List, ListItem, fabClasses, MenuItem } from '@mui/material'

import { AccountCircle, FemaleOutlined,Menu as Menuu, Home,  Settings } from '@mui/icons-material'
import Leftbar from './Leftbar'
import Rightbarmenu from './Rightbarmenu'
import { NavLink ,Link} from 'react-router-dom'
import { color } from '@mui/system'



const Navbar = () => {
    const[open,setopen]=useState(false)
    const[menuopen,setmenuopen]=useState(false)

const handleopenmenu=()=>{
    setopen(true)
}
const cl=()=>{
    setopen(false)
}

const menuopenbtn=()=>{
    setmenuopen(true)
}
const  menuclose=()=>{
    setmenuopen(false)
}

  return (
    <>
    <AppBar position='static' >
        <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
            <Box >
         <NavLink style={{color:'white',textDecoration:'none'}} to='/'>   <Typography sx={{display:{xs:'none' ,sm:'block'}}}><h3>GuideTech</h3></Typography></NavLink>
            <Menuu sx={{display:{xs:'block' ,sm:'none'}}} onClick={handleopenmenu}/>
            </Box>
            <Box flex={3} sx={{width:'30%', marginLeft:'1rem',backgroundColor:'white',borderRadius:'2rem'}}> 
                <InputBase placeholder='Search' sx={{padding:'0rem 1rem'}}/>
            </Box>
            <Box  sx={{display:{xs:'none',sm:'block'}}}>
                {/* <Typography>Home</Typography>
                <Typography>About</Typography>
                <Typography>Project</Typography>
                <Typography>Contact</Typography> */}
              <Link to='/'>  <Button sx={{color:'white'}}>Home</Button></Link>
                <Link to='/about'><Button sx={{color:'white'}}>About</Button></Link>
                <Button sx={{color:'white'}}>Project</Button>
         <Link to='/contact'>     <Button sx={{color:'white'}}>Contact</Button></Link>
         <Link to='/login'>     <Button sx={{color:'white'}}>Login</Button></Link>
             
                {/* <Mystylebutton>Home</Mystylebutton>
                <Mystylebutton>About</Mystylebutton>
                <Mystylebutton>Project</Mystylebutton>
                <Mystylebutton>Contact</Mystylebutton> */}
            </Box>
            <Box >
                <IconButton>
                    <AccountCircle onClick={menuopenbtn} />
                    <Typography onClick={menuopenbtn} sx={{color:'white' , marginLeft:'0.5rem'}}>Deepak</Typography>
                </IconButton>
            </Box>
            
        </Toolbar>
        
        </AppBar>
   
    <Drawer open={open} onClose={cl}>
        <Leftbar/>
    </Drawer>
    <Menu
       
      
        
        open={menuopen}
        onClose={menuclose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={menuclose}>Profile</MenuItem>
        <MenuItem onClick={menuclose}>My account</MenuItem>
        <MenuItem onClick={menuclose}>Logout</MenuItem>
      </Menu>
    
   
    </>
  )
}

export default Navbar