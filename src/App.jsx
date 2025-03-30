import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import About from './Components/About'
import Adminpanel from './Components/Adminpanel'
import Protected from './Components/Protected'
import AdminCars from './Pages/AdminCars'
import CarDetail from './Components/CarDetail'
import CarDetails from './Components/CarDetails'
import CarForm from './Components/Detailform'
import Allgetcars from './Components/Allgetcars'
import Wanna from './Components/Wanna'
const App = () => {
  return (
    <Router>
      <Routes>
    
        <Route path='/' element={ <Home />} />
        <Route path="/car/:id" element={<CarDetail />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/getcars' element={ <AdminCars />}/>
        <Route path='/addcars' element={<CarForm/>}/>
        <Route path="/adminpanel" element={<Protected Component={Adminpanel} />} /> 
        <Route path='/allgetcars' element={ <Allgetcars/> }/> 
        <Route path="/wannasell" element={<Wanna/>} />
        <Route path="/car-details/:id" element={<CarDetails />} />
      </Routes>
    </Router>
  )
}

export default App 