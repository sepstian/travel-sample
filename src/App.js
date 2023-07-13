import React from 'react'
import './app.css'
import About from './Components/About/About'
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Offers from './Components/Offers/Offers'
import Popular from './Components/Popular/Popular'

const App = () => {
  return (
  <>
  <Navbar/>
  <Home/>
  <Popular/>
  {/* <Offers/>
  <About/>
  <Blog/>
  <Footer/> */}

  </>
  )
}

export default App
