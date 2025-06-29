import React, { useRef } from 'react';
import { Shield, Copy } from 'lucide-react';

const CodeDisplay = ({ targetText, input, isTestActive, isTestComplete, difficulty }) => {
  const codeDisplayRef = useRef(null);

  // Prevent copy from the code display
  const handleCopy = (e) => {
    e.preventDefault();
  };

  // Prevent context menu
  const handleContextMenu = (e) => {
    if (isTestActive) {
      e.preventDefault();
    }
  };

  const renderCharacters = () => {
    return targetText.split('').map((char, index) => {
      let className = 'text-gray-500';

      if (index < input.length) {
        className = input[index] === char ? 'text-green-400' : 'text-red-400';
      }

      return (
        <span key={index} className={className}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      );
    });
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="text-white font-medium flex items-center">
          <span className={`h-4 w-4 mr-1 inline-block rounded-full ${difficulty === 'beginner' ? 'bg-green-400' :
              difficulty === 'intermediate' ? 'bg-yellow-400' : 'bg-red-400'
            }`}></span>
          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Level
        </div>
      </div>
      <div
        ref={codeDisplayRef}
        className={`font-mono text-sm bg-gray-900 p-4 rounded-lg ${!isTestComplete ? 'overflow-x-auto max-h-80' : ''}`}
        onCopy={handleCopy}
        onContextMenu={handleContextMenu}
      >
        <pre className="whitespace-pre-wrap">{renderCharacters()}</pre>
      </div>
      {isTestActive && (
        <div className="mt-2 flex items-center text-amber-400 text-xs">
          <Shield className="h-3 w-3 mr-1" />
          Anti-cheat protection active: Copy-paste is disabled
        </div>
      )}
    </div>
  );
};

export default CodeDisplay;