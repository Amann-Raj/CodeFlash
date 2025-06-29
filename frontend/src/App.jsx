import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Send, CheckCircle, Loader2, ArrowRight, Sparkles, Keyboard } from 'lucide-react';
import CodeEditor from './components/CodeEditor.jsx';
import CodeReview from './components/CodeReview.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Features from './components/Features.jsx';
import TypingTest from './components/TypingTest.jsx';
import axios from 'axios';
import HeroSection from './components/HeroSection.jsx';
import CodeEditorSection from './components/CodeEditorSection.jsx';


function App() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [isLoading, setIsLoading] = useState(false);
  const [review, setReview] = useState(null);
  const [activeSection, setActiveSection] = useState('home');

  const handleSubmit = async () => {
    if (!code.trim()) return;

    setIsLoading(true);

    try {
      console.log(code);
    const response = await axios.post('http://localhost:3000/ai/get-review', 
  { code } ,
  {
          headers: { 'Content-Type': 'application/json' },
          timeout: 5000, // Set a timeout of 5 seconds
        }
);

      console.log(response);

      if (response.data) {
        setReview(response.data);
        setActiveSection('review');
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error) {
      console.error('Error submitting code for review:', error);
      setReview('Error: Could not fetch review. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setCode('');
    setReview(null);
    setActiveSection('home');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <>
            <HeroSection
              onGetStarted={() => document.getElementById('code-editor')?.scrollIntoView({ behavior: 'smooth' })}
              onTypingTest={() => setActiveSection('typing')}
              onLearnMore={() => {}}
            />
            <Features />
            <CodeEditorSection
              code={code}
              setCode={setCode}
              language={language}
              setLanguage={setLanguage}
              handleSubmit={handleSubmit}
              isLoading={isLoading}
            />
          </>
        )}

        {activeSection === 'review' && review && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Sparkles className="h-6 w-6 text-indigo-400 mr-2" />
                Code Review Results
              </h2>
              <div className="flex space-x-3">
                <button
                  onClick={() => setActiveSection('typing')}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-all flex items-center"
                >
                  <Keyboard className="mr-2 h-4 w-4" />
                  Try Typing Test
                </button>
                <button
                  onClick={handleReset}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-all"
                >
                  New Review
                </button>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700">
              <div className="bg-gray-900 px-6 py-4 border-b border-gray-700 flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <h3 className="text-lg font-semibold text-white">Analysis Complete</h3>
              </div>

              <CodeReview review={review} />
            </div>
          </motion.div>
        )}

        {activeSection === 'typing' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Keyboard className="h-6 w-6 text-emerald-400 mr-2" />
                Typing Speed Test
              </h2>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-all"
              >
                Back to Home
              </button>
            </div>

            <TypingTest />
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
