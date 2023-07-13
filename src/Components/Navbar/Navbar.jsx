import React, {useState} from 'react'
import './navbar.css'
import {AiFillCamera} from 'react-icons/ai'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
  
  // codeto toggle
  const [active, setActive] = useState('navBar')
  const showNav =()=>{
    setActive('navBar activeNavbar')
  }
  
  // code to remove Navbar
  const removeNav =()=>{
    setActive('navBar')
  }
  
  return (
    <section className='navBarSection'>
      <div className="header">

        <div className="logoDiv">
          <a href="#" className="logo">
            <h1 className='flex'><AiFillCamera className="icon"/>
            Dot</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">

            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Products</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Resources</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Contacts</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Blog</a>
            </li>

            <div className="headerBtns flex">
              <button className='btn loginBtn'>
                <a href="#">Login</a>
              </button>
              <button className='btn'>
                <a href="#">Sign Up</a>
              </button>
            </div>

          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon"/>
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon"/>
        </div>

      </div>
    </section>
  )
}

export default Navbar