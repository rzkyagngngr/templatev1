import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
            <div className="relative glass-card bg-[#1e1e2e] w-full max-w-md p-6 m-4 animate-in fade-in zoom-in duration-200">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-textPrimary">{title}</h3>
                    <button onClick={onClose} className="text-tertiary hover:="><span className="material-icons-round">close</span></button>
                </div>
                <div className="text-tertiary mb-6">
                    {children}
                </div>
                <div className="flex justify-end gap-3">
                    <button onClick={onClose} className="px-4 py-2 rounded-lg bg-white/5 text-textPrimary hover:bg-white/10 transition">Cancel</button>
                    <button onClick={onClose} className="px-4 py-2 rounded-lg bg-primary text-slate-900 hover:bg-primary-dark transition">Confirm</button>
                </div>
            </div>
        </div>
    );
}

export default function Modals() {
    const [openModal, setOpenModal] = useState(null);

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-textPrimary">UI Modals</h1>

            <div className="glass-card p-6">
                <p className="text-tertiary mb-6">Click the buttons below to trigger different modals.</p>

                <div className="flex flex-wrap gap-4">
                    <button
                        onClick={() => setOpenModal('default')}
                        className="px-6 py-3 bg-primary text-slate-900 rounded-xl shadow-lg shadow-primary/30 hover:scale-105 transition"
                    >
                        Launch Default Modal
                    </button>

                    <button
                        onClick={() => setOpenModal('success')}
                        className="px-6 py-3 bg-emerald-500 text-slate-900 rounded-xl shadow-lg shadow-emerald-500/30 hover:scale-105 transition"
                    >
                        Success Modal
                    </button>

                    <button
                        onClick={() => setOpenModal('danger')}
                        className="px-6 py-3 bg-rose-500 text-slate-900 rounded-xl shadow-lg shadow-rose-500/30 hover:scale-105 transition"
                    >
                        Danger Modal
                    </button>
                </div>
            </div>

            <Modal
                isOpen={openModal === 'default'}
                onClose={() => setOpenModal(null)}
                title="Basic Modal"
            >
                <p>Use modals to display content that requires user interaction or attention.</p>
            </Modal>

            <Modal
                isOpen={openModal === 'success'}
                onClose={() => setOpenModal(null)}
                title="Success!"
            >
                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mb-4">
                        <span className="material-icons-round text-3xl">check</span>
                    </div>
                    <p>Your changes have been saved successfully.</p>
                </div>
            </Modal>

            <Modal
                isOpen={openModal === 'danger'}
                onClose={() => setOpenModal(null)}
                title="Delete Item?"
            >
                <p>Are you sure you want to delete this item? This action cannot be undone.</p>
            </Modal>
        </div>
    );
}
