"use client"
import { FiUsers, FiUserPlus, FiDatabase } from 'react-icons/fi'

const StatsCards = ({ stats }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white shadow rounded-xl p-6 flex items-center space-x-4">
                <FiUsers className="text-blue-600 text-3xl" />
                <div>
                    <p className="text-sm text-gray-500">Total Students</p>
                    <p className="text-xl font-bold">{stats.totalStudents}</p>
                </div>
            </div>

            <div className="bg-white shadow rounded-xl p-6 flex items-center space-x-4">
                <FiUserPlus className="text-green-600 text-3xl" />
                <div>
                    <p className="text-sm text-gray-500">New Today</p>
                    <p className="text-xl font-bold">{stats.todayAdded}</p>
                </div>
            </div>

            <div className="bg-white shadow rounded-xl p-6 flex items-center space-x-4">
                <FiDatabase className="text-purple-600 text-3xl" />
                <div>
                    <p className="text-sm text-gray-500">Latest Entry</p>
                    <p className="text-xl font-bold">{stats.latestStudent}</p>
                </div>
            </div>
        </div>
    )
}

export default StatsCards
