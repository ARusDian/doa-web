
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
