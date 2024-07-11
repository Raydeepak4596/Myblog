import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Box, Container, List, ListItem, ListItemButton, ListItemIcon, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#333', color: 'white', height: 'auto' }}>
            <Container>
                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                    <Box >
                        <List>
                            <ListItem>
                                Home
                            </ListItem>
                            <ListItem>
                                About
                            </ListItem>
                            <ListItem>
                                Contact
                            </ListItem>
                        </List>
                    </Box>
                    <Box >
                        <List>
                            <ListItem>
                                News
                            </ListItem>
                            <ListItem>
                                Blogs
                            </ListItem>
                            <ListItem>
                                Feed
                            </ListItem>
                        </List>
                    </Box>

                    <Box>
                        <List>
                            <ListItemButton >
                                <ListItemIcon>
                                    <Facebook color='primary'/>
                                    <Typography sx={{color:'white' , paddingLeft:'0.5rem'}}>Facebook</Typography>
                                </ListItemIcon>
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Instagram color='primary'/>
                                    <Typography sx={{color:'white' , paddingLeft:'0.5rem'}}>Instagram</Typography>
                                </ListItemIcon>
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Twitter color='primary'/>
                                    <Typography sx={{color:'white' , paddingLeft:'0.5rem'}}>Twitter</Typography>
                                </ListItemIcon>
                            </ListItemButton>
                        </List>
                    </Box>
                   
                </Box>
                
            </Container>
            <Box sx={{backgroundColor:'#343'}}>
            <Typography textAlign='center' sx={{marginTop:'2rem' ,padding:'0.5rem 0rem'}}>
                        Copyright@2024
                    </Typography>
            </Box>
        </Box>
    )
}

export default Footer