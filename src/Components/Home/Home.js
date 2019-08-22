import React from 'react'
import './Home.scss'
import NavBar from '../NavBar/NavBar'
import Employees from '../Employees/Employees'
import { Link } from 'react-router-dom'



const Home = () => {
  return (
    <div className='home'>
      <NavBar/>
      <div className='home-block'>
        <Employees />
      </div>
      <Link to='/newemployees'><button className='btn move'>New Employee</button></Link>
    </div>
  )
}

export default Home