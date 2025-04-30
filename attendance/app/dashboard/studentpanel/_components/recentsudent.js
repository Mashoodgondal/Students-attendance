"use client"
const RecentStudents = ({ students }) => {
    return (
        <div className="bg-white shadow rounded-xl p-6 mt-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Students</h3>
            <ul className="divide-y divide-gray-200">
                {students.map(student => (
                    <li key={student.id} className="py-3 flex justify-between items-center">
                        <div>
                            <p className="font-medium text-gray-800">{student.name}</p>
                            <p className="text-sm text-gray-500">{student.email}</p>
                        </div>
                        <span className="text-sm text-gray-400">{new Date(student.createdAt).toLocaleDateString()}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RecentStudents
