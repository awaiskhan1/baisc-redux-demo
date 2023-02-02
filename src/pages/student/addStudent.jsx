import React, { useState } from 'react'
import { getStudentActions } from '../../store/student';

const AddStudent = () => {
    const initState = {
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        address: ''
    }
    const [ student, setStudent ] = useState(initState);

  const handleChange = (e) => {
    const { name, value } = e.target
    setStudent(prev => ({...prev, [name]: value }))
  }

  const submit = (e) => {
    e.preventDefault()
    getStudentActions().setStudent(student)
    setStudent(initState)
  }

  return (
    <div>
      <h3 className='student-title'>Add Student</h3>
      <section className='add-student'>
        <form onSubmit={submit}>
          <div>
            <label>First Name</label>
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              value={student.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              value={student.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Age</label>
            <input
              type='number'
              name='age'
              placeholder='Country'
              value={student.age}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Gender</label>
            <select name="gender" onChange={handleChange}>
                <option className='text' value="">Select Gender</option>
                <option className='text' value="male">Male</option>
                <option className='text' value="female">Female</option>
            </select>
          </div>
          <div>
            <label>Address</label>
            <input
              type='text'
              name='address'
              placeholder='Address'
              value={student.address}
              onChange={handleChange}
            />
          </div>

          <button type='submit' className='btn btn-success'>
            Submit
          </button>
        </form>
      </section>
    </div>
  )
}

export default AddStudent
