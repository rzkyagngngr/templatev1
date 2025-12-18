import React, { useState } from 'react';
import {
  Bold,
  Italic,
  Underline,
  List,
  Link,
  Code,
  Eye,
  Copy,
  RotateCw,
} from 'lucide-react';

export default function FormEditors() {
  const [activeTab, setActiveTab] = useState('rich');
  const [richText, setRichText] = useState(
    'The quick brown fox jumps over the lazy dog. This is a sample text for the rich text editor with formatting capabilities.'
  );
  const [codeContent, setCodeContent] = useState(
    `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const result = fibonacci(10);
console.log(result);`
  );
  const [markdownContent, setMarkdownContent] = useState(
    `# Markdown Editor

## Features
- Live preview
- Real-time rendering
- Support for **bold**, *italic*, and \`code\`

### Code Example
\`\`\`javascript
const greeting = 'Hello World';
\`\`\`

> This is a blockquote`
  );
  const [showMarkdownPreview, setShowMarkdownPreview] = useState(true);

  const formatRichText = (format) => {
    const textarea = document.getElementById('rich-editor');
    if (textarea.selectionStart === undefined) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = richText.substring(start, end);

    let formattedText = '';
    switch (format) {
      case 'bold':
        formattedText = `**${selectedText}**`;
        break;
      case 'italic':
        formattedText = `*${selectedText}*`;
        break;
      case 'underline':
        formattedText = `__${selectedText}__`;
        break;
      case 'link':
        formattedText = `[${selectedText}](url)`;
        break;
      case 'list':
        formattedText = `\n- ${selectedText}\n`;
        break;
      default:
        return;
    }

    const newText =
      richText.substring(0, start) + formattedText + richText.substring(end);
    setRichText(newText);
  };

  const copyToClipboard = (content) => {
    navigator.clipboard.writeText(content);
  };

  const highlightCode = (code) => {
    return code
      .replace(/\b(function|const|let|return|if|else|for|while)\b/g, '<span class="text-purple-500">$1</span>')
      .replace(/(['"`])(.*?)\1/g, '<span class="text-green-500">$1$2$1</span>')
      .replace(/\/\/.*/g, '<span class="text-slate-400">$&</span>')
      .replace(/\d+/g, '<span class="text-orange-500">$&</span>');
  };

  const parseMarkdown = (md) => {
    let html = md;
    html = html.replace(/^### (.*?)$/gm, '<h3 className="text-lg font-bold text-slate-900 mt-4">$1</h3>');
    html = html.replace(/^## (.*?)$/gm, '<h2 className="text-xl font-bold text-slate-900 mt-6">$1</h2>');
    html = html.replace(/^# (.*?)$/gm, '<h1 className="text-2xl font-bold text-slate-900 mt-8">$1</h1>');
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    html = html.replace(/`(.*?)`/g, '<code className="bg-slate-900/20 px-2 py-1 rounded">$1</code>');
    html = html.replace(/^- (.*?)$/gm, '<li className="ml-4">$1</li>');
    html = html.replace(/^> (.*?)$/gm, '<blockquote className="border-l-4 border-indigo-500 pl-4 italic text-slate-700">$1</blockquote>');
    return html;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 -m-6 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8">
          <h4 className="text-2xl font-bold text-slate-900 tracking-wide">Form Editors</h4>
          <div className="text-sm text-slate-600 mt-2">
            <span>Dashboard</span>
            <span className="mx-2">/</span>
            <span>Forms</span>
            <span className="mx-2">/</span>
            <span className="text-slate-900">Editors</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="backdrop-blur-2xl rounded-3xl border border-white/60 shadow-xl p-6 mb-6">
          <div className="flex gap-4 border-b border-white/30">
            {[
              { id: 'rich', label: 'Rich Text Editor' },
              { id: 'code', label: 'Code Editor' },
              { id: 'markdown', label: 'Markdown Editor' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium transition-all border-b-2 ${
                  activeTab === tab.id
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Rich Text Editor */}
        {activeTab === 'rich' && (
          <div className="backdrop-blur-2xl rounded-3xl border border-white/60 shadow-xl p-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Rich Text Editor</h3>

            {/* Formatting Toolbar */}
            <div className="flex flex-wrap gap-2 mb-4 p-4 bg-white/30 rounded-2xl border border-white/40">
              <button
                onClick={() => formatRichText('bold')}
                title="Bold"
                className="p-2 bg-white/50 hover:bg-white/70 rounded-lg text-slate-700 transition-all"
              >
                <Bold size={18} />
              </button>
              <button
                onClick={() => formatRichText('italic')}
                title="Italic"
                className="p-2 bg-white/50 hover:bg-white/70 rounded-lg text-slate-700 transition-all"
              >
                <Italic size={18} />
              </button>
              <button
                onClick={() => formatRichText('underline')}
                title="Underline"
                className="p-2 bg-white/50 hover:bg-white/70 rounded-lg text-slate-700 transition-all"
              >
                <Underline size={18} />
              </button>
              <div className="w-px bg-white/40"></div>
              <button
                onClick={() => formatRichText('link')}
                title="Link"
                className="p-2 bg-white/50 hover:bg-white/70 rounded-lg text-slate-700 transition-all"
              >
                <Link size={18} />
              </button>
              <button
                onClick={() => formatRichText('list')}
                title="List"
                className="p-2 bg-white/50 hover:bg-white/70 rounded-lg text-slate-700 transition-all"
              >
                <List size={18} />
              </button>
              <div className="w-px bg-white/40"></div>
              <button
                onClick={() => copyToClipboard(richText)}
                title="Copy"
                className="p-2 bg-white/50 hover:bg-white/70 rounded-lg text-slate-700 transition-all"
              >
                <Copy size={18} />
              </button>
            </div>

            {/* Editor */}
            <textarea
              id="rich-editor"
              value={richText}
              onChange={(e) => setRichText(e.target.value)}
              className="w-full h-64 bg-white/50 rounded-2xl border border-white/50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-mono text-sm resize-none"
              placeholder="Start typing..."
            />
          </div>
        )}

        {/* Code Editor */}
        {activeTab === 'code' && (
          <div className="backdrop-blur-2xl rounded-3xl border border-white/60 shadow-xl p-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Code size={20} /> Code Editor with Syntax Highlighting
            </h3>

            <div className="flex gap-2 mb-4">
              <button
                onClick={() => copyToClipboard(codeContent)}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-medium transition-all"
              >
                <Copy size={16} /> Copy Code
              </button>
            </div>

            <div className="bg-slate-900 rounded-2xl p-4 mb-4 overflow-auto border border-white/10">
              <pre className="text-sm font-mono" style={{ color: '#e2e8f0' }}>
                {codeContent.split('\n').map((line, i) => (
                  <div key={i} className="leading-relaxed">
                    <span className="text-slate-500 mr-4 inline-block w-6 text-right">{i + 1}</span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: highlightCode(line),
                      }}
                    />
                  </div>
                ))}
              </pre>
            </div>

            <textarea
              value={codeContent}
              onChange={(e) => setCodeContent(e.target.value)}
              className="w-full h-48 bg-white/50 rounded-2xl border border-white/50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-mono text-sm resize-none"
              placeholder="Enter code here..."
            />
          </div>
        )}

        {/* Markdown Editor */}
        {activeTab === 'markdown' && (
          <div className="backdrop-blur-2xl rounded-3xl border border-white/60 shadow-xl p-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-slate-900">Markdown Editor</h3>
              <button
                onClick={() => setShowMarkdownPreview(!showMarkdownPreview)}
                className="flex items-center gap-2 px-4 py-2 bg-white/40 hover:bg-white/60 text-slate-700 rounded-lg font-medium transition-all border border-white/50"
              >
                <Eye size={16} /> {showMarkdownPreview ? 'Hide' : 'Show'} Preview
              </button>
            </div>

            <div className={`grid gap-4 ${showMarkdownPreview ? 'grid-cols-1 lg:grid-cols-2' : ''}`}>
              {/* Editor */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Markdown Input</label>
                <textarea
                  value={markdownContent}
                  onChange={(e) => setMarkdownContent(e.target.value)}
                  className="w-full h-96 bg-white/50 rounded-2xl border border-white/50 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-mono text-sm resize-none"
                  placeholder="Enter markdown..."
                />
              </div>

              {/* Preview */}
              {showMarkdownPreview && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Live Preview</label>
                  <div className="h-96 bg-white/40 backdrop-blur-xl rounded-2xl border border-white/50 p-4 overflow-y-auto">
                    <div
                      className="text-slate-900 prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{
                        __html: markdownContent
                          .split('\n')
                          .map((line) => {
                            if (line.startsWith('# '))
                              return `<h1 class="text-2xl font-bold mt-4">${line.replace('# ', '')}</h1>`;
                            if (line.startsWith('## '))
                              return `<h2 class="text-xl font-bold mt-3">${line.replace('## ', '')}</h2>`;
                            if (line.startsWith('### '))
                              return `<h3 class="text-lg font-semibold mt-2">${line.replace('### ', '')}</h3>`;
                            if (line.startsWith('- '))
                              return `<li class="ml-4">${line.replace('- ', '')}</li>`;
                            if (line.startsWith('> '))
                              return `<blockquote class="border-l-4 border-indigo-500 pl-4 italic">${line.replace('> ', '')}</blockquote>`;
                            if (line.trim() === '')
                              return '<br/>';
                            return `<p class="mb-2">${line
                              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                              .replace(/\*(.*?)\*/g, '<em>$1</em>')
                              .replace(/`(.*?)`/g, '<code class="bg-slate-900/20 px-1 rounded">$1</code>')}</p>`;
                          })
                          .join(''),
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
