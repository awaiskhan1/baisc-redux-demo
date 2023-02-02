import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import './student.css';

function Student() {



  return (
    <div>
      <h2 className='student-title'>Select Student Page </h2>
      <section className='student-menu'>
        <div className="tabs_wrap">
            <ul>
                <li  className='active'>
                    <Link to="addStudent">Add Student</Link>
                </li>
                <li >
                    <Link to="allStudent">Student List</Link>
                </li>
            </ul>
        </div>
      </section>
      <Outlet />
    </div>
  )
}

export default Student
