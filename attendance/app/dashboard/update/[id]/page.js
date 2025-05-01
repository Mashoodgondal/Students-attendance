"use client";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import db from "../../../../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { toast, Toaster } from "react-hot-toast";

const UpdateStudentPage = () => {
    const { id } = useParams();
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        rollnu: ""
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const docRef = doc(db, "Students", id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const data = docSnap.data();
                    setFormData({
                        name: data.name,
                        email: data.email,
                        rollnu: data.rollnu
                    });
                } else {
                    toast.error("Student not found");
                    router.push("/dashboard");
                }
            } catch (err) {
                toast.error("Failed to load student");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchStudent();
    }, [id, router]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const docRef = doc(db, "Students", id);
            await updateDoc(docRef, {
                ...formData
            });
            toast.success("Student updated successfully!");
            setTimeout(() => {
                router.push("/dashboard/studentpanel");
            }, 1500);
        } catch (error) {
            console.error("Update error:", error);
            toast.error("Update failed");
        }
    };

    if (loading) return <p className="p-4">Loading...</p>;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <Toaster position="top-center" />
            <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6">Update Student</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Name</label>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Roll No</label>
                        <input
                            name="rollnu"
                            value={formData.rollnu}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-md px-3 py-2"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                    >
                        Update Student
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateStudentPage;