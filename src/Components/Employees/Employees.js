import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import './Employees.scss'
import ChangesOfEmployees from '../ChangesOfEmployees/ChangesOfEmployees'
import { getEmployees, fireEmployees, updateEmployees } from '../../redux/reducers/employees'


const Employees = () => {
  const [employees, setEmployees] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [edit, setEdit] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: 0
  })

  useEffect(() => {
    axios.get('/api/employees').then(res => {
      setEmployees(res.data)
    })
  }, [])

  const letGoEmployee = (id) => {
    axios.delete(`/api/employees/${id}`).then(res => {
      setEmployees(res.data)
    })
  }

  const updateEmployees = (id, edit) => {
    axios.put(`/api/employees/${id}`, { edit }).then(res => {
      setEmployees(res.data)
      setEdit({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: 0
      })
      setIsEditing(false)
    })
  }

  return (
    <div className='borderHome'>
      { employees.map((employee) => {
        return (
          <div className='divBorder' key={employee.employees_id}>
            <div className='border'>
              <h4>Employee #</h4>
              <p>{employee.employees_id}</p>
              <h4>First Name</h4>
              <p>{employee.first_name}</p>
              <h4>Last Name</h4>
              <p>{employee.last_name}</p>
              <h4>Email</h4>
              <p>{employee.email}</p>
              <h4>Phone #</h4>
              <p>{employee.phone_number}</p>
            <ChangesOfEmployees 
              employee={employee.employees_id}
              letGoEmployee={letGoEmployee}
              updateEmployees={updateEmployees}
              edit={edit}
              isEditing={isEditing}
            />
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
  fireEmployees,
  updateEmployees
}

export default connect( mapStateToProps, (mapToDispatchToProps) )(Employees)