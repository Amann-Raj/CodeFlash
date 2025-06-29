import { Code, Loader2, Send } from 'lucide-react';
import CodeEditor from './CodeEditor.jsx';

const CodeEditorSection = ({ code, setCode, language, setLanguage, handleSubmit, isLoading }) => (
  <div id="code-editor" className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700 max-w-5xl mx-auto">
    <div className="bg-gray-900 px-6 py-4 border-b border-gray-700 flex justify-between items-center">
      <div className="flex items-center">
        <Code className="h-5 w-5 text-indigo-400 mr-2" />
        <h2 className="text-lg font-semibold text-white">Code Editor</h2>
      </div>
      <div className="flex items-center space-x-3">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-gray-700 text-gray-200 rounded px-3 py-1 text-sm border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="javascript">JavaScript</option>
          <option value="typescript">TypeScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="csharp">C#</option>
          <option value="php">PHP</option>
          <option value="go">Go</option>
          <option value="ruby">Ruby</option>
        </select>
      </div>
    </div>

    <CodeEditor
      code={code}
      setCode={setCode}
      language={language}
    />

    <div className="bg-gray-900 px-6 py-4 border-t border-gray-700 flex justify-between items-center">
      <div className="text-sm text-gray-400">
        {code ? `${code.split('\n').length} lines` : 'Paste or type your code here'}
      </div>
      <button
        onClick={handleSubmit}
        disabled={!code.trim() || isLoading}
        className={`px-4 py-2 rounded-lg font-medium flex items-center transition-all ${!code.trim() || isLoading
          ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
          : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-indigo-500/30'
          }`}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Submit for Review
          </>
        )}
      </button>
    </div>
  </div>
);

export default CodeEditorSection; 