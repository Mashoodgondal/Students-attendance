"use client";

import Link from "next/link";
import React from "react";

export default function SplashScreen() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">

            {/* Glowing Particles */}
            <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 top-10 left-10 animate-pulse" />
            <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-2xl opacity-20 bottom-10 right-10 animate-ping" />

            {/* Header */}
            <header className="absolute top-0 w-full px-6 py-6 flex justify-center z-10">
                <div className="text-xl sm:text-3xl font-bold px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white shadow-md transition-all duration-300 hover:scale-105">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300">
                        Attendance Management System
                    </span>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-3xl text-center mt-28 sm:mt-40 z-10 animate-fade-in">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
                    Smart Attendance Tracking System
                </h1>

                <p className="text-lg sm:text-2xl text-white/80">
                    Reliable Attendance <br />
                    <span className="italic font-light text-3xl sm:text-4xl">
                        Anytime. Anywhere.
                    </span>
                </p>

                <p className="mt-6 text-base sm:text-lg text-white/70 leading-relaxed">
                    Automate your attendance process with real-time insights, analytics, and secure logs. Designed for modern institutions.
                </p>

                <p className="mt-6 text-lg text-white font-medium">
                    Get started today — it's free!
                </p>


                <div className=" mt-8 "
                >
                    <Link href="/dashboard">


                        <button className=" bg-purple-600 mb-8  px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg hover:from-purple-600 hover:to-indigo-600 transition-transform duration-300 hover:scale-105">

                            Get started
                        </button>
                    </Link>
                </div>
            </main>
        </div>
    );
}
