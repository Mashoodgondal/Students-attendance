'use client';

import { SignedOut, SignedIn, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-transparent shadow-sm">

            <div className="text-5xl font-bold text-blue-600">
                <Link href="/dashboard"><span className="text-cyan-400">S</span><span className="text-purple-500">M</span><span className="text-cyan-400">S</span></Link>
            </div>


            <div className="flex items-center gap-4">

                <SignedOut>
                    <SignUpButton mode="modal">
                        <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-500 hover:text-white">
                            Sign Up
                        </button>
                    </SignUpButton>

                    <SignInButton mode="modal">
                        <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-gray-100 hover:border hover:border-blue-500 hover:text-gray-600">
                            Sign In
                        </button>
                    </SignInButton>
                </SignedOut>


                <SignedIn>
                    <UserButton afterSignOutUrl="/dashboard" />
                </SignedIn>
            </div>
        </header>
    );
};

export default Header;
