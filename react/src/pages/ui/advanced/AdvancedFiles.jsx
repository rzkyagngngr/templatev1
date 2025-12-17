import React, { useState } from 'react';
import { ChevronRight, Upload, File, Image, Music } from 'lucide-react';

export default function AdvancedFiles() {
  const [files, setFiles] = useState([
    { name: 'document.pdf', size: '2.4 MB', type: 'PDF' },
    { name: 'image.jpg', size: '1.2 MB', type: 'Image' },
    { name: 'presentation.pptx', size: '3.8 MB', type: 'PowerPoint' },
    { name: 'spreadsheet.xlsx', size: '0.9 MB', type: 'Excel' },
    { name: 'audio.mp3', size: '4.5 MB', type: 'Audio' },
  ]);

  const getFileIcon = (type) => {
    switch (type) {
      case 'Image': return <Image size={24} />;
      case 'Audio': return <Music size={24} />;
      default: return <File size={24} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <span>Glacia</span>
          <ChevronRight size={16} />
          <span>UI Kit</span>
          <ChevronRight size={16} />
          <span className="text-gray-900 font-semibold">File Upload</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Advanced File Upload</h1>
      </div>

      {/* Examples */}
      <div className="grid gap-6">
        <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload Area</h3>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
            <Upload size={32} className="mx-auto text-gray-400 mb-2" />
            <p className="text-sm text-gray-600">Drag and drop files here or click to browse</p>
          </div>
        </div>

        <div className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Files</h3>
          <div className="space-y-2">
            {files.map((file, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white/50 p-3 rounded border border-gray-300 hover:bg-white/80 transition-colors">
                <div className="text-gray-600">{getFileIcon(file.type)}</div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{file.name}</p>
                  <p className="text-xs text-gray-600">{file.size}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
