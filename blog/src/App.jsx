import React from 'react'
import Navbar from './Component/Navbar'
import Leftbar from './Component/Leftbar'
import Featurepage from './Component/Featurepage'
import Cardpage from './Component/Cardpage'
import Home from './Component/Home'
import Footer from './Component/Footer'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Detailpage from './Component/Detailpage'
import Contactpage from './Component/Contactpage'
import About from './Component/About'
import Test from './Component/Test'
import Login from './Component/Login'
import Register from './Component/Register'




const App = () => {
  return (
    <>
      {/* <Navbar /> */}
     
     

<Routes>
<Route path='/' exact element={<Home/>}/>
  <Route path='/detailpage/:id' element={<Detailpage/>}/>
  <Route path='/contact' element={<Contactpage/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
</Routes>

     <Footer/> 

    </>
  )
}

export default App