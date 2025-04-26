import React from 'react'
import AddStudent from './_components/addStudent'
import StudentsList from './_components/studentslist'

const StudentPanel = () => {
    return (
        <div>
            <AddStudent />
            <StudentsList />
        </div>
    )
}

export default StudentPanel