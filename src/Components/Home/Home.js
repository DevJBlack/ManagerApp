import React from 'react'
import './Home.scss'
import NavBar from '../NavBar/NavBar'
import Employees from '../Employees/Employees'


const Home = () => {
  return (
    <div className='home'>
      <NavBar/>
      <div className='home-block'>
        <Employees />
      </div>
    </div>
  )
}

export default Home