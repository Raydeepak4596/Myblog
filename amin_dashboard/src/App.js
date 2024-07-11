import React from 'react'
import Dashboard from './Dashboard/Dashboard'
import {Routes,Route} from 'react-router-dom'
import Totalpost from './Dashboard/Totalpost'
const App = () => {
  return (
    <>
    
    {/* <Dashboard/> */}

    <Routes>
     <Route path='/*' element={<Dashboard/>}/>
    </Routes>
    </>
  )
}

export default App