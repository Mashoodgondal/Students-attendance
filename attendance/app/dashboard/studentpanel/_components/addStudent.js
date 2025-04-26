
"use client";

import db from '../../../../firebaseConfig';
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';

const AddStudent = () => {
    const [name, setName] = useState(''); // Should be a string

    const handleAdded = async (e) => {
        e.preventDefault(); // Prevent page reload

        if (!name.trim()) {
            alert('Please enter a valid name.');
            return;
        }

        try {
            await addDoc(collection(db, "Students"), { name });
            console.log("Successfully added:", name);

            setName(''); // Clear the input after adding
        } catch (error) {
            console.log("Error in adding:", error);
        }
    };

    return (
        <div className="p-4 max-w-md mx-auto">
            <form onSubmit={handleAdded}>
                <input
                    type="text"
                    className="border border-gray-400 rounded px-4 py-2 w-full"
                    placeholder="Enter student name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                {/* <input
                    type="text"
                    className="border border-gray-400 rounded px-4 py-2 w-full"
                    placeholder="Enter student name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    type="text"
                    className="border border-gray-400 rounded px-4 py-2 w-full"
                    placeholder="Enter student name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                /> */}
                <button
                    type="submit"
                    className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded"
                >
                    Add Student
                </button>
            </form>
        </div>
    );
};

export default AddStudent;
