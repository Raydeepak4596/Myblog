import { Home, Settings } from '@mui/icons-material'
import { Avatar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, Typography } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'

const Leftbar = () => {
  return (
  <Box>
   
        <List >
            <ListItem>
               
               <ListItemButton>
              <Link to='/'> <Button>Home</Button></Link>
               </ListItemButton>
            </ListItem>
            
            <Divider/>

            <ListItem>
               
               <ListItemButton>
             <Link to='/about'>  <Button>About</Button></Link>
               </ListItemButton>
            </ListItem>
            
            <Divider/>

            <ListItem>
               
               <ListItemButton>
               <Typography >Project</Typography>
               </ListItemButton>
            </ListItem>
            
            <Divider/>

            <ListItem>
               
               <ListItemButton>
            <Link to='/contact'>   <Button>Contact</Button></Link>
               </ListItemButton>
            </ListItem>
            
            <Divider/>
            <ListItem>
               
               <ListItemButton>
                <ListItemIcon>
                    <Settings/>
                </ListItemIcon>
               <Typography >Setting</Typography>
               </ListItemButton>
            </ListItem>
            
            <Divider/>
            
           
           
        </List>
       
  </Box>
  )
}

export default Leftbar