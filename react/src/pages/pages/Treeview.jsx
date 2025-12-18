import React, { useState } from 'react';
import { ChevronRight, ChevronDown, ChevronUp, Folder, File } from 'lucide-react';

export default function Treeview() {
  const [expanded, setExpanded] = useState({
    projects: true,
    project1: true,
    files1: true,
    project2: false,
    project3: false
  });

  const toggleExpand = (key) => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const TreeNode = ({ label, nodeKey, isFolder, children, level = 0, icon: Icon }) => (
    <div>
      <button
        onClick={() => isFolder && toggleExpand(nodeKey)}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/30 transition-colors group ${level > 0 ? 'ml-' + (level * 4) : ''}`}
        style={{ marginLeft: `${level * 24}px` }}
      >
        {isFolder && (
          <div className="p-1">
            {expanded[nodeKey] ? (
              <ChevronDown size={18} className="text-blue-600" />
            ) : (
              <ChevronUp size={18} className="text-gray-400" />
            )}
          </div>
        )}
        {!isFolder && <div className="w-6" />}
        
        <div className="p-2 backdrop-blur-xl bg-gradient-to-br from-blue-400/50 to-purple-400/50 border border-white/50 rounded-lg">
          {Icon && <Icon size={16} className={isFolder ? 'text-blue-600' : 'text-purple-600'} />}
        </div>

        <span className={`font-medium ${isFolder ? 'text-gray-900 font-bold' : 'text-gray-700'} group-hover:text-blue-600 transition-colors`}>
          {label}
        </span>
      </button>

      {isFolder && expanded[nodeKey] && children && (
        <div>
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-2 text-sm">
        <span className="text-gray-600">Glacia</span>
        <ChevronRight size={16} className="text-gray-400" />
        <span className="text-gray-600">Pages</span>
        <ChevronRight size={16} className="text-gray-400" />
        <span className="bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">Treeview</span>
      </div>

      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-br from-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">File Structure</h1>
        <p className="text-gray-600 text-lg">Navigate through the project hierarchy</p>
      </div>

      {/* Tree View */}
      <div className="max-w-3xl mx-auto">
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 overflow-hidden">
          <div className="p-8 space-y-2">
            <TreeNode
              label="glacia-project"
              nodeKey="projects"
              isFolder={true}
              icon={Folder}
              children={
                <>
                  <TreeNode
                    label="src"
                    nodeKey="project1"
                    isFolder={true}
                    icon={Folder}
                    level={1}
                    children={
                      <>
                        <TreeNode label="App.jsx" nodeKey="app-file" isFolder={false} icon={File} level={2} />
                        <TreeNode label="index.js" nodeKey="index-file" isFolder={false} icon={File} level={2} />
                        <TreeNode
                          label="components"
                          nodeKey="files1"
                          isFolder={true}
                          icon={Folder}
                          level={2}
                          children={
                            <>
                              <TreeNode label="Button.jsx" nodeKey="btn-comp" isFolder={false} icon={File} level={3} />
                              <TreeNode label="Card.jsx" nodeKey="card-comp" isFolder={false} icon={File} level={3} />
                              <TreeNode label="Modal.jsx" nodeKey="modal-comp" isFolder={false} icon={File} level={3} />
                            </>
                          }
                        />
                        <TreeNode
                          label="pages"
                          nodeKey="project2"
                          isFolder={true}
                          icon={Folder}
                          level={2}
                          children={
                            <>
                              <TreeNode label="Profile.jsx" nodeKey="profile-page" isFolder={false} icon={File} level={3} />
                              <TreeNode label="Dashboard.jsx" nodeKey="dash-page" isFolder={false} icon={File} level={3} />
                              <TreeNode label="Settings.jsx" nodeKey="settings-page" isFolder={false} icon={File} level={3} />
                            </>
                          }
                        />
                      </>
                    }
                  />
                  <TreeNode
                    label="public"
                    nodeKey="project3"
                    isFolder={true}
                    icon={Folder}
                    level={1}
                    children={
                      <>
                        <TreeNode label="index.html" nodeKey="index-html" isFolder={false} icon={File} level={2} />
                        <TreeNode label="favicon.ico" nodeKey="favicon" isFolder={false} icon={File} level={2} />
                      </>
                    }
                  />
                  <TreeNode label="package.json" nodeKey="pkg-json" isFolder={false} icon={File} level={1} />
                  <TreeNode label="tailwind.config.js" nodeKey="tw-config" isFolder={false} icon={File} level={1} />
                  <TreeNode label=".gitignore" nodeKey="gitignore" isFolder={false} icon={File} level={1} />
                </>
              }
            />
          </div>
        </div>
      </div>

      {/* Info Card */}
      <div className="max-w-3xl mx-auto mt-8">
        <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-purple-200/40 p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">About This Structure</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
              <span><strong>src/</strong> contains all source code for the application</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
              <span><strong>components/</strong> holds reusable UI components</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
              <span><strong>pages/</strong> contains page-level components</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
              <span><strong>public/</strong> stores static assets</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
