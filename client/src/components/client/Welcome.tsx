import React from 'react'

const Welcome = () => {
  return (
    <div className="bg-blue-50 rounded-lg p-6 mb-6 shadow flex flex-col md:flex-row items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-blue-700 mb-2">Welcome to Qpass!</h2>
        <p className="text-gray-700">
          Manage your queues efficiently and stay updated on your turn. Join a queue or view your active queues below.
        </p>
      </div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="Welcome"
        className="w-20 h-20 mt-4 md:mt-0 md:ml-6"
      />
    </div>
  )
}

export default Welcome
