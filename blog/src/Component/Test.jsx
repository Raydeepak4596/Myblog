import React, { useState } from 'react'
import {Box, Button, Container, TextField} from '@mui/material'
import axios from 'axios'
const Test = () => {
    const [data,setdata]=useState({
        title:'',
        description:'',
        image:''
    })

const handledata=(e)=>{
    const {name,value}=e.target
    setdata({...data,[name]:value})
}
const handlePhoto=(e)=>{
    setdata({...data,image:e.target.files[0]})
    console.log(e.target.files[0])
}

const submitdata=()=>{
    try {
        axios.post(`http://localhost:4000/api/vi/add`,data)
        setdata({title:'',description:''})
    } catch (error) {
        
    }
}

const handlesubmit=(e)=>{
    e.preventDefault()
    const formdat=new FormData()
    formdat.append('title',data.title)
    formdat.append('description',data.description)
    formdat.append('image',data.image)
    try {
        axios.post(`http://localhost:4000/api/vi/withimagedata`,formdat)
    } catch (error) {
        
    }


}
  return (
    <>
  <Container>
    <Box>
     <form onSubmit={handlesubmit}>
        <input type='file' accept='image/*' name='photo' onChange={handlePhoto} />
     <TextField placeholder='Title' type='text' name='title' onChange={handledata}  value={data.title} ></TextField>
        <TextField placeholder='Description' type='text' onChange={handledata} name='description' value={data.description} ></TextField>
        <Button type='submit'>Add</Button>
     </form>
    </Box>
  </Container>
    </>
  )
}

export default Test