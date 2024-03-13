
import { Route, Routes } from 'react-router-dom'
import './App.css'
import BasicNav from './components/Navbar/Navbar'
import Home from './Pages/Home'
import Properties from './Pages/Properties'
import P_Datails from './Pages/P_Datails'
import Contact_Us from './Pages/Contact_Us'
import Top from './components/Top/Top'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <>
      <BasicNav />
      <Top />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/properties' element={<Properties />} />
        <Route path='/datails' element={<P_Datails />} />
        <Route path='/contact' element={<Contact_Us />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
