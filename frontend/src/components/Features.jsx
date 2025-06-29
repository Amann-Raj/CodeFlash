import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Clock, Code2, Sparkles, RefreshCw, Users, BarChart2, BookOpen, ThumbsUp, Lightbulb, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-6 w-6 text-indigo-400" />,
    title: 'Instant Analysis',
    description: 'Get immediate feedback on your code with our lightning-fast AI analysis engine.'
  },
  {
    icon: <Sparkles className="h-6 w-6 text-indigo-400" />,
    title: 'Best Practices',
    description: 'Learn industry best practices and improve your coding style with personalized suggestions.'
  },
  {
    icon: <Clock className="h-6 w-6 text-indigo-400" />,
    title: 'Time-saving',
    description: 'Save hours of debugging and refactoring with proactive code quality analysis.'
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-indigo-400" />,
    title: 'Smart Insights',
    description: 'Benefit from AI-powered insights that highlight potential bugs and optimizations.'
  },
  {
    icon: <RefreshCw className="h-6 w-6 text-indigo-400" />,
    title: 'Continuous Improvement',
    description: 'Iterate and improve your codebase with every review and feedback cycle.'
  },
  {
    icon: <Code2 className="h-6 w-6 text-indigo-400" />,
    title: 'Multi-language Support',
    description: 'Review code in JavaScript, Python, Java, and more—all in one platform.'
  },
];

const Features = () => {
  return (
    <section id="features" className="py-12 mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Our Features</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Our platform offers a comprehensive set of tools to help you write better code, collaborate efficiently, and grow as a developer.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.07 }}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all hover:shadow-lg hover:shadow-indigo-500/10"
          >
            <div className="bg-gray-700 rounded-lg p-3 inline-block mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;