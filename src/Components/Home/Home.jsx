import React from 'react'
import './home.css'

const Home = () => {
  return (
    <section className='home'>
      <div className="secContainer container">

        <div className="homeText">

          <h1 className="title">
            Order Your The Picture With Order Dot
          </h1>

          <p className="subTitle">
            Order to your favourite picture with respectful of the beatiful!
          </p>

          <button className='btn'>
            <a href="#">Explore Now</a>
          </button>
        </div>

        <div className="homeCard grid">
          <div className="locationDiv">
            <label htmlFor="location">Location</label>
            <input type="text" placeholder='Category Picture'/>
          </div>

          <div className="distDiv">
            <label htmlFor="distance">Location</label>
            <input type="text" placeholder='11/Meters'/>
          </div>

          <div className="priceDiv">
            <label htmlFor="price">Location</label>
            <input type="text" placeholder='$1-$10000'/>
          </div>
          <button className='btn'>
            Search
          </button>

        </div>


      </div>
    </section>
  )
}

export default Home