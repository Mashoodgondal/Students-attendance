"use client";

import React from "react";
// import Image from "next/image";

// import imgstud from '../../public/imgstu.jpg'
export default function SplashScreen() {
    return (
        <div className="relative pt-28 pb-8 bg-black xl:pt-40 sm:pb-10 lg:pb-12 xl:pb-24 2xl:pb-32
">
            {/* Header */}
            <header className="absolute inset-x-0 top-0 z-10 py-8 xl:py-12">
                <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-shrink-0">
                            <span className="px-4 py-1 text-white text-xl sm:text-2xl font-medium rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                                Attendance Management System
                            </span>


                        </div>
                    </div>
                </div>
            </header>


            {/* <div className="absolute inset-0">
                <Image
                    src={imgstud}
                    alt="Attendance Background"
                    fill
                    className="object-cover w-full h-full opacity-30"
                    quality={100}
                    priority
                />
            </div> */}
            <div className="absolute inset-0 overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="object-cover w-full h-full opacity-30"
                >
                    <source src="/public/vidstu.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>



            {/* Hero Content */}
            <div className="relative">
                <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                    <div className="w-full lg:w-2/3 xl:w-1/2">
                        <h1 className="font-sans text-base font-normal tracking-tight text-white text-opacity-70">
                            Simple & Smart Attendance Tracking
                        </h1>
                        <p className="mt-6 tracking-tighter text-white">
                            <span className="font-sans font-normal text-3xl sm:text-4xl lg:text-4xl">
                                Reliable Attendance
                            </span>
                            <br />
                            <span className="font-serif italic font-normal text-3xl sm:text-4xl lg:text-5xl">
                                Anytime. Anywhere.
                            </span>
                        </p>
                        <p className="mt-12 font-sans text-base font-normal leading-7 text-white text-opacity-70">
                            Automate and streamline your student or employee attendance process
                            with our modern and intuitive system — real-time logs, analytics,
                            and reports in a click.
                        </p>
                        <p className="mt-8 font-sans text-xl font-normal text-white">
                            Get started for free today!
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap items-center mt-5 gap-3 sm:gap-4">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-5 py-2 text-base sm:text-lg font-semibold transition-all duration-200 border-2 border-transparent rounded-full bg-white text-black hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary"
                            >
                                Start Tracking
                            </a>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
