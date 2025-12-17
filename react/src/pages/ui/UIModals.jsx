import React, { useState } from 'react';
import { X, AlertCircle } from 'lucide-react';

export default function UIModals() {
  const [openModals, setOpenModals] = useState({});

  const toggleModal = (id) => {
    setOpenModals(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const closeModal = (id) => {
    setOpenModals(prev => ({ ...prev, [id]: false }));
  };

  const modalSizes = [
    { id: 'small', name: 'Small', size: 'max-w-sm', maxWidth: '300px' },
    { id: 'default', name: 'Default', size: 'max-w-md', maxWidth: '500px' },
    { id: 'large', name: 'Large', size: 'max-w-2xl', maxWidth: '800px' },
    { id: 'xlarge', name: 'Extra Large', size: 'max-w-4xl', maxWidth: '1140px' },
  ];

  return (
    <div className="w-full space-y-8 p-6">
      {/* Header */}
      <div>
        <nav className="flex gap-2 text-sm mb-4">
          <span className="text-gray-500">Glacia</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-500">UI Kit</span>
          <span className="text-gray-400">/</span>
          <span className="text-black font-medium">Modals</span>
        </nav>
        <h1 className="text-4xl font-bold text-black">Modals</h1>
        <p className="text-gray-600 mt-2">Bootstrap modal component for displaying overlays with various sizes and configurations</p>
      </div>

      {/* Modal Sizes */}
      <div className="backdrop-blur-lg bg-white/40 border border-gray-300 rounded-xl p-8 shadow-lg hover:bg-white/50 transition-all">
        <h5 className="text-lg font-bold text-black mb-2">Optional Sizes</h5>
        <p className="text-gray-600 text-sm mb-6">Modals have several optional sizes available via different widths.</p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left p-3 text-black font-semibold">Size</th>
                <th className="text-left p-3 text-black font-semibold">Class</th>
                <th className="text-left p-3 text-black font-semibold">Modal max-width</th>
                <th className="text-left p-3 text-black font-semibold">Demo</th>
              </tr>
            </thead>
            <tbody>
              {modalSizes.map((modal, idx) => (
                <tr key={idx} className="border-b border-gray-300 hover:bg-white/20">
                  <td className="p-3 text-gray-800">{modal.name}</td>
                  <td className="p-3 text-gray-700 font-mono text-sm">{modal.size}</td>
                  <td className="p-3 text-gray-700 font-mono text-sm">{modal.maxWidth}</td>
                  <td className="p-3">
                    <button
                      onClick={() => toggleModal(modal.id)}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-slate-900 rounded text-sm font-medium transition-colors"
                    >
                      Launch
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Backdrop */}
      {Object.values(openModals).some(v => v) && (
        <div className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"></div>
      )}

      {/* Modals */}
      {modalSizes.map((modal) => (
        openModals[modal.id] && (
          <div key={modal.id} className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className={`${modal.size} w-full bg-white rounded-xl shadow-2xl animate-in fade-in zoom-in duration-300`}>
              {/* Header */}
              <div className="border-b border-gray-300 p-6 flex items-center justify-between">
                <h5 className="text-lg font-bold text-black">{modal.name} Modal</h5>
                <button
                  onClick={() => closeModal(modal.id)}
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-700">
                    This is a {modal.name.toLowerCase()} modal with a maximum width of {modal.maxWidth}.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Modals are commonly used for login forms, alerts, confirmation dialogs, and other user interactions.
                  </p>
                  <div className="bg-blue-50 border border-blue-300 rounded-lg p-4 flex gap-3">
                    <AlertCircle className="text-blue-600 flex-shrink-0" size={20} />
                    <p className="text-blue-800 text-sm">This is an informational message within the modal content.</p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-300 p-6 flex gap-3 justify-end">
                <button
                  onClick={() => closeModal(modal.id)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => closeModal(modal.id)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-slate-900 rounded-lg transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )
      ))}

      {/* Dialog Types */}
      <div className="backdrop-blur-lg bg-white/40 border border-gray-300 rounded-xl p-8 shadow-lg hover:bg-white/50 transition-all">
        <h5 className="text-lg font-bold text-black mb-2">Dialog Types</h5>
        <p className="text-gray-600 text-sm mb-6">Different types of modals for various use cases.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Confirmation Dialog */}
          <button
            onClick={() => toggleModal('confirm')}
            className="p-4 bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-300 rounded-lg hover:shadow-lg transition-all text-left"
          >
            <h6 className="text-black font-bold mb-1">Confirmation</h6>
            <p className="text-gray-600 text-sm">Ask user to confirm an action</p>
          </button>

          {/* Alert Dialog */}
          <button
            onClick={() => toggleModal('alert')}
            className="p-4 bg-gradient-to-br from-red-100 to-red-50 border border-red-300 rounded-lg hover:shadow-lg transition-all text-left"
          >
            <h6 className="text-black font-bold mb-1">Alert</h6>
            <p className="text-gray-600 text-sm">Display important messages</p>
          </button>

          {/* Form Dialog */}
          <button
            onClick={() => toggleModal('form')}
            className="p-4 bg-gradient-to-br from-green-100 to-green-50 border border-green-300 rounded-lg hover:shadow-lg transition-all text-left"
          >
            <h6 className="text-black font-bold mb-1">Form Modal</h6>
            <p className="text-gray-600 text-sm">Collect user input</p>
          </button>
        </div>
      </div>

      {/* Confirmation Dialog */}
      {openModals['confirm'] && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="max-w-sm w-full bg-white rounded-xl shadow-2xl">
            <div className="p-6 text-center">
              <AlertCircle className="text-blue-600 mx-auto mb-4" size={48} />
              <h5 className="text-lg font-bold text-black mb-2">Confirm Action</h5>
              <p className="text-gray-600 mb-6">Are you sure you want to proceed with this action?</p>
              <div className="flex gap-3">
                <button
                  onClick={() => closeModal('confirm')}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => closeModal('confirm')}
                  className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-slate-900 rounded-lg transition-colors"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 bg-black/50 -z-10"></div>
        </div>
      )}

      {/* Alert Dialog */}
      {openModals['alert'] && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="max-w-sm w-full bg-white rounded-xl shadow-2xl">
            <div className="p-6 text-center">
              <AlertCircle className="text-red-600 mx-auto mb-4" size={48} />
              <h5 className="text-lg font-bold text-black mb-2">Alert Message</h5>
              <p className="text-gray-600 mb-6">This is an important alert that requires your attention.</p>
              <button
                onClick={() => closeModal('alert')}
                className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-slate-900 rounded-lg transition-colors"
              >
                Acknowledge
              </button>
            </div>
          </div>
          <div className="fixed inset-0 bg-black/50 -z-10"></div>
        </div>
      )}

      {/* Form Dialog */}
      {openModals['form'] && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div className="max-w-md w-full bg-white rounded-xl shadow-2xl">
            <div className="border-b border-gray-300 p-6 flex items-center justify-between">
              <h5 className="text-lg font-bold text-black">Contact Form</h5>
              <button
                onClick={() => closeModal('form')}
                className="text-gray-600 hover:text-black"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="text-black text-sm font-medium mb-2 block">Email</label>
                <input type="email" placeholder="your@email.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="text-black text-sm font-medium mb-2 block">Message</label>
                <textarea placeholder="Your message..." rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
            </div>
            <div className="border-t border-gray-300 p-6 flex gap-3 justify-end">
              <button
                onClick={() => closeModal('form')}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={() => closeModal('form')}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-slate-900 rounded-lg"
              >
                Submit
              </button>
            </div>
          </div>
          <div className="fixed inset-0 bg-black/50 -z-10"></div>
        </div>
      )}
    </div>
  );
}
