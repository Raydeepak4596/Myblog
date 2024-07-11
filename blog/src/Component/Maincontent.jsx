import { Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Cardpage from './Cardpage'
import axios from 'axios'

const Maincontent = () => {
    const [data, setdata] = useState('')

    const callda = async () => {
        const d = await axios.get(`http://localhost:4000/api/vi/datacall`)
        setdata(d.data)
        
    }
    useEffect(() => {
        callda()
    }, [])
    return (
        <>
            <Container sx={{ marginTop: '2rem' }}>
                <Grid container rowSpacing={4} columnSpacing={1}>

                    {data && data.map((item) => (
                        <Grid item xs={12} sm={4} md={3} >
                            <Cardpage i={item}/>
                        </Grid>
                    ))}






                </Grid>
            </Container>
        </>
    )
}

export default Maincontent