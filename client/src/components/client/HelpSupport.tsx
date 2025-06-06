import React from 'react'

const HelpSupport = () => {
  return (
    <div className="bg-blue-900 text-white rounded-lg p-6 mt-8 shadow flex flex-col md:flex-row items-center justify-between">
      <div>
        <h4 className="text-lg font-semibold mb-2">Need Help?</h4>
        <p className="text-sm mb-2">
          If you have questions or need assistance, our support team is here to help you.
        </p>
        <p className="text-sm">
          Email: <a href="mailto:support@qpass.com" className="underline text-blue-200">support@qpass.com</a>
        </p>
      </div>
      <div className="mt-4 md:mt-0">
        <button className="bg-white text-blue-900 font-semibold px-5 py-2 rounded hover:bg-blue-100 transition">
          Contact Support
        </button>
      </div>
    </div>
  )
}

export default HelpSupport
