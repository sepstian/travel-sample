import React from 'react'
import './popular.css'

import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'

// Import the Image
import img from '../../Assets/image.jpg'


const Popular = () => {
  return (
    <section className='popular section container'>
      <div className="secContainer">

        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">
              Popular Picture
            </h2>
            <p>
              From specteculars picture in the world!
            </p>
          </div>

          <div className="iconsDiv flex">
            <BsArrowLeftShort className="icon leftIcon"/>
            <BsArrowRightShort className="icon"/>
          </div>
        </div>

    <div className="mainContent grid">
    <div className="realPicture">
      <div className="pictImage">

        <img src={img} alt="Image title" />

        <div className="overlayInfo">
          <h3>Some text</h3>
          <p>
            wkwkwkwk
          </p>

          <BsArrowRightShort className='icon'/>
        </div>

      </div>

      <div className="pictFooter">
        <div className="number">
          01
        </div>

        <div className="pictText flex">
          <h6>
            Photograph
          </h6>
          <span className='flex'>
            <span className="dot">
              <BsDot className="icon"/>
            </span>
            Dot
          </span>
        </div>
      </div>
    </div>
    </div>

      </div>
    </section>
  )
}

export default Popular