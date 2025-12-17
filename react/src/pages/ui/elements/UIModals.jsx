import React, { useState } from 'react';
import { ChevronRight, Home, X } from 'lucide-react';

export default function UIModals() {
  const [openModal, setOpenModal] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold =">Modals</h1>
          <nav className="flex items-center space-x-2 text-gray-400">
            <Home className="w-5 h-5" />
            <ChevronRight className="w-4 h-4" />
            <span>UI Kit</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900">Modals</span>
          </nav>
        </div>
      </div>

      {/* Modals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Modal */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Basic Modal</h3>
          <button
            onClick={() => setOpenModal('basic')}
            className="bg-blue-600 text-slate-900 px-4 py-2 rounded font-semibold hover:bg-blue-700 transition-all duration-200"
          >
            Open Modal
          </button>
        </div>

        {/* Alert Modal */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Alert Modal</h3>
          <button
            onClick={() => setOpenModal('alert')}
            className="bg-red-600 text-slate-900 px-4 py-2 rounded font-semibold hover:bg-red-700 transition-all duration-200"
          >
            Show Alert
          </button>
        </div>

        {/* Confirmation Modal */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Confirmation Modal</h3>
          <button
            onClick={() => setOpenModal('confirm')}
            className="bg-yellow-600 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-700 transition-all duration-200"
          >
            Confirm Action
          </button>
        </div>

        {/* Form Modal */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Form Modal</h3>
          <button
            onClick={() => setOpenModal('form')}
            className="bg-green-600 text-slate-900 px-4 py-2 rounded font-semibold hover:bg-green-700 transition-all duration-200"
          >
            Open Form
          </button>
        </div>

        {/* Scrollable Modal */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Scrollable Modal</h3>
          <button
            onClick={() => setOpenModal('scroll')}
            className="bg-purple-600 text-slate-900 px-4 py-2 rounded font-semibold hover:bg-purple-700 transition-all duration-200"
          >
            Long Content
          </button>
        </div>

        {/* Centered Modal */}
        <div className="backdrop-blur-xl bg-white/10 border border-gray-300 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
          <h3 className="text-xl font-semibold text-black mb-4">Centered Modal</h3>
          <button
            onClick={() => setOpenModal('centered')}
            className="bg-indigo-600 text-slate-900 px-4 py-2 rounded font-semibold hover:bg-indigo-700 transition-all duration-200"
          >
            Centered
          </button>
        </div>
      </div>

      {/* Basic Modal */}
      {openModal === 'basic' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="backdrop-blur-xl bg-white border border-gray-300 rounded-lg max-w-md w-full">
            <div className="flex justify-between items-center p-6 border-b border-gray-300">
              <h2 className="text-xl font-bold text-black">Modal Title</h2>
              <button onClick={() => setOpenModal(null)} className="text-black hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <p className="text-black">This is a basic modal dialog with some content.</p>
            </div>
            <div className="border-t border-gray-300 p-6 flex gap-3 justify-end">
              <button
                onClick={() => setOpenModal(null)}
                className="px-4 py-2 rounded border border-gray-300 text-black font-semibold hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => setOpenModal(null)}
                className="px-4 py-2 rounded bg-blue-600 text-slate-900 font-semibold hover:bg-blue-700"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Alert Modal */}
      {openModal === 'alert' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="backdrop-blur-xl bg-white border border-gray-300 rounded-lg max-w-md w-full">
            <div className="p-6">
              <div className="text-4xl mb-4">âš ï¸</div>
              <h2 className="text-xl font-bold text-black mb-2">Warning!</h2>
              <p className="text-black mb-4">This is an alert modal message.</p>
            </div>
            <div className="border-t border-gray-300 p-6 flex justify-end">
              <button
                onClick={() => setOpenModal(null)}
                className="px-4 py-2 rounded bg-red-600 text-slate-900 font-semibold hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {openModal === 'confirm' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="backdrop-blur-xl bg-white border border-gray-300 rounded-lg max-w-md w-full">
            <div className="p-6">
              <h2 className="text-xl font-bold text-black mb-2">Confirm Action</h2>
              <p className="text-black mb-4">Are you sure you want to proceed with this action?</p>
            </div>
            <div className="border-t border-gray-300 p-6 flex gap-3 justify-end">
              <button
                onClick={() => setOpenModal(null)}
                className="px-4 py-2 rounded border border-gray-300 text-black font-semibold hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => setOpenModal(null)}
                className="px-4 py-2 rounded bg-yellow-600 text-black font-semibold hover:bg-yellow-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Form Modal */}
      {openModal === 'form' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="backdrop-blur-xl bg-white border border-gray-300 rounded-lg max-w-md w-full">
            <div className="p-6 border-b border-gray-300">
              <h2 className="text-xl font-bold text-black">Form Modal</h2>
            </div>
            <div className="p-6 space-y-4">
              <input type="text" placeholder="Name" className="w-full px-3 py-2 border border-gray-300 rounded text-black" />
              <input type="email" placeholder="Email" className="w-full px-3 py-2 border border-gray-300 rounded text-black" />
              <textarea placeholder="Message" rows="3" className="w-full px-3 py-2 border border-gray-300 rounded text-black"></textarea>
            </div>
            <div className="border-t border-gray-300 p-6 flex gap-3 justify-end">
              <button
                onClick={() => setOpenModal(null)}
                className="px-4 py-2 rounded border border-gray-300 text-black font-semibold hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => setOpenModal(null)}
                className="px-4 py-2 rounded bg-green-600 text-slate-900 font-semibold hover:bg-green-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Scrollable Modal */}
      {openModal === 'scroll' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="backdrop-blur-xl bg-white border border-gray-300 rounded-lg max-w-md w-full max-h-96 flex flex-col">
            <div className="p-6 border-b border-gray-300">
              <h2 className="text-xl font-bold text-black">Long Content</h2>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <p key={i} className="text-black mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              ))}
            </div>
            <div className="border-t border-gray-300 p-6 flex justify-end">
              <button
                onClick={() => setOpenModal(null)}
                className="px-4 py-2 rounded bg-purple-600 text-slate-900 font-semibold hover:bg-purple-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Centered Modal */}
      {openModal === 'centered' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="backdrop-blur-xl bg-white border border-gray-300 rounded-lg max-w-md w-full text-center">
            <div className="p-8">
              <div className="text-5xl mb-4">âœ“</div>
              <h2 className="text-2xl font-bold text-black mb-2">Success!</h2>
              <p className="text-black mb-6">Your action was completed successfully.</p>
              <button
                onClick={() => setOpenModal(null)}
                className="px-6 py-2 rounded bg-indigo-600 text-slate-900 font-semibold hover:bg-indigo-700"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
