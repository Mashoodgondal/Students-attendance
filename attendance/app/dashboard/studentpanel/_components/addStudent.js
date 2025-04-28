

"use client";

import db from '../../../../firebaseConfig';
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';

const AddStudent = () => {
    const [rollnu, setRollnu] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleAdded = async (e) => {
        e.preventDefault(); // Prevent page reload

        if (!name.trim() || !email.trim() || !rollnu.trim()) {
            alert('Please fill out all fields.');
            return;
        }

        try {
            await addDoc(collection(db, "Students"), {
                rollnu,
                name,
                email,
            });
            console.log("Successfully added:", { rollnu, name, email });
            setRollnu('');
            setName('');
            setEmail('');
        } catch (error) {
            console.error("Error adding student:", error);
        }
    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <form onSubmit={handleAdded} className="space-y-4">
                <input
                    type="number"
                    className="border border-gray-300 rounded px-4 py-2 w-full"
                    placeholder="Enter Roll No."
                    onChange={(e) => setRollnu(e.target.value)}
                    value={rollnu}
                />
                <input
                    type="text"
                    className="border border-gray-300 rounded px-4 py-2 w-full"
                    placeholder="Enter Student Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    type="email"
                    className="border border-gray-300 rounded px-4 py-2 w-full"
                    placeholder="Enter Student Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded"
                >
                    Add Student
                </button>
            </form>
        </div>
    );
};

export default AddStudent;
