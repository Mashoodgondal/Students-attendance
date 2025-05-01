"use client";

import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-800 text-white pt-10 pb-6 px-6 sm:px-10 rounded-lg">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-white/10 pb-10">
                <div>
                    <h3 className="text-xl font-semibold mb-4">Attendance System</h3>
                    <p className="text-sm text-white/70">
                        A smart way to manage and track student or employee attendance — anytime, anywhere.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-white/60 text-sm">
                        <li><Link href="/" className="hover:text-white">Home</Link></li>
                        <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                        <li><Link href="/dashboard" className="hover:text-white">Dashboard</Link></li>
                        <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Technologies</h3>
                    <ul className="space-y-2 text-white/60 text-sm">
                        <li>Next.js</li>
                        <li>Tailwind CSS</li>
                        <li>Firebase / MongoDB</li>
                        <li>React Icons</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-3">Connect</h3>
                    <div className="flex space-x-4 mt-2">
                        <a href="#" className="hover:text-purple-400 text-white/70">
                            <FaGithub size={20} />
                        </a>
                        <a href="#" className="hover:text-purple-400 text-white/70">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="mailto:your@email.com" className="hover:text-purple-400 text-white/70">
                            <FaEnvelope size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="text-center text-white/50 text-sm mt-6">
                © {new Date().getFullYear()} Attendance Management System. All rights reserved.
            </div>
        </footer>
    );
}
