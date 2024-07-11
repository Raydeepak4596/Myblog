import { Box } from '@mui/material'
import React from 'react'
import Maincontent from './Maincontent'
import Featurepage from './Featurepage'

const Home = () => {
    return (
        <>
            <Box>
            <Featurepage />
                <Maincontent/>
            </Box>
        </>
    )
}

export default Home