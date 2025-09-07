'use client';

import { m } from 'framer-motion';
import { useState } from 'react';

export default function FramerExamples() {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div className="space-y-16 py-16">
      {/* Basic animations */}
      <section className="space-y-8">
        <m.h2 
          className="text-2xl font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Framer Motion Examples
        </m.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <m.div 
            className="p-6 bg-indigo-100 dark:bg-indigo-900 rounded-lg text-center cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-semibold mb-2">Hover & Tap</h3>
            <p className="text-sm">Interactive animations on hover and tap</p>
          </m.div>
          
          <m.div 
            className="p-6 bg-emerald-100 dark:bg-emerald-900 rounded-lg text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold mb-2">Slide In</h3>
            <p className="text-sm">Slides in from the left with delay</p>
          </m.div>
          
          <m.div 
            className="p-6 bg-rose-100 dark:bg-rose-900 rounded-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.4,
              type: "spring",
              stiffness: 100 
            }}
          >
            <h3 className="font-semibold mb-2">Spring Animation</h3>
            <p className="text-sm">Uses spring physics for natural motion</p>
          </m.div>
        </div>
      </section>

      {/* Interactive examples */}
      <section className="space-y-8">
        <m.h2 
          className="text-2xl font-bold text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Interactive Examples
        </m.h2>
        
        <div className="flex flex-col items-center space-y-6">
          <m.button
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold"
            onClick={() => setIsVisible(!isVisible)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Toggle Animation
          </m.button>
          
          <m.div
            className="w-64 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center text-white font-bold"
            animate={{
              opacity: isVisible ? 1 : 0,
              scale: isVisible ? 1 : 0.8,
              rotate: isVisible ? 0 : -10,
            }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            {isVisible ? "I'm Visible!" : "I'm Hidden!"}
          </m.div>
        </div>
      </section>

      {/* Counter with animation */}
      <section className="space-y-8">
        <m.h2 
          className="text-2xl font-bold text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Animated Counter
        </m.h2>
        
        <div className="flex flex-col items-center space-y-6">
          <m.div
            className="text-6xl font-bold text-blue-600"
            key={count}
            initial={{ scale: 1.2, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {count}
          </m.div>
          
          <div className="flex space-x-4">
            <m.button
              className="px-4 py-2 bg-green-500 text-white rounded"
              onClick={() => setCount(count + 1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              +
            </m.button>
            <m.button
              className="px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => setCount(Math.max(0, count - 1))}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              -
            </m.button>
            <m.button
              className="px-4 py-2 bg-gray-500 text-white rounded"
              onClick={() => setCount(0)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Reset
            </m.button>
          </div>
        </div>
      </section>

      {/* Stagger animation */}
      <section className="space-y-8">
        <m.h2 
          className="text-2xl font-bold text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Staggered Animations
        </m.h2>
        
        <m.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <m.div
              key={i}
              className="h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
            >
              {i + 1}
            </m.div>
          ))}
        </m.div>
      </section>
    </div>
  );
}
