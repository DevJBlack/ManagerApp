import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getEmployees, hireEmployees } from '../../redux/reducers/employees'
import axios from 'axios'
import './Employees.scss'

const Employees = () => {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    axios.get('/api/employees').then(res => {
      setEmployees(res.data)
    })
  }, [])

  return (
    <div className='borderHome'>
      { employees.map((employee) => {
        return (
          <div className='divBorder'  key={employee.employees_id}>
            <div className='border'>
              <p>First Name: {employee.first_name}</p>
              <p>Last Name: {employee.last_name}</p>
              <p>Email: {employee.email}</p>
              <p>Phone Number: {employee.phone_number}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

let mapStateToProps = reduxState => {
  let { data: employees } = reduxState.employees
  return { employees }
}

let mapToDispatchToProps = {
  getEmployees, 
  hireEmployees
}

export default connect( mapStateToProps, (mapToDispatchToProps) )(Employees)