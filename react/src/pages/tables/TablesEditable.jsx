import React, { useState } from 'react';
import { Edit2, Save, X, Plus, Trash2 } from 'lucide-react';

export default function TablesEditable() {
    const [data, setData] = useState([
        { id: 1, name: 'Product A', category: 'Electronics', price: '999.99', quantity: '45', status: 'In Stock' },
        { id: 2, name: 'Product B', category: 'Clothing', price: '49.99', quantity: '120', status: 'In Stock' },
        { id: 3, name: 'Product C', category: 'Books', price: '29.99', quantity: '0', status: 'Out of Stock' },
        { id: 4, name: 'Product D', category: 'Electronics', price: '1299.99', quantity: '15', status: 'Low Stock' },
        { id: 5, name: 'Product E', category: 'Home', price: '79.99', quantity: '250', status: 'In Stock' },
    ]);

    const [editingId, setEditingId] = useState(null);
    const [editData, setEditData] = useState({});

    const handleEdit = (item) => {
        setEditingId(item.id);
        setEditData({ ...item });
    };

    const handleSave = (id) => {
        setData(data.map(item => item.id === id ? editData : item));
        setEditingId(null);
    };

    const handleCancel = () => {
        setEditingId(null);
    };

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id));
    };

    const handleAddNew = () => {
        const newItem = {
            id: Math.max(...data.map(item => item.id), 0) + 1,
            name: '',
            category: '',
            price: '',
            quantity: '',
            status: 'In Stock'
        };
        setData([...data, newItem]);
        handleEdit(newItem);
    };

    const handleInputChange = (e, field) => {
        setEditData({ ...editData, [field]: e.target.value });
    };

    const getStatusColor = (status) => {
        switch(status) {
            case 'In Stock': return 'bg-green-100 text-green-900';
            case 'Low Stock': return 'bg-yellow-100 text-yellow-900';
            case 'Out of Stock': return 'bg-red-100 text-red-900';
            default: return 'bg-gray-100 text-gray-900';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
            <div className="w-full space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <nav className="flex text-gray-600 text-sm mb-3">
                            <span className="hover:text-gray-900 cursor-pointer transition">Glacia</span>
                            <span className="mx-2">/</span>
                            <span className="text-gray-900 font-semibold">Editable Tables</span>
                        </nav>
                        <h1 className="text-4xl font-bold text-gray-900">Editable Tables</h1>
                        <p className="text-gray-600 mt-2">Click on cells to edit data inline</p>
                    </div>
                    <button
                        onClick={handleAddNew}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-blue-800 transition shadow-lg shadow-blue-500/30"
                    >
                        <Plus size={20} />
                        Add New
                    </button>
                </div>

                {/* Table */}
                <div className="backdrop-blur-2xl bg-white/50 border border-white/60 rounded-3xl overflow-hidden shadow-xl shadow-black/5">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-white/30 border-b border-white/40">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Name</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Category</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Price</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Quantity</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr key={item.id} className="border-b border-white/20 hover:bg-white/40 transition-colors">
                                        {editingId === item.id ? (
                                            <>
                                                <td className="px-6 py-4">
                                                    <input
                                                        type="text"
                                                        value={editData.name}
                                                        onChange={(e) => handleInputChange(e, 'name')}
                                                        className="w-full px-3 py-2 bg-white/50 border border-blue-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                                    />
                                                </td>
                                                <td className="px-6 py-4">
                                                    <input
                                                        type="text"
                                                        value={editData.category}
                                                        onChange={(e) => handleInputChange(e, 'category')}
                                                        className="w-full px-3 py-2 bg-white/50 border border-blue-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                                    />
                                                </td>
                                                <td className="px-6 py-4">
                                                    <input
                                                        type="text"
                                                        value={editData.price}
                                                        onChange={(e) => handleInputChange(e, 'price')}
                                                        className="w-full px-3 py-2 bg-white/50 border border-blue-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                                    />
                                                </td>
                                                <td className="px-6 py-4">
                                                    <input
                                                        type="text"
                                                        value={editData.quantity}
                                                        onChange={(e) => handleInputChange(e, 'quantity')}
                                                        className="w-full px-3 py-2 bg-white/50 border border-blue-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                                    />
                                                </td>
                                                <td className="px-6 py-4">
                                                    <select
                                                        value={editData.status}
                                                        onChange={(e) => handleInputChange(e, 'status')}
                                                        className="w-full px-3 py-2 bg-white/50 border border-blue-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                                    >
                                                        <option>In Stock</option>
                                                        <option>Low Stock</option>
                                                        <option>Out of Stock</option>
                                                    </select>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center justify-center gap-2">
                                                        <button
                                                            onClick={() => handleSave(item.id)}
                                                            className="p-2 rounded-lg bg-green-100 text-green-600 hover:bg-green-200 transition"
                                                        >
                                                            <Save size={18} />
                                                        </button>
                                                        <button
                                                            onClick={handleCancel}
                                                            className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition"
                                                        >
                                                            <X size={18} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </>
                                        ) : (
                                            <>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900 cursor-pointer hover:bg-blue-50/50 rounded" onClick={() => handleEdit(item)}>
                                                    {item.name}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-700 cursor-pointer hover:bg-blue-50/50 rounded" onClick={() => handleEdit(item)}>
                                                    {item.category}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-700 cursor-pointer hover:bg-blue-50/50 rounded" onClick={() => handleEdit(item)}>
                                                    ${item.price}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-700 cursor-pointer hover:bg-blue-50/50 rounded" onClick={() => handleEdit(item)}>
                                                    {item.quantity}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(item.status)}`}>
                                                        {item.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center justify-center gap-2">
                                                        <button
                                                            onClick={() => handleEdit(item)}
                                                            className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
                                                        >
                                                            <Edit2 size={18} />
                                                        </button>
                                                        <button
                                                            onClick={() => handleDelete(item.id)}
                                                            className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition"
                                                        >
                                                            <Trash2 size={18} />
                                                        </button>
                                                    </div>
                                                </td>
                                            </>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
