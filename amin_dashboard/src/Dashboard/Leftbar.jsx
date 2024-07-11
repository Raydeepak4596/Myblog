import { Avatar, Box, Divider, List, ListItem, ListItemButton, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Leftbar = () => {
  return (
    <>
    <Box>
    <List sx={{textAlign:'center' ,borderRight:'1px solid black'}}>
        <Avatar src='https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg

'/>
       <Link to='/'> <Typography>Deepak</Typography></Link>
        <Divider/>
        <ListItemButton>
            <Typography>Profile</Typography>

        </ListItemButton>
        <Divider/>
      
          <ListItemButton>
         <Link to='/totalpost'> <Typography>Add Post</Typography></Link>
          </ListItemButton>
           
       
        <Divider/>
        <ListItemButton>
            <Typography>Profile</Typography>
           
        </ListItemButton>
        <Divider/>
      

    </List>

    </Box>
    </>
  )
}

export default Leftbar