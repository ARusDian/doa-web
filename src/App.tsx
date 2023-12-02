<<<<<<< Updated upstream
=======
import Home from './pages/Home';
import JuzAmma from './pages/juz-amma';
import DoaList from './pages/doa/DoaList';
import DetailSurah from './pages/juz-amma/detail';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
>>>>>>> Stashed changes

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Service from './components/Service'
import About from './components/About'
import Footer from './components/Footer'
import DoaList from './components/DoaList';
import JuzAmma from './pages/juz-amma'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <DoaList />
      <Service/>
      <About/>
      <Footer/>
      {/* <JuzAmma/> */}
    </>
  )
}

export default App
