import React, { useState } from 'react'

const availableInstitutions = [
  { id: 1, name: 'Main Library', location: 'North Campus', queues: [
    { id: 1, name: 'Library Queue', description: 'Join the queue for library services.' }
  ]},
  { id: 2, name: 'Cafeteria', location: 'Central Block', queues: [
    { id: 2, name: 'Cafeteria Queue', description: 'Join the queue for cafeteria meals.' }
  ]},
  { id: 3, name: 'Admin Office', location: 'East Wing', queues: [
    { id: 3, name: 'Admin Office Queue', description: 'Join the queue for administrative services.' }
  ]},
]

const JoinQueue = () => {
  const [search, setSearch] = useState('')
  const [selectedInstitution, setSelectedInstitution] = useState<number | null>(null)
  const [selectedQueue, setSelectedQueue] = useState<number | null>(null)
  const [joined, setJoined] = useState(false)

  const filteredInstitutions = availableInstitutions.filter(inst =>
    inst.name.toLowerCase().includes(search.toLowerCase()) ||
    inst.location.toLowerCase().includes(search.toLowerCase())
  )

  const handleJoin = () => {
    if (selectedQueue !== null) {
      setJoined(true)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h3 className="text-xl font-semibold text-blue-700 mb-4">Join a Queue</h3>
      {joined ? (
        <div className="text-green-600 font-medium">
          You have successfully joined the queue!
        </div>
      ) : (
        <>
          <p className="mb-4 text-gray-700">Search for an institution by name or location:</p>
          <input
            type="text"
            placeholder="e.g. Library, North Campus"
            value={search}
            onChange={e => {
              setSearch(e.target.value)
              setSelectedInstitution(null)
              setSelectedQueue(null)
            }}
            className="w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
          {search && (
            <div className="space-y-3 mb-4">
              {filteredInstitutions.length === 0 ? (
                <div className="text-gray-500">No institutions found.</div>
              ) : (
                filteredInstitutions.map(inst => (
                  <label
                    key={inst.id}
                    className={`flex items-center p-3 border rounded cursor-pointer transition-colors ${
                      selectedInstitution === inst.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                    }`}
                  >
                    <input
                      type="radio"
                      name="institution"
                      value={inst.id}
                      checked={selectedInstitution === inst.id}
                      onChange={() => {
                        setSelectedInstitution(inst.id)
                        setSelectedQueue(null)
                      }}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium text-gray-800">{inst.name}</div>
                      <div className="text-sm text-gray-500">{inst.location}</div>
                    </div>
                  </label>
                ))
              )}
            </div>
          )}
          {selectedInstitution && (
            <>
              <p className="mb-2 text-gray-700">Select a queue to join:</p>
              <div className="space-y-3">
                {availableInstitutions.find(i => i.id === selectedInstitution)?.queues.map(queue => (
                  <label
                    key={queue.id}
                    className={`flex items-center p-3 border rounded cursor-pointer transition-colors ${
                      selectedQueue === queue.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                    }`}
                  >
                    <input
                      type="radio"
                      name="queue"
                      value={queue.id}
                      checked={selectedQueue === queue.id}
                      onChange={() => setSelectedQueue(queue.id)}
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium text-gray-800">{queue.name}</div>
                      <div className="text-sm text-gray-500">{queue.description}</div>
                    </div>
                  </label>
                ))}
              </div>
              <button
                className="mt-4 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                onClick={handleJoin}
                disabled={selectedQueue === null}
              >
                Join Queue
              </button>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default JoinQueue
