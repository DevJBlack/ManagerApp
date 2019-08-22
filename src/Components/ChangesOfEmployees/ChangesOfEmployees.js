import React, { useState } from 'react'
import './ChangesOfEmployees.scss'

const ChangesOfEmployees = (props) => {
 
  const [isEditing, setIsEditing] = useState(false)
  const [edit, setEdit] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: 0
  })


  const handleChange = (e) => {
    const {name, value} = e.target
    setEdit({
      ...edit,
      [name]: value
    })
  }

  return (
    <div className='borderHome'>
      { isEditing ? 
          <div className='inputFields'>
          <div className='buttonBox'>
            <button className='update Button' onClick={() => props.updateEmployees(props.employee, edit)}>Update</button>
            <button className='cancel Button' onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
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