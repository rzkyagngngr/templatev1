import React from 'react';

export default function UITypography() {
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
          <span className="text-sm text-blue-600 font-medium">Typography</span>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
          Typography Showcase
        </h1>
        <p className="text-gray-600">Text styles, sizes, and formatting</p>
      </div>

      {/* Heading Hierarchy */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Heading Hierarchy (H1-H6)</h2>
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-2">Heading Level 1</h1>
            <p className="text-sm text-gray-500">This is an H1 heading - main page title</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-2">Heading Level 2</h2>
            <p className="text-sm text-gray-500">This is an H2 heading - section title</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-700 mb-2">Heading Level 3</h3>
            <p className="text-sm text-gray-500">This is an H3 heading - subsection title</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-gray-700 mb-2">Heading Level 4</h4>
            <p className="text-sm text-gray-500">This is an H4 heading - sub-subsection title</p>
          </div>
          <div>
            <h5 className="text-xl font-bold text-gray-600 mb-2">Heading Level 5</h5>
            <p className="text-sm text-gray-500">This is an H5 heading</p>
          </div>
          <div>
            <h6 className="text-lg font-bold text-gray-600 mb-2">Heading Level 6</h6>
            <p className="text-sm text-gray-500">This is an H6 heading - smallest heading</p>
          </div>
        </div>
      </div>

      {/* Text Styles */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Text Styles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-700">Normal text - Regular weight (400)</p>
            <p className="font-semibold text-gray-700">Semibold text - Medium weight (600)</p>
            <p className="font-bold text-gray-700">Bold text - Bold weight (700)</p>
            <p className="font-extrabold text-gray-700">Extrabold text - Extra bold weight (800)</p>
          </div>
          <div className="space-y-4">
            <p className="italic text-gray-700">Italic text - Slanted style</p>
            <p className="underline text-gray-700">Underlined text - With decoration</p>
            <p className="line-through text-gray-700">Strikethrough text - Crossed out</p>
            <p className="uppercase text-gray-700">uppercase text - all caps</p>
          </div>
        </div>
      </div>

      {/* Font Sizes */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Font Sizes</h2>
        <div className="space-y-3">
          <p className="text-xs text-gray-700">Extra small text (12px)</p>
          <p className="text-sm text-gray-700">Small text (14px)</p>
          <p className="text-base text-gray-700">Base/Normal text (16px)</p>
          <p className="text-lg text-gray-700">Large text (18px)</p>
          <p className="text-xl text-gray-700">Extra large text (20px)</p>
          <p className="text-2xl text-gray-700">2XL text (24px)</p>
          <p className="text-3xl text-gray-700">3XL text (30px)</p>
        </div>
      </div>

      {/* Line Heights */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Line Heights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-sm font-semibold text-gray-600 mb-2">Tight line height (1.25)</p>
            <p className="leading-tight text-gray-700">
              This text has a tight line height. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600 mb-2">Relaxed line height (1.75)</p>
            <p className="leading-relaxed text-gray-700">
              This text has a relaxed line height. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-600 mb-2">Loose line height (2)</p>
            <p className="leading-loose text-gray-700">
              This text has a loose line height. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      {/* Letter Spacing */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Letter Spacing</h2>
        <div className="space-y-4">
          <p className="tracking-tight text-gray-700 font-semibold">Tight spacing - LETTER SPACING</p>
          <p className="tracking-normal text-gray-700 font-semibold">Normal spacing - LETTER SPACING</p>
          <p className="tracking-wide text-gray-700 font-semibold">Wide spacing - LETTER SPACING</p>
          <p className="tracking-widest text-gray-700 font-semibold">Very wide spacing - LETTER SPACING</p>
        </div>
      </div>

      {/* Text Colors with Gradients */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Text Colors & Gradients</h2>
        <div className="space-y-4">
          <p className="text-gray-600">Gray text</p>
          <p className="text-blue-600">Blue text</p>
          <p className="text-green-600">Green text</p>
          <p className="text-red-600">Red text</p>
          <p className="text-purple-600">Purple text</p>
          <p className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold text-lg">
            Gradient text - from blue to purple
          </p>
          <p className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent font-bold text-lg">
            Gradient text - from green to blue
          </p>
        </div>
      </div>

      {/* Text Alignment */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Text Alignment</h2>
        <div className="space-y-4 p-6 backdrop-blur-xl bg-gradient-to-br from-white/30 to-white/10 rounded-2xl border border-white/40">
          <p className="text-left text-gray-700">Left aligned text - This text is aligned to the left side of the container.</p>
          <p className="text-center text-gray-700">Center aligned text - This text is centered within the container.</p>
          <p className="text-right text-gray-700">Right aligned text - This text is aligned to the right side of the container.</p>
          <p className="text-justify text-gray-700">
            Justified text - This text is justified, meaning it extends from the left margin to the right margin. When justified, the spacing between words is adjusted to make the text fill the entire width.
          </p>
        </div>
      </div>

      {/* Code Blocks and Monospace */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Code Blocks and Monospace</h2>
        <div className="space-y-4">
          {/* Inline code */}
          <div>
            <p className="text-sm text-gray-600 mb-2">Inline code:</p>
            <p className="text-gray-700">
              Use the <code className="backdrop-blur-xl bg-gray-900/50 text-green-400 px-2 py-1 rounded font-mono text-sm">console.log()</code> function to output messages.
            </p>
          </div>

          {/* Code block */}
          <div>
            <p className="text-sm text-gray-600 mb-2">Code block:</p>
            <pre className="backdrop-blur-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 text-green-400 p-4 rounded-xl overflow-x-auto font-mono text-sm border border-white/20">
{`function greeting(name) {
  console.log(\`Hello, \${name}!\`);
}

greeting('World');`}
            </pre>
          </div>
        </div>
      </div>

      {/* Combined Typography */}
      <div className="backdrop-blur-2xl bg-gradient-to-br from-white/90 to-white/50 rounded-3xl border border-white/60 shadow-xl shadow-blue-200/40 p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Combined Typography Example</h2>
        <article className="prose prose-invert max-w-none">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              The Future of Web Design
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Web design continues to evolve with new technologies and design patterns emerging every day. <strong>Modern web interfaces</strong> focus on user experience and accessibility, ensuring that websites are not only beautiful but also functional and inclusive.
            </p>
            <p className="text-gray-600 italic">
              "Good design is invisible. It works so well that the user doesn't even notice it." - Douglas Norman
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Responsive design principles</li>
              <li>Accessibility standards (WCAG)</li>
              <li>Performance optimization</li>
              <li>Component-based architecture</li>
            </ul>
            <code className="block backdrop-blur-xl bg-gray-900/50 text-green-400 p-4 rounded-xl font-mono text-sm overflow-x-auto">
              npm install @modern/ui-components
            </code>
          </div>
        </article>
      </div>
    </div>
  );
}
