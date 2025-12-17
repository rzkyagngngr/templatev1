import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function AdvancedHighlight() {
  const codeExamples = [
    {
      title: 'JavaScript Example',
      code: `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`
    },
    {
      title: 'React Component',
      code: `function App() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`
    },
    {
      title: 'CSS Animation',
      code: `@keyframes slide {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}`
    },
    {
      title: 'SQL Query',
      code: `SELECT name, email FROM users 
WHERE created_at > NOW() - INTERVAL 7 DAY
ORDER BY created_at DESC;`
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <span>Glacia</span>
          <ChevronRight size={16} />
          <span>UI Kit</span>
          <ChevronRight size={16} />
          <span className="text-gray-900 font-semibold">Code Highlight</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Advanced Highlight</h1>
      </div>

      {/* Examples */}
      <div className="grid gap-6">
        {codeExamples.map((example, idx) => (
          <div key={idx} className="backdrop-blur-md bg-white/40 border border-gray-300 rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{example.title}</h3>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto font-mono text-sm">
              <code>{example.code}</code>
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
}
