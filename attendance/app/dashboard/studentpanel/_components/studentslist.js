"use client"
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import db from '../../../../firebaseConfig'
import React, { useEffect, useState } from 'react'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import { useRouter } from 'next/navigation'
import { toast, Toaster } from 'react-hot-toast';

const StudentsList = ({ refresh, onDelete }) => {
    const router = useRouter();
    const [students, setStudents] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        try {
            setLoading(true)
            const studentData = await getDocs(collection(db, "Students"))
            const data = studentData.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }))
            setStudents(data)
            setLoading(false)
        } catch (err) {
            console.error("Error fetching students:", err)
            setError("Failed to load student data")
            setLoading(false)
        }
    }

    const handleEdit = (studentId) => {
        console.log("Edit student with ID:", studentId)
        router.push(`/updatestu/${studentId}`)
        // router.push(`/updatestu/124`)
        // Add your edit logic here
    }

    const handleDelete = async (studentsId) => {
        console.log(studentsId);
        // return

        try {
            await deleteDoc(doc(db, "Students", studentsId))
            toast.success("Student deleted successfully")
            onDelete()
        } catch (error) {
            console.log("Error in deleting", error);

        }

    }

    useEffect(() => {
        fetchData()

    }, [refresh])

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                <p>{error}</p>
                <button
                    onClick={fetchData}
                    className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                    Retry
                </button>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <Toaster position='top-center' />
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-600 to-purple-800 p-6">
                    <h2 className="text-2xl font-bold text-white">Students Directory</h2>

                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Roll No</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {students.map((student, index) => (
                                <tr
                                    key={student.id}
                                    className={`${index % 2 === 0 ? 'bg-gradient-to-r from-gray-100 to-gray-200' : 'bg-gradient-to-r from-gray-200 to-gray-100'} group hover:bg-blue-50 transition-colors`}
                                >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {student.rollnu}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {student.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <a href={`mailto:${student.email}`} className="text-blue-600 hover:text-blue-800">
                                            {student.email}
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <div className="flex space-x-2 transition-opacity">
                                            <button
                                                onClick={() => handleEdit(student.id)}
                                                className="text-blue-600 hover:text-blue-800 p-1 rounded-full hover:bg-blue-100 transition-colors"
                                                title="Edit"
                                            >
                                                <FiEdit className="h-4 w-4" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(student.id)}
                                                className="text-red-600 hover:text-red-800 p-1 rounded-full hover:bg-red-100 transition-colors"
                                                title="Delete"
                                            >
                                                <FiTrash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {students.length === 0 && (
                    <div className="p-6 text-center text-gray-500">
                        No students found in the database
                    </div>
                )}
            </div>
        </div>
    )
}

export default StudentsList