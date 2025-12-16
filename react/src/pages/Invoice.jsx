import React from 'react';

export default function Invoice() {
    // Invoice is usually a static document view.
    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-textPrimary">Invoice #25001</h1>
                <button className="btn btn-primary flex items-center gap-2">
                    <span className="material-icons-round">print</span>
                    Print
                </button>
            </div>

            <div className="glass-card p-10 bg-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5">
                    <span className="material-icons-round text-9xl">receipt_long</span>
                </div>

                {/* Header */}
                <div className="flex justify-between items-start mb-12 relative z-10">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="material-icons-round text-3xl text-primary">change_history</span>
                            <span className="text-2xl font-bold text-textPrimary tracking-tight">Metrica</span>
                        </div>
                        <div className="text-tertiary text-sm space-y-1">
                            <p>1234 Main St, Suite 100</p>
                            <p>San Francisco, CA 94123</p>
                            <p>United States</p>
                            <p>contact@metrica.com</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <h2 className="text-3xl font-bold text-primary mb-1">Invoice</h2>
                        <p className="text-tertiary mb-4">#25001 - Oct 24, 2023</p>
                        <div className="text-sm">
                            <p className="text-tertiary">Bill To:</p>
                            <h4 className="font-bold text-textPrimary text-lg">Dribbble Inc.</h4>
                            <p className="text-tertiary">10 Walnut St</p>
                            <p className="text-tertiary">New York, NY 10001</p>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="mb-10 relative z-10">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-white/10 text-tertiary text-sm uppercase tracking-wider">
                                <th className="py-3">Description</th>
                                <th className="py-3 text-center">Quantity</th>
                                <th className="py-3 text-right">Unit Cost</th>
                                <th className="py-3 text-right">Total</th>
                            </tr>
                        </thead>
                        <tbody className="text-textPrimary text-sm">
                            {[
                                { desc: 'Web Design & Development', qty: 1, cost: 2500, total: 2500 },
                                { desc: 'Mobile App Interface', qty: 1, cost: 1200, total: 1200 },
                                { desc: 'Server Setup & Maintenance', qty: 10, cost: 50, total: 500 },
                            ].map((item, i) => (
                                <tr key={i} className="border-b border-white/5">
                                    <td className="py-4 font-medium">{item.desc}</td>
                                    <td className="py-4 text-center">{item.qty}</td>
                                    <td className="py-4 text-right">${item.cost.toFixed(2)}</td>
                                    <td className="py-4 text-right font-bold">${item.total.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Summary */}
                <div className="flex justify-end relative z-10">
                    <div className="w-64 space-y-2">
                        <div className="flex justify-between text-tertiary text-sm">
                            <span>Subtotal</span>
                            <span>$4,200.00</span>
                        </div>
                        <div className="flex justify-between text-tertiary text-sm">
                            <span>Tax (10%)</span>
                            <span>$420.00</span>
                        </div>
                        <div className="border-t border-white/10 pt-2 flex justify-between text-lg font-bold text-primary">
                            <span>Total</span>
                            <span>$4,620.00</span>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-12 pt-6 border-t border-white/5 text-center text-xs text-tertiary relative z-10">
                    <p>Thank you for your business! Please make payment within 30 days.</p>
                </div>
            </div>
        </div>
    );
}
