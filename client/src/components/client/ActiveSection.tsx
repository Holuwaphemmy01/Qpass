import React from 'react'

const ActiveSection = () => {
  // Example data, replace with real queue data as needed
  const activeQueues = [
    {
      id: 1,
      name: 'Library Queue',
      position: 3,
      status: 'Waiting',
      time: '10:30 AM',
    },
    {
      id: 2,
      name: 'Cafeteria Queue',
      position: 1,
      status: 'Almost Your Turn',
      time: '10:45 AM',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h3 className="text-xl font-semibold text-blue-700 mb-4">Your Active Queues</h3>
      {activeQueues.length === 0 ? (
        <p className="text-gray-500">You are not in any active queues.</p>
      ) : (
        <ul className="space-y-4">
          {activeQueues.map(queue => (
            <li key={queue.id} className="flex flex-col md:flex-row md:items-center md:justify-between border-b pb-3 last:border-b-0">
              <div>
                <span className="font-medium text-gray-800">{queue.name}</span>
                <span className="ml-2 text-sm text-gray-500">({queue.status})</span>
              </div>
              <div className="flex items-center mt-2 md:mt-0">
                <span className="text-sm text-gray-600 mr-4">Position: <span className="font-bold">{queue.position}</span></span>
                <span className="text-sm text-gray-600">Joined at: {queue.time}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ActiveSection
