"use client"
import { collection, getDocs } from 'firebase/firestore'
import db from '../../../../firebaseConfig'
import React, { useEffect, useState } from 'react'

const StudentsList = () => {
    const [student, setstudent] = useState([])
    const fetchData = async () => {
        try {
            const studentData = await getDocs(collection(db, "Students"))
            const Data = studentData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            setstudent(Data)
            console.log("Runnig");

        } catch (error) {
            console.log("Error in fetching");

        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (

        <div>
            <ul>
                {student.map((student, index) => (
                    <li key={index} className="text-white">
                        {student.name}
                    </li>
                ))}
            </ul>
            <ul>
                {student.map((student, index) => (
                    <li key={index} className="text-white">
                        {student.name}
                    </li>
                ))}
            </ul>
            <ul>
                {student.map((student, index) => (
                    <li key={index} className="text-white">
                        {student.name}
                    </li>
                ))}
            </ul>
            <ul>
                {student.map((student, index) => (
                    <li key={index} className="text-white">
                        {student.name}
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default StudentsList