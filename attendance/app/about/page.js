"use client";

import React from "react";

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 text-white px-6 py-20 flex flex-col items-center justify-center">
            <div className="max-w-4xl text-center">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                    About Our System
                </h2>

                <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8">
                    Our Attendance Management System is designed to make attendance tracking simple, accurate, and efficient for schools, colleges, and organizations. Built with modern technology, it helps institutions automate their attendance process while ensuring transparency and real-time analytics.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left mt-10">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2"> Our Mission</h3>
                        <p className="text-white/70">
                            To empower educators and businesses with smart tools that reduce manual effort and increase reliability in attendance logging.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-2"> Key Features</h3>
                        <ul className="list-disc pl-5 text-white/70 space-y-1">
                            <li>Real-time attendance logging</li>
                            <li>Secure cloud data management</li>
                            <li>Dashboard with analytics & reports</li>
                            <li>User-friendly interface</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-2"> Vision</h3>
                        <p className="text-white/70">
                            We envision a future where attendance tracking is automated, intelligent, and insightful for all organizations, large or small.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-2"> Technology</h3>
                        <p className="text-white/70">
                            Powered by modern web frameworks like Next.js, Tailwind CSS, and Firebase/MongoDB, our system is reliable, scalable, and secure.
                        </p>
                    </div>
                </div>

                <p className="mt-12 text-white/80 text-lg">
                    Thank you for choosing our system. Together, we’re making attendance smarter.
                </p>
            </div>
        </div>
    );
}
