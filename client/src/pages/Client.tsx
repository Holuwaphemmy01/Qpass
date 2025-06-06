import React from 'react'
import Navbar from '../components/client/Navbar'
import Welcome from '../components/client/Welcome'
import ActiveSection from '../components/client/ActiveSection'
import JoinQueue from '../components/client/JoinQueue'
import HelpSupport from '../components/client/HelpSupport'
import { Footer } from '../components/client/Footer'

const Client = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen pt-24 pb-8">
        <div className="max-w-3xl mx-auto px-4 space-y-8">
          <Welcome />
          <ActiveSection />
          <JoinQueue />
          <HelpSupport />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Client
