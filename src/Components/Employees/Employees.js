import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import './Employees.scss'
import ChangesOfEmployees from '../ChangesOfEmployees/ChangesOfEmployees'
import { getEmployees, fireEmployees, updateEmployees } from '../../redux/reducers/employees'


const Employees = () => {
  const [employees, setEmployees] = useState([])
  // const [currentEmployee, setCurrentEmployee] = useState({})
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

  // const updateEmployees = (id, edit) => {
  //   axios.put(`/api/employees/${id}`, { edit }).then(res => {
  //         setEmployees(res.data)
  //         setIsEditing(false)
  //         setCurrentEmployee({})
  //       })
  // }
 
  const updateEmployees = (id, edit, ) => {
    axios.put(`/api/employees/${id}`, { edit }).then(res => {
      setEmployees(res.data)

      const { first_name, last_name, email, phone_number } = edit

      if(first_name === '' || last_name === '' || email === '' || phone_number === ''){
        return(
          alert('ERROR! Please add to an input field'),
          setEdit({
            first_name: 'ERROR'
          })
        )
      } else {
       alert('Info updated!');
        setEdit({
          first_name: '',
          last_name: '',
          email: '',
          phone_number: 0
        })
  
        setIsEditing(false)
  
        console.log( first_name, last_name, email, phone_number )
      }
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
              employeeName={employee.first_name}
              employeeLastName={employee.last_name}
              employeeEmail={employee.email}
              employeePhone={employee.phone_number}
              // currentEmployee={currentEmployee}
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