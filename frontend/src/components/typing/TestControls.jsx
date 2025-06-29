import React from 'react';
import { motion } from 'framer-motion';
import { Timer, RefreshCw, BarChart2, Award, Trophy, CheckCircle } from 'lucide-react';

const TestControls = ({
  startTest,
  resetTest,
  changeSnippet,
  isTestActive,
  isTestComplete,
  cheatingDetected,
  wpm,
  accuracy,
  level
}) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Test Results Section */}
      {isTestComplete && !cheatingDetected && wpm !== null && accuracy !== null && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900 rounded-lg p-4 border border-gray-700"
        >
          <div className="flex items-center mb-3">
            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
            <h3 className="text-lg font-bold text-white">Test Results</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div className="flex items-center bg-gray-800 px-3 py-2 rounded-lg">
              <BarChart2 className="h-5 w-5 text-emerald-400 mr-2" />
              <div>
                <div className="text-gray-400 text-xs">Words Per Minute</div>
                <div className="text-lg font-bold text-emerald-400">{wpm}</div>
              </div>
            </div>
            <div className="flex items-center bg-gray-800 px-3 py-2 rounded-lg">
              <Award className="h-5 w-5 text-indigo-400 mr-2" />
              <div>
                <div className="text-gray-400 text-xs">Accuracy</div>
                <div className="text-lg font-bold text-indigo-400">{accuracy}%</div>
              </div>
            </div>
            <div className="flex items-center bg-gray-800 px-3 py-2 rounded-lg">
              <Trophy className="h-5 w-5 text-yellow-400 mr-2" />
              <div>
                <div className="text-gray-400 text-xs">Level</div>
                <div className="text-lg font-bold text-yellow-400">{level}</div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Control Buttons */}
      <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-between items-center">
        <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-start">
          <button
            onClick={startTest}
            disabled={isTestActive}
            className={`px-4 py-2 rounded-lg font-medium flex items-center transition-all ${isTestActive
              ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
              : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-emerald-500/30'
              }`}
          >
            {isTestActive ? (
              <>
                <Timer className="mr-2 h-4 w-4 animate-pulse" />
                Test in Progress...
              </>
            ) : (
              <>
                <Timer className="mr-2 h-4 w-4" />
                {isTestComplete ? 'Restart Test' : 'Start Test'}
              </>
            )}
          </button>

          <button
            onClick={resetTest}
            disabled={isTestActive}
            className={`px-4 py-2 rounded-lg font-medium flex items-center transition-all ${isTestActive
              ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
              : 'bg-gray-700 hover:bg-gray-600 text-white'
              }`}
          >
            Reset
          </button>

          <button
            onClick={changeSnippet}
            disabled={isTestActive}
            className={`px-4 py-2 rounded-lg text-sm flex items-center transition-all ${isTestActive
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
              : 'bg-gray-700 hover:bg-gray-600 text-white'
              }`}
          >
            <RefreshCw className="h-4 w-4 mr-1" />
            Change Snippet
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestControls;