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
            console.log(Data);

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
                <h2>here are list of students</h2>
                {student.map((data, index) => {
                    return <li key={index}>
                        {data?.name}
                    </li>
                })}
            </ul>

        </div>

    )
}

export default StudentsList


// "use client"
// import { collection, getDocs } from 'firebase/firestore'
// import db from '../../../../firebaseConfig'
// import React, { useEffect, useState } from 'react'

// const StudentsList = () => {
//     const [student, setstudent] = useState([])

//     const fetchData = async () => {
//         try {
//             const querySnapshot = await getDocs(collection(db, "Students"));
//             const Data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
//             setstudent(Data);
//             console.log("Fetched Students: ", Data);
//         } catch (error) {
//             console.log("Error in fetching", error);
//         }
//     }

//     useEffect(() => {
//         fetchData()
//     }, [])

//     return (
//         <div>
//             <h3>students list</h3>
//             {student.map((student, index) => {
//                 console.log(student);
//                 return (
//                     <li key={student.id} className="text-white">
//                         {student.name}
//                     </li>
//                 )
//             })}

//         </div>
//     )
// }

// export default StudentsList
