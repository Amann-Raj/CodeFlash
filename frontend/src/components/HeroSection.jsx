import { motion } from 'framer-motion';
import { ArrowRight, Keyboard } from 'lucide-react';

const HeroSection = ({ onGetStarted, onTypingTest, onLearnMore }) => (
  <div className="flex flex-col items-center justify-center min-h-[80vh] w-full">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 ">
        Elevate Your Code with <span className="text-indigo-400">Expert Reviews</span>
      </h1>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Our AI-powered platform provides detailed code reviews to help you write cleaner,
        more efficient, and more maintainable code.
      </p>

      <motion.div
        className="mt-8 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <button
          onClick={onGetStarted}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium flex items-center transition-all shadow-lg hover:shadow-indigo-500/30"
        >
          Get Started <ArrowRight className="ml-2 h-5 w-5" />
        </button>
        <button
          onClick={onTypingTest}
          className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium flex items-center transition-all shadow-lg hover:shadow-emerald-500/30"
        >
          Typing Test <Keyboard className="ml-2 h-5 w-5" />
        </button>
        <a
          href="#features"
          onClick={onLearnMore}
          className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium flex items-center transition-all"
        >
          Learn More
        </a>
      </motion.div>
    </motion.div>
  </div>
);

export default HeroSection; 