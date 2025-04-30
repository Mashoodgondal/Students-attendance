
"use client"
import React, { useEffect, useState } from 'react'
import { collection, getDocs, query, orderBy, limit, where } from 'firebase/firestore'
import db from '../../firebaseConfig'
import StatsCards from '../dashboard/studentpanel/_components/startcard'
import RecentStudents from '../dashboard/studentpanel/_components/recentsudent'

const DashboardPage = () => {
    const [students, setStudents] = useState([])

    useEffect(() => {
        const fetchStudents = async () => {
            const snapshot = await getDocs(query(collection(db, 'Students'), orderBy('createdAt', 'desc')))
            const data = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
            setStudents(data)
        }

        fetchStudents()
    }, [])

    const today = new Date().toISOString().split('T')[0]
    const todayAdded = students.filter(s => s.createdAt?.startsWith(today)).length

    const stats = {
        totalStudents: students.length,
        todayAdded,
        latestStudent: students[0]?.name || 'N/A',
    }

    return (
        <main className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <StatsCards stats={stats} />
            <RecentStudents students={students.slice(0, 5)} />
        </main>
    )
}

export default DashboardPage
