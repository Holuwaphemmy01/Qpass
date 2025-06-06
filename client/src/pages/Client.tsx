import React from 'react'
import Navbar from '../components/client/Navbar'
import Welcome from '../components/client/Welcome'
import ActiveSection from '../components/client/ActiveSection'
import JoinQueue from '../components/client/JoinQueue'

const Client = () => {
  return (
    <>
     <Navbar/> 
     <Welcome/>
     <ActiveSection/>
     <JoinQueue/>
     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Client Dashboard</h1>
      <p className="text-lg text-gray-600">This is the client dashboard where you can manage your queues.</p>
    </div>
    </>
  )
}

export default Client
