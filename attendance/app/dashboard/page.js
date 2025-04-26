"use client"
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Dashboard = () => {
    return (
        <div>
            <h2>Here is a user button to check authentication</h2>

            <UserButton />
        </div>
    )
}

export default Dashboard
