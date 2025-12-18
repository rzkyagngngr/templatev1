import React, { useState } from 'react';
import {
  Folder,
  File,
  Trash2,
  Edit2,
  Download,
  Upload,
  Search,
  MoreVertical,
  ChevronRight,
  Home,
  Clock,
  FileText,
} from 'lucide-react';

const AdvancedFileManager = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [files, setFiles] = useState([
    {
      id: 1,
      name: 'Projects Folder',
      type: 'folder',
      size: null,
      modified: '2025-12-10',
      icon: Folder,
    },
    {
      id: 2,
      name: 'Document.pdf',
      type: 'file',
      size: '2.4 MB',
      modified: '2025-12-12',
      icon: FileText,
    },
    {
      id: 3,
      name: 'Images Folder',
      type: 'folder',
      size: null,
      modified: '2025-12-08',
      icon: Folder,
    },
    {
      id: 4,
      name: 'Presentation.pptx',
      type: 'file',
      size: '5.8 MB',
      modified: '2025-12-11',
      icon: FileText,
    },
    {
      id: 5,
      name: 'Spreadsheet.xlsx',
      type: 'file',
      size: '1.2 MB',
      modified: '2025-12-09',
      icon: FileText,
    },
    {
      id: 6,
      name: 'Videos Folder',
      type: 'folder',
      size: null,
      modified: '2025-12-07',
      icon: Folder,
    },
    {
      id: 7,
      name: 'Archive.zip',
      type: 'file',
      size: '45.3 MB',
      modified: '2025-12-06',
      icon: FileText,
    },
    {
      id: 8,
      name: 'Designs Folder',
      type: 'folder',
      size: null,
      modified: '2025-12-05',
      icon: Folder,
    },
    {
      id: 9,
      name: 'Report.docx',
      type: 'file',
      size: '3.1 MB',
      modified: '2025-12-04',
      icon: FileText,
    },
    {
      id: 10,
      name: 'Music Folder',
      type: 'folder',
      size: null,
      modified: '2025-12-03',
      icon: Folder,
    },
    {
      id: 11,
      name: 'Configuration.json',
      type: 'file',
      size: '156 KB',
      modified: '2025-12-02',
      icon: FileText,
    },
  ]);

  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id) => {
    setFiles(files.filter((file) => file.id !== id));
    setSelectedFile(null);
    setActiveMenu(null);
  };

  const handleRename = (id) => {
    const newName = prompt('Enter new name:');
    if (newName) {
      setFiles(
        files.map((file) => (file.id === id ? { ...file, name: newName } : file))
      );
    }
    setActiveMenu(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      {/* Breadcrumb */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Advanced File Manager</h1>
        <div className="flex gap-2 text-sm text-slate-600">
          <span className="hover:text-indigo-600 cursor-pointer">Dashboard</span>
          <span>/</span>
          <span className="hover:text-indigo-600 cursor-pointer">Advanced</span>
          <span>/</span>
          <span className="text-indigo-600 font-medium">File Manager</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* File List */}
        <div className="lg:col-span-2">
          {/* Search */}
          <div className="mb-6 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl p-6">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search files..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/50 border border-white/40 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400 text-slate-900"
              />
            </div>
          </div>

          {/* Breadcrumb Navigation */}
          <div className="mb-6 backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl p-4 flex items-center gap-3">
            <Home size={18} className="text-indigo-600" />
            <ChevronRight size={18} className="text-slate-400" />
            <span className="text-slate-700 font-medium">Root</span>
            <ChevronRight size={18} className="text-slate-400" />
            <span className="text-slate-600">My Documents</span>
          </div>

          {/* Files */}
          <div className="space-y-3">
            {filteredFiles.map((file) => {
              const Icon = file.icon;
              const isSelected = selectedFile?.id === file.id;

              return (
                <div
                  key={file.id}
                  onClick={() => setSelectedFile(file)}
                  className={`backdrop-blur-2xl rounded-3xl border border-white/60 shadow-xl p-4 cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-gradient-to-br from-indigo-100/90 to-purple-100/50'
                      : 'bg-gradient-to-br from-white/80 to-white/40 hover:from-white/90 hover:to-white/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <Icon
                        size={24}
                        className={
                          file.type === 'folder'
                            ? 'text-amber-500'
                            : 'text-slate-500'
                        }
                      />
                      <div className="flex-1">
                        <h3 className="text-slate-900 font-medium">{file.name}</h3>
                        {file.size && (
                          <p className="text-xs text-slate-500">{file.size}</p>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 relative">
                      {file.type === 'file' && (
                        <>
                          <button
                            className="p-2 hover:bg-white/50 rounded-xl transition-colors"
                            title="Download"
                          >
                            <Download size={18} className="text-slate-600" />
                          </button>
                          <button
                            className="p-2 hover:bg-white/50 rounded-xl transition-colors"
                            onClick={() => handleRename(file.id)}
                            title="Rename"
                          >
                            <Edit2 size={18} className="text-slate-600" />
                          </button>
                        </>
                      )}
                      <button
                        className="p-2 hover:bg-red-100 rounded-xl transition-colors"
                        onClick={() => handleDelete(file.id)}
                        title="Delete"
                      >
                        <Trash2 size={18} className="text-red-600" />
                      </button>
                      <button
                        className="p-2 hover:bg-white/50 rounded-xl transition-colors"
                        onClick={() =>
                          setActiveMenu(activeMenu === file.id ? null : file.id)
                        }
                      >
                        <MoreVertical size={18} className="text-slate-600" />
                      </button>

                      {/* Context Menu */}
                      {activeMenu === file.id && (
                        <div className="absolute right-0 top-full mt-2 backdrop-blur-xl bg-white/80 rounded-2xl border border-white/60 shadow-lg overflow-hidden z-10 w-40">
                          <button className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-indigo-100/50">
                            Properties
                          </button>
                          <button className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-indigo-100/50">
                            Copy
                          </button>
                          <button className="w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-indigo-100/50">
                            Move
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* File Details Pane */}
        {selectedFile && (
          <div className="lg:col-span-1">
            <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl p-6 sticky top-6">
              <h3 className="text-lg font-bold text-slate-900 mb-6">File Details</h3>

              <div className="space-y-4">
                {/* Thumbnail */}
                {selectedFile.type === 'file' && (
                  <div className="w-full h-40 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-2xl flex items-center justify-center">
                    <FileText size={48} className="text-indigo-600" />
                  </div>
                )}

                {/* Details */}
                <div className="space-y-3 border-t border-white/40 pt-4">
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase">
                      Name
                    </p>
                    <p className="text-sm text-slate-900 break-words">
                      {selectedFile.name}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase">
                      Type
                    </p>
                    <p className="text-sm text-slate-900 capitalize">
                      {selectedFile.type}
                    </p>
                  </div>

                  {selectedFile.size && (
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase">
                        Size
                      </p>
                      <p className="text-sm text-slate-900">{selectedFile.size}</p>
                    </div>
                  )}

                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase flex items-center gap-2">
                      <Clock size={14} />
                      Modified
                    </p>
                    <p className="text-sm text-slate-900">
                      {selectedFile.modified}
                    </p>
                  </div>
                </div>

                {/* Upload Button */}
                <button className="w-full mt-6 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-xl py-3 font-medium flex items-center justify-center gap-2 transition-all">
                  <Upload size={18} />
                  Upload New
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedFileManager;
