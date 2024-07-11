import { Divider, List, ListItem } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Totalpost = () => {
  const[data,setdata]=useState('')
  const callapi=async()=>{
    try {
     const d= await axios.get(`http://localhost:4000/api/vi/totalpost`)
      setdata(d.data)
    } catch (error) {
      
    }
  }
  useEffect(()=>{
    callapi()
  },[])
  return (
    <>
    <List>
     {data && data.map((e,index)=>(
      <>

<ListItem>
 
<h2>{e.title}</h2>
</ListItem>
<Divider/>
      </>
     ))}
    </List>
    </>
  )
}

export default Totalpost