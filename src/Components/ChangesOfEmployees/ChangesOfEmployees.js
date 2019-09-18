import React, { useState, useEffect } from 'react'
import './ChangesOfEmployees.scss'

const ChangesOfEmployees = (props) => {
 
  const [isEditing, setIsEditing] = useState(false)
  const [edit, setEdit] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: 0
  })
  // useEffect((prevProps) => {
  //   if(prevProps.currentEmployee.first_name !== props.currentEmployee.first_name){
  //     setEdit({
  //       first_name: props.currentEmployee.first_name,
  //       last_name: props.currentEmployee.last_name,
  //       email: props.currentEmployee.email,
  //       phone_number: props.currentEmployee.phone_number
  //     })
  //   }
  // }, [props.currentEmployee.first_name, props.currentEmployee.last_name, props.currentEmployee.email, props.currentEmployee.phone_number])
  
  // console.log(props.currentEmployee.first_name)

  useEffect(() => {
    setEdit({
      first_name: '',
      last_name: '',
      email: '',
      phone_number: 0
    })
  }, [])

  const handleChange = (e) => {
    const {name, value} = e.target
    setEdit({
      ...edit,
      [name]: value
    })
  }

  // const updateEmployees = () => {

  //   const { id } = props.employee
  //   const { first_name, last_name, email, phone_number } = edit
  //   let updEmployee = {
  //     first_name,
  //     last_name,
  //     email,
  //     phone_number
  //   }
  //   props.updateEmployees(id, updEmployee)

  //   setEdit({
  //     first_name: '',
  //     last_name: '',
  //     email: '',
  //     phone_number: 0
  //   })
  // }


  return (
    <div className='borderHome'>
        { isEditing ? 
            <div className='inputFields'>
            <div className='buttonBox'>
              <button type='submit' className='update Button' onClick={() => props.updateEmployees(props.employee, edit)}>Update</button>
              <button className='cancel Button' onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
              <input
                name='first_name'
                type='text'
                placeholder='First Name'
                onChange={handleChange}
                value={edit.first_name}
              />
              <input
                name='last_name'
                type='text'
                placeholder='Last Name'
                onChange={handleChange}
                value={edit.last_name}
                />
              <input
                name='email'
                type='text'
                placeholder='Email '
                onChange={handleChange}
                value={edit.email}
                />
              <input
                name='phone_number'
                type='text'
                placeholder='Phone Number'
                onChange={handleChange}
                value={edit.phone_number}
                />
            </div>
          :
          <div className='buttonBox'>
            <button className='edit Button' onClick={() => setIsEditing(true)}>Edit</button>
            <button className='delete Button' onClick={() => props.letGoEmployee(props.employee)}>Let Go</button>
          </div>
        }
    </div>
  )
}



export default ChangesOfEmployees