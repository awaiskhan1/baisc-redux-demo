import React, { lazy } from 'react';

const StudentPage = lazy(() => import('../../pages/student'));
const AddStudent = lazy(() => import('../../pages/student/addStudent'));
const AllStudent = lazy(() => import('../../pages/student/studentList'));

export const STUDENT_ROUTES = [
    {
        path: 'student',
        element: <StudentPage />,
        children: [
        {
          path: "addStudent",
          element: <AddStudent />,
        },
        { path: "allStudent", element: <AllStudent /> },
      ],
    },
]