import { Divider, List, ListItem, ListItemButton, ListItemIcon, Typography } from '@mui/material'
import React from 'react'
import {Logout, Person, Settings} from '@mui/icons-material'

const Rightbarmenu = () => {
  return (
    <>
    <List>
        <ListItem>
            <ListItemButton>
                <ListItemIcon>
                    <Person/>
                </ListItemIcon>
                <Typography>Profile</Typography>
            </ListItemButton>
        </ListItem>
        <Divider/>
        <ListItem>
            <ListItemButton>
                <ListItemIcon>
                    <Settings/>
                </ListItemIcon>
                <Typography>Setting</Typography>
            </ListItemButton>
        </ListItem>
        <Divider/>
        <ListItem>
            <ListItemButton>
                <ListItemIcon>
                    <Logout/>
                </ListItemIcon>
                <Typography>Logout</Typography>
            </ListItemButton>
        </ListItem>
        <Divider/>
    </List>
    </>
  )
}

export default Rightbarmenu