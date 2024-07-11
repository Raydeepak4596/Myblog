import { Box, Stack } from '@mui/material'
import React from 'react'
import Leftbar from './Leftbar'
import Rightbar from './Rightbar'
import {Routes,Route} from 'react-router-dom'
import Totalpost from './Totalpost'

const Dashboard = () => {
    return (
        <>
            <Stack direction='row' sx={{ backgroundColor: 'lightblue' }} justifyContent='space-between'>
            <Box>
                <Leftbar />
            </Box>
            <Box flex={4}>
                <Routes>
                    <Route path="/" element={<Rightbar />} />
                    <Route path="/totalpost" element={<Totalpost />} />
                </Routes>
            </Box>
        </Stack>
        </>
    )
}

export default Dashboard