

'use client';

import React, { useState } from 'react';
import { FaAngleRight } from "react-icons/fa";
import {
    GoHome,
    GoPeople,
    GoInfo,
    GoMail,
    GoSignOut,

} from "react-icons/go";
import Link from 'next/link';

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const navItems = [
        { label: 'Dashboard', path: '/dashboard', icon: <GoHome className="w-5 h-5" /> },
        { label: 'Students Panel', path: '/dashboard/studentpanel', icon: <GoPeople className="w-5 h-5" /> },
        { label: 'About', path: '/about', icon: <GoInfo className="w-5 h-5" /> },
        { label: 'Contact Us', path: '/contact', icon: <GoMail className="w-5 h-5" /> },
        { label: 'Logout', path: '/logout', icon: <GoSignOut className="w-5 h-5" /> },
    ];

    return (
        <div className=" mt-20">
            {/* Toggle Button */}
            <button
                onClick={toggleSidebar}
                className={`fixed top-4 z-50 p-2 text-xl text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl ${isOpen ? 'left-64 ml-2' : 'left-4'}`}
            >
                <FaAngleRight className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-0 opacity-0'}`}>
                <div className={`h-full bg-gradient-to-b from-blue-400 to-blue-600 rounded-xl shadow-xl overflow-hidden ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="p-4">
                        <h5 className="text-xl font-bold text-white uppercase tracking-wider flex items-center">
                            <span className="bg-white text-blue-600 p-2 rounded-lg mr-3">
                                <GoHome className="w-5 h-5" />
                            </span>
                            Navigation
                        </h5>

                        {/* Sidebar Links */}
                        <div className="py-6 overflow-y-auto">
                            <ul className="space-y-2">
                                {navItems.map((item) => (
                                    <li key={item.label}>
                                        <Link href={item.path}>
                                            <div className="flex items-center p-3 text-white rounded-lg transition-all duration-200 hover:bg-white/20 group">
                                                <span className="text-white/80 group-hover:text-white">
                                                    {item.icon}
                                                </span>
                                                <span className="ml-3 font-medium group-hover:translate-x-1 transition-transform">
                                                    {item.label}
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/10 text-white/70 text-sm text-center">
                        © {new Date().getFullYear()} Your Brand
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;