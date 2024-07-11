import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Cardpage from './Cardpage'
import { useLocation, useNavigate } from 'react-router-dom'
const Detailpage = () => {
    const navigate = useNavigate()
    const location=useLocation()
    const {myitem}=location.state
    return (
        <Box>
          
            <Box>
                <Container>
                    <Box>
                        <Card  sx={{marginTop:'2rem'}}>

                            <CardMedia sx={{width:'60%',height:'auto'}} component='img' src={`http://localhost:4000/product_list/${myitem.image}`} />

                            <CardContent >
                                <Typography >
                                    <h3>   {myitem.title}</h3>
                                </Typography>
                                <Typography>
                                    <p>{myitem.description}</p>
                                </Typography>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <Button onClick={() => navigate('/')} sx={{ width: '100%', backgroundColor: 'green', color: 'white', ":hover": { backgroundColor: 'black', color: 'white' } }}> Back</Button>


                                </CardActions>
                            </CardContent>


                        </Card>
                    </Box>
                </Container>
            </Box>
           
        </Box>
    )
}

export default Detailpage