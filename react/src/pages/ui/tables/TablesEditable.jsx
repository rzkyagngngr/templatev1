import React, { useState } from 'react';

export default function TablesEditable() {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Wilson', email: 'bob@example.com', role: 'Editor' },
  ]);

  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  const startEdit = (item) => {
    setEditingId(item.id);
    setEditData(item);
  };

  const saveEdit = () => {
    setData(data.map(item => item.id === editingId ? editData : item));
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  const deleteRow = (id) => {
    setData(data.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-black mb-2">Editable Table</h1>
        <nav className="text-sm text-gray-600">
          <span>UI / </span>
          <span>Tables / </span>
          <span className="text-gray-900 font-medium">Editable</span>
        </nav>
      </div>

      {/* Editable Table */}
      <div className="bg-white rounded-2xl border border-gray-300 p-8 backdrop-blur-xl bg-opacity-80">
        <h2 className="text-xl font-semibold text-black mb-6">Click to Edit Rows</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-black">
            <thead>
              <tr className="border-b border-gray-300 bg-gray-50">
                <th className="text-left py-3 px-4 font-semibold">Name</th>
                <th className="text-left py-3 px-4 font-semibold">Email</th>
                <th className="text-left py-3 px-4 font-semibold">Role</th>
                <th className="text-left py-3 px-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="border-b border-gray-300 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    {editingId === item.id ? (
                      <input
                        type="text"
                        value={editData.name}
                        onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      item.name
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {editingId === item.id ? (
                      <input
                        type="email"
                        value={editData.email}
                        onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    ) : (
                      item.email
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {editingId === item.id ? (
                      <select
                        value={editData.role}
                        onChange={(e) => setEditData({ ...editData, role: e.target.value })}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option>Admin</option>
                        <option>User</option>
                        <option>Editor</option>
                      </select>
                    ) : (
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                        {item.role}
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    {editingId === item.id ? (
                      <div className="flex gap-2">
                        <button
                          onClick={saveEdit}
                          className="px-3 py-1 bg-green-500 text-slate-900 rounded text-sm font-medium hover:bg-green-600"
                        >
                          Save
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="px-3 py-1 bg-gray-300 text-black rounded text-sm font-medium hover:bg-gray-400"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div className="flex gap-2">
                        <button
                          onClick={() => startEdit(item)}
                          className="px-3 py-1 bg-blue-500 text-slate-900 rounded text-sm font-medium hover:bg-blue-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteRow(item.id)}
                          className="px-3 py-1 bg-red-500 text-slate-900 rounded text-sm font-medium hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
