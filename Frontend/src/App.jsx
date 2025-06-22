import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'

import NavBar from './Components/Navbar'

import { Footer } from './Components/Footer'
import ResourceHub from './Pages/ResourceHub'
import StudyMaterials from './Pages/StudyMaterials.jsx'
import RoadmapPage from './Pages/RoadmapPage.jsx'
import AddResource from './Pages/AddResource.jsx'
import AdminDashboard from './Pages/AdminDashboard.jsx'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/resource" element={<ResourceHub />} />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/study" element={<StudyMaterials />} />
          <Route path="/AddData" element={<AddResource />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App