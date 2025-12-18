import React, { useState } from 'react';
import { X, AlertCircle, CheckCircle, Image as ImageIcon } from 'lucide-react';

export default function UIModals() {
  const [modals, setModals] = useState({
    basic: false,
    header: false,
    confirmation: false,
    form: false,
    small: false,
    medium: false,
    large: false,
    image: false,
    stacked1: false,
    stacked2: false,
    alert: false,
  });

  const [formData, setFormData] = useState({ name: '', email: '' });

  const toggleModal = (modalName) => {
    setModals(prev => ({ ...prev, [modalName]: !prev[modalName] }));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toggleModal('form');
  };

  const Modal = ({ isOpen, onClose, title, children, size = 'medium' }) => {
    if (!isOpen) return null;

    const sizeClasses = {
      small: 'w-96',
      medium: 'w-full max-w-md',
      large: 'w-full max-w-2xl',
    };

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
        <div className={`${sizeClasses[size]} backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-6`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/50 rounded-full transition-all duration-300"
            >
              <X size={20} className="text-gray-600" />
            </button>
          </div>
          {children}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400/50 to-blue-300/50 flex items-center justify-center">
            <span className="text-sm font-bold text-blue-600">UI</span>
          </div>
          <span className="text-sm font-medium text-gray-600">UI Elements</span>
          <span className="text-sm text-gray-400">/</span>
          <span className="text-sm text-blue-600 font-medium">Modals</span>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Modal Dialogs
        </h1>
        <p className="text-gray-600">Beautiful modal windows with various styles and sizes</p>
      </div>

      {/* Basic Modal */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Basic Modal</h2>
        <p className="text-gray-600 mb-6">A simple modal dialog</p>
        <button
          onClick={() => toggleModal('basic')}
          className="backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-blue-300/50 rounded-2xl border border-white/50 px-6 py-3 transition-all hover:scale-105 hover:shadow-2xl shadow-blue-200/40 font-medium text-blue-700"
        >
          Open Basic Modal
        </button>
        <Modal isOpen={modals.basic} onClose={() => toggleModal('basic')} title="Basic Modal">
          <p className="text-gray-600">This is a basic modal dialog. Click the X button to close it.</p>
        </Modal>
      </div>

      {/* Modal with Header/Footer */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Modal with Header & Footer</h2>
        <p className="text-gray-600 mb-6">Modal with structured content layout</p>
        <button
          onClick={() => toggleModal('header')}
          className="backdrop-blur-xl bg-gradient-to-br from-green-400/50 to-green-300/50 rounded-2xl border border-white/50 px-6 py-3 transition-all hover:scale-105 hover:shadow-2xl shadow-green-200/40 font-medium text-green-700"
        >
          Open Header/Footer Modal
        </button>
        <Modal isOpen={modals.header} onClose={() => toggleModal('header')} title="Modal with Footer">
          <div className="space-y-4">
            <p className="text-gray-600">This modal has structured content with a footer area for actions.</p>
            <div className="flex gap-3 pt-4 border-t border-gray-200">
              <button className="flex-1 backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-blue-300/50 rounded-2xl border border-white/50 px-4 py-2 transition-all hover:scale-105 text-blue-700 font-medium">
                Save
              </button>
              <button
                onClick={() => toggleModal('header')}
                className="flex-1 backdrop-blur-xl bg-gradient-to-br from-gray-400/50 to-gray-300/50 rounded-2xl border border-white/50 px-4 py-2 transition-all hover:scale-105 text-gray-700 font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      </div>

      {/* Confirmation Modal */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Confirmation Modal</h2>
        <p className="text-gray-600 mb-6">Modal for confirmations and warnings</p>
        <button
          onClick={() => toggleModal('confirmation')}
          className="backdrop-blur-xl bg-gradient-to-br from-red-400/50 to-red-300/50 rounded-2xl border border-white/50 px-6 py-3 transition-all hover:scale-105 hover:shadow-2xl shadow-red-200/40 font-medium text-red-700"
        >
          Open Confirmation Modal
        </button>
        <Modal isOpen={modals.confirmation} onClose={() => toggleModal('confirmation')} title="Confirm Action">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-red-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">Are you sure you want to delete this item? This action cannot be undone.</p>
            </div>
            <div className="flex gap-3 pt-4">
              <button className="flex-1 backdrop-blur-xl bg-gradient-to-br from-red-400/50 to-red-300/50 rounded-2xl border border-white/50 px-4 py-2 transition-all hover:scale-105 text-red-700 font-medium">
                Delete
              </button>
              <button
                onClick={() => toggleModal('confirmation')}
                className="flex-1 backdrop-blur-xl bg-gradient-to-br from-gray-400/50 to-gray-300/50 rounded-2xl border border-white/50 px-4 py-2 transition-all hover:scale-105 text-gray-700 font-medium"
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      </div>

      {/* Form Modal */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Form Modal</h2>
        <p className="text-gray-600 mb-6">Modal with form inputs</p>
        <button
          onClick={() => toggleModal('form')}
          className="backdrop-blur-xl bg-gradient-to-br from-purple-400/50 to-purple-300/50 rounded-2xl border border-white/50 px-6 py-3 transition-all hover:scale-105 hover:shadow-2xl shadow-purple-200/40 font-medium text-purple-700"
        >
          Open Form Modal
        </button>
        <Modal isOpen={modals.form} onClose={() => toggleModal('form')} title="User Information">
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                className="w-full backdrop-blur-xl bg-white/50 rounded-xl border border-white/60 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                className="w-full backdrop-blur-xl bg-white/50 rounded-xl border border-white/60 px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 backdrop-blur-xl bg-gradient-to-br from-purple-400/50 to-purple-300/50 rounded-2xl border border-white/50 px-4 py-2 transition-all hover:scale-105 text-purple-700 font-medium"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => toggleModal('form')}
                className="flex-1 backdrop-blur-xl bg-gradient-to-br from-gray-400/50 to-gray-300/50 rounded-2xl border border-white/50 px-4 py-2 transition-all hover:scale-105 text-gray-700 font-medium"
              >
                Cancel
              </button>
            </div>
          </form>
        </Modal>
      </div>

      {/* Modal Sizes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Small Modal */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Small Modal</h2>
          <button
            onClick={() => toggleModal('small')}
            className="w-full backdrop-blur-xl bg-gradient-to-br from-yellow-400/50 to-yellow-300/50 rounded-2xl border border-white/50 px-4 py-2 transition-all hover:scale-105 hover:shadow-2xl shadow-yellow-200/40 font-medium text-yellow-700"
          >
            Open Small
          </button>
          <Modal isOpen={modals.small} onClose={() => toggleModal('small')} title="Small Modal" size="small">
            <p className="text-gray-600">This is a small modal with limited width.</p>
          </Modal>
        </div>

        {/* Medium Modal */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Medium Modal</h2>
          <button
            onClick={() => toggleModal('medium')}
            className="w-full backdrop-blur-xl bg-gradient-to-br from-indigo-400/50 to-indigo-300/50 rounded-2xl border border-white/50 px-4 py-2 transition-all hover:scale-105 hover:shadow-2xl shadow-indigo-200/40 font-medium text-indigo-700"
          >
            Open Medium
          </button>
          <Modal isOpen={modals.medium} onClose={() => toggleModal('medium')} title="Medium Modal" size="medium">
            <p className="text-gray-600">This is a medium-sized modal, the default size.</p>
          </Modal>
        </div>

        {/* Large Modal */}
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Large Modal</h2>
          <button
            onClick={() => toggleModal('large')}
            className="w-full backdrop-blur-xl bg-gradient-to-br from-pink-400/50 to-pink-300/50 rounded-2xl border border-white/50 px-4 py-2 transition-all hover:scale-105 hover:shadow-2xl shadow-pink-200/40 font-medium text-pink-700"
          >
            Open Large
          </button>
          <Modal isOpen={modals.large} onClose={() => toggleModal('large')} title="Large Modal" size="large">
            <p className="text-gray-600">This is a large modal with more width for detailed content.</p>
          </Modal>
        </div>
      </div>

      {/* Modal with Image */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Modal with Image</h2>
        <p className="text-gray-600 mb-6">Modal with image content</p>
        <button
          onClick={() => toggleModal('image')}
          className="backdrop-blur-xl bg-gradient-to-br from-cyan-400/50 to-cyan-300/50 rounded-2xl border border-white/50 px-6 py-3 transition-all hover:scale-105 hover:shadow-2xl shadow-cyan-200/40 font-medium text-cyan-700"
        >
          Open Image Modal
        </button>
        <Modal isOpen={modals.image} onClose={() => toggleModal('image')} title="Image Gallery" size="large">
          <img
            src="https://picsum.photos/600/400?random=1"
            alt="Gallery"
            className="w-full rounded-2xl mb-4"
          />
          <p className="text-gray-600">Beautiful image displayed in modal.</p>
        </Modal>
      </div>

      {/* Stacked Modals */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Stacked Modals</h2>
        <p className="text-gray-600 mb-6">Opening multiple modals in sequence</p>
        <button
          onClick={() => toggleModal('stacked1')}
          className="backdrop-blur-xl bg-gradient-to-br from-teal-400/50 to-teal-300/50 rounded-2xl border border-white/50 px-6 py-3 transition-all hover:scale-105 hover:shadow-2xl shadow-teal-200/40 font-medium text-teal-700"
        >
          Open First Modal
        </button>
        <Modal isOpen={modals.stacked1} onClose={() => toggleModal('stacked1')} title="First Modal">
          <div className="space-y-4">
            <p className="text-gray-600">This is the first modal in a stack.</p>
            <button
              onClick={() => toggleModal('stacked2')}
              className="backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-blue-300/50 rounded-2xl border border-white/50 px-4 py-2 transition-all hover:scale-105 text-blue-700 font-medium"
            >
              Open Second Modal
            </button>
          </div>
        </Modal>
        <Modal isOpen={modals.stacked2} onClose={() => toggleModal('stacked2')} title="Second Modal">
          <p className="text-gray-600">This is the second modal stacked on top.</p>
        </Modal>
      </div>

      {/* Alert Modal */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Alert Modal</h2>
        <p className="text-gray-600 mb-6">Modal for alerts and notifications</p>
        <button
          onClick={() => toggleModal('alert')}
          className="backdrop-blur-xl bg-gradient-to-br from-orange-400/50 to-orange-300/50 rounded-2xl border border-white/50 px-6 py-3 transition-all hover:scale-105 hover:shadow-2xl shadow-orange-200/40 font-medium text-orange-700"
        >
          Open Alert Modal
        </button>
        <Modal isOpen={modals.alert} onClose={() => toggleModal('alert')} title="Success Alert">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium text-green-700">Success!</p>
                <p className="text-gray-600">Your action has been completed successfully.</p>
              </div>
            </div>
            <button
              onClick={() => toggleModal('alert')}
              className="w-full backdrop-blur-xl bg-gradient-to-br from-green-400/50 to-green-300/50 rounded-2xl border border-white/50 px-4 py-2 transition-all hover:scale-105 text-green-700 font-medium"
            >
              Dismiss
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}
