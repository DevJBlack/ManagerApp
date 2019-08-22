import React, { useState } from 'react'
import { connect } from 'react-redux'
import { hireEmployees } from '../../redux/reducers/employees'
import axios from 'axios'
import './NewEmployees.scss'
import NavBar from '../NavBar/NavBar'

const NewEmployees = (props) => {
  const [create, setCreate] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: 0
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setCreate({
      ...create,
      [name]: value
    })
  }

  const addEmployees = () => {
    axios.post('/api/employees', create).then(res => {
      setCreate(res.data)
      props.history.push('/')
    })
  }

  return (
    <div className='homeInput'>
      <NavBar />
      <div className='inputBlock'>
        <input
          name='first_name'
          type='text'
          placeholder='First Name'
          onChange={handleChange}
        />
        <input
          name='last_name'
          type='text'
          placeholder='Last Name'
          onChange={handleChange}
        />
        <input
          name='email'
          type='text'
          placeholder='Email '
          onChange={handleChange}
        />
        <input
          name='phone_number'
          type='text'
          placeholder='Phone Number'
          onChange={handleChange}
        />
        <div>
          <button className='btn' onClick={addEmployees}>Add Employee</button>
        </div>
      </div>
    </div>
  )
}

let mapStateToProps = reduxState => {
  let { data } = reduxState.employees
  return { data }
}

let mapDispatchToProps = {
  hireEmployees
}

export default connect(mapStateToProps, (mapDispatchToProps))(NewEmployees)