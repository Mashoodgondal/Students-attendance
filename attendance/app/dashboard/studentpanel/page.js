"use client"
import React, { useState } from 'react'

import AddStudent from './_components/addStudent'
import StudentsList from './_components/studentslist'
import UpdateStudentPage from '../updateStu/[id]/page'


const StudentPanel = () => {
    const [refresh, setRefresh] = useState(false)
    return (
        <div>

            <AddStudent onStudentAdded={() => setRefresh(!refresh)} />
            <StudentsList refresh={refresh} onDelete={() => setRefresh(!refresh)} />

        </div>
    )
}

export default StudentPanel