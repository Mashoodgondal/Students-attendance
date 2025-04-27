'use client';

import React, { useState } from 'react';
import { GoSidebarCollapse } from "react-icons/go";
import Link from 'next/link';
const SideBar = () => {
    const [isOpen, setIsOpen] = useState(true); // Sidebar is visible by default

    const openSidebar = () => {
        setIsOpen(true);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <div className="relative">

            {!isOpen && (
                <button
                    onClick={openSidebar}
                    className="fixed top-4 left-4 z-50 p-2 text-2xl text-white bg-gray-300 hover:bg-gray-400 rounded-lg shadow-lg"
                >
                    <GoSidebarCollapse />
                </button>
            )}

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-600 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <h5 className="text-base font-semibold text-gray-800 uppercase dark:text-gray-400">
                    Menu
                </h5>

                {/* Close Button inside Sidebar */}
                <button
                    onClick={closeSidebar}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                </button>

                {/* Sidebar Links */}
                <div className="py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        {[
                            { label: 'Dashboard', path: '/dashboard' },
                            { label: 'StudentsPanel', path: '/studentpanel' },
                            { label: 'About', path: '/about' },
                            { label: 'Contact-Us', path: '/contact' },
                            { label: 'Logout', path: '/logout' },
                        ].map((item) => (
                            <li key={item.label}>
                                <Link href={item.path}>
                                    <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                        <span className="ml-3">{item.label}</span>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;

