import { Box, Button, Container, Divider, InputBase, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    const [data, setdata] = useState({
        name: '',
        username: '',
        password: '',
        confirm_password: ''
    })

    const handlechange = (e) => {
        const { name, value } = e.target
        setdata({ ...data, [name]: value })

    }

    const submitdata = (i) => {
        i.preventDefault()
        try {
            if (data.password == data.confirm_password) {
                const myuser = {
                    name: data.name,
                    username: data.username,
                    password: data.password
                }
                const p = axios.post(`http://localhost:4000/api/vi/user`, myuser)
                
                 console.log(p.data.message)
                    setdata({ name: '', username: '', password: '', confirm_password: '' })

               
            }
            else {
                alert('password not match')
            }

        } catch (error) {

        }
    }

    return (
        <>
            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Box sx={{ height: 'auto', width: '30rem', padding: '2rem' }}>
                    <Box sx={{ backgroundColor: 'blue', width: '100%', color: 'white', textAlign: 'center' }}>   <Typography ><h1>Register</h1></Typography></Box>
                    <Divider />
                    <form onSubmit={submitdata}>
                        <TextField placeholder='Name' onChange={handlechange} value={data.name} name='name' variant='standard' sx={{ padding: '0.5rem 1rem', width: '100%' }} /><br />
                        <TextField onChange={handlechange} variant='standard' value={data.username} name='username' placeholder='Username' sx={{ padding: '0.5rem 1rem', width: '100%' }} /><br />
                        <TextField onChange={handlechange} name='password' value={data.password} variant='standard' placeholder='Password' sx={{ padding: '0.5rem 1rem', width: '100%' }} /><br />
                        <TextField onChange={handlechange} name='confirm_password' value={data.confirm_password} variant='standard' placeholder='Confirm Password' sx={{ padding: '0.5rem 1rem', width: '100%' }} /><br />
                        <Button type='submit'>Submit</Button>
                        <Divider />
                        <Typography sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem', fontSize: '1.5rem' }} onClick={() => navigate('/login')}>Login</Typography>
                    </form>
                </Box>

            </Container>
        </>
    )
}

export default Register