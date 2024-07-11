import { Box, Button, Container, InputBase, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Rightbar = () => {
    const[data,setdata]=useState({
        title:'',
        description:'',
        image:null
    })

    const handledata=(e)=>{
        const{name,value}=e.target
        setdata({...data,[name]:value})
    }

    const imagedata=(e)=>{
        console.log(e.target.files[0])
        setdata({...data,image:e.target.files[0]})
    }

    const formhandle=async(e)=>{
        e.preventDefault();
        const formdata=new FormData()
        formdata.append('title',data.title)
        formdata.append('description',data.description)
        formdata.append('image',data.image)
        try {
            axios.post(`http://localhost:4000/api/vi/admin/add_product`, formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            setdata({title:'',description:'',image:null})
            e.target.reset()
        
        } catch (error) {
            
        }
    }

    return (
        <>
            <form onSubmit={formhandle}>

                <Box sx={{ backgroundColor: 'blue', textAlign: 'center' }}>
                    <Typography><h1>Admin Dashboard</h1></Typography>
                </Box>
                <Container>
                    <Box >
                        <InputBase type='file' onChange={imagedata} name='image' accept='image*/'></InputBase>
                        <TextField placeholder='Enter Title' name='title' value={data.title} onChange={handledata}  sx={{ paddingLeft: '1rem', width: '100%' }}></TextField> <br />
                        <textarea multiline placeholder='Summary' value={data.description} name='description' onChange={handledata} style={{ width: '100%', marginTop: '1rem', minHeight: '15rem', paddingLeft: '1rem' }} ></textarea>
                        <Button type='submit'>Add Post</Button>
                    </Box>
                </Container>

~
            </form>
        </>
    )
}

export default Rightbar