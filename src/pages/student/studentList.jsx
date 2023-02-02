import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectStudents } from '../../store/student';
import './student.css';

const StudentList = () => {

  const list = useSelector(selectStudents) || [];

  return (
    <div>
      <h3 className='student-title'>Enroled Students</h3>
      <section className='student-list'>
        {list.length > 0 ? 
        (<div className='student-list-wrapper'>
          {list.map((l, i) => (
            <div key={i+l.firstName} className='student-list-box'>
              <div className='student-list-profile'>
                {l.firstName[0]}{l.lastName[0]}
              </div>
              <div className='student-list-description'>
                <h5>{l.firstName} {l.lastName}</h5>
                <p>{l.address}</p>
              </div>
            </div>
          )) }
        </div>) : 
        (<h4><Link to="addStudent">No Student Found! go to add Page </Link></h4>)}
      </section>
    </div>
  )
}

export default StudentList
