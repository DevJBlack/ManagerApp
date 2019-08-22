import React, { useState } from 'react'

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

  console.log(props.edit)
  console.log(edit)
  return (
    <div>
      { isEditing ? 
        <div>
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
          <button onClick={() => props.updateEmployees(props.employee, edit)}>Update</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
        </div>
        :
        <div>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => props.letGoEmployee(props.employee)}>Let Go</button>
        </div>
      }
    </div>
  )
}



export default ChangesOfEmployees