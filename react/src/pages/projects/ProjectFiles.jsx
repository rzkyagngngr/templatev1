import React from 'react';
import { FileText, Download, Trash2, Plus, Folder } from 'lucide-react';

export default function ProjectFiles() {
  const files = [
    { id: 1, name: 'Project-Requirements.pdf', type: 'PDF', size: '2.4 MB', date: '2025-01-10', folder: 'Documentation' },
    { id: 2, name: 'Design-Mockups.zip', type: 'ZIP', size: '15.8 MB', date: '2025-01-12', folder: 'Design' },
    { id: 3, name: 'API-Documentation.md', type: 'MD', size: '0.5 MB', date: '2025-01-15', folder: 'Documentation' },
    { id: 4, name: 'Database-Schema.sql', type: 'SQL', size: '0.2 MB', date: '2025-01-18', folder: 'Database' },
    { id: 5, name: 'Deployment-Guide.docx', type: 'DOCX', size: '1.2 MB', date: '2025-01-20', folder: 'Documentation' },
  ];

  const folders = [
    { name: 'Documentation', files: 3, size: '3.9 MB' },
    { name: 'Design', files: 2, size: '15.8 MB' },
    { name: 'Database', files: 1, size: '0.2 MB' },
    { name: 'Source Code', files: 5, size: '8.5 MB' },
  ];

  const getFileIcon = (type) => {
    return 'ðŸ“„';
  };

  const storage = {
    used: 28.4,
    total: 100,
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-black">Project Files</h1>
        <button className="bg-blue-500 text-slate-900 px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2">
          <Plus size={20} /> Upload
        </button>
      </div>

      {/* Storage */}
      <div className="glass-card border border-gray-300 rounded-lg p-4 mb-8 bg-white">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-black">Storage</span>
          <span className="text-sm text-gray-600">{storage.used} GB / {storage.total} GB</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div style={{ width: `${(storage.used / storage.total) * 100}%` }} className="bg-blue-500 h-3 rounded-full"></div>
        </div>
      </div>

      {/* Folders */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-black mb-4">Folders</h2>
        <div className="grid grid-cols-4 gap-4">
          {folders.map((folder, idx) => (
            <div key={idx} className="glass-card border border-gray-300 rounded-lg p-4 bg-white hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <Folder className="text-blue-500" size={32} />
                <div>
                  <p className="font-semibold text-black text-sm">{folder.name}</p>
                  <p className="text-xs text-gray-600">{folder.files} files</p>
                </div>
              </div>
              <p className="text-xs text-gray-600">{folder.size}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Files List */}
      <div className="glass-card border border-gray-300 rounded-lg p-6">
        <h2 className="text-xl font-bold text-black mb-4">All Files</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300 bg-gray-50">
                <th className="text-left px-4 py-3 text-sm font-semibold text-black">File Name</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-black">Type</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-black">Folder</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-black">Size</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-black">Date</th>
                <th className="text-right px-4 py-3 text-sm font-semibold text-black">Actions</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, idx) => (
                <tr key={file.id} className="border-b border-gray-300 hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{getFileIcon(file.type)}</span>
                      <span className="font-medium text-black text-sm">{file.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{file.type}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-gray-600">{file.folder}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-black">{file.size}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-gray-600">{file.date}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-2">
                      <button className="p-1 text-gray-400 hover:text-blue-500">
                        <Download size={18} />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-500">
                        <Trash2 size={18} />
                      </button>
                    </div>
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
