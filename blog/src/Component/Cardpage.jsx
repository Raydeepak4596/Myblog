import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link ,NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Cardpage = (props) => {
  const navigate = useNavigate()
  const[data,setdata]=useState('')


  const navg=()=>{
    navigate(`/detailpage/${props.i._id}`,{state:{myitem:props.i}})
  }

  return (
    <Container>
    <Card sx={{ maxHeight:'40%',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.08)',

        },
      }}>

        <CardMedia sx={{maxHeight:'15rem' , width:'100%'}} component='img' src={`http://localhost:4000/product_list/${props.i.image}`}/>

        <CardContent >
          <Typography >
            <h3>  {props.i.title}</h3>
          </Typography>
          <Typography>
            <p>{props.i.description}</p>
          </Typography>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button onClick={navg} sx={{ width: '100%', backgroundColor: 'green', color: 'white', ":hover": { backgroundColor: 'black', color: 'white' } }}> Read</Button>


          </CardActions>
        </CardContent>


      </Card>

    </Container>







    
  )
}

export default Cardpage