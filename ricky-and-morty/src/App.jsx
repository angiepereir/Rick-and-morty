import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Galeria from './pages/galeria/Galeria'

import Nav from './componentes/nav/nav'
import GaleriaId from './pages/galeria/GaleriaId'

function App() {


  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/galeriaId/:id" element={<GaleriaId/>} />
        
      
      </Routes>


    </>
  )
}

export default App
