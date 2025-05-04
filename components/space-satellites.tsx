'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export const SpaceSatellites = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Satellite 1 */}
      <motion.div
        className="absolute w-14 h-6 bg-gray-400 rounded-full flex justify-center items-center shadow-lg"
        style={{ filter: 'drop-shadow(0 0 0.5rem rgba(255, 255, 255, 0.7))' }}
        initial={{ x: -100, y: 100 }}
        animate={{
          x: ['calc(-5vw)', 'calc(105vw)'],
          y: [100, 'calc(40vh)'],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="w-10 h-1.5 bg-blue-400 absolute" />
        <div className="w-3 h-3 rounded-full bg-blue-600 absolute -top-2" />
      </motion.div>

      {/* Satellite 2 */}
      <motion.div
        className="absolute w-16 h-8 bg-slate-500 rounded-lg"
        style={{ filter: 'drop-shadow(0 0 0.75rem rgba(200, 255, 255, 0.8))' }}
        initial={{ x: 'calc(105vw)', y: 300 }}
        animate={{
          x: ['calc(105vw)', 'calc(-10vw)'],
          y: [300, 'calc(60vh)'],
          rotate: [180, 170, 190, 180],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="w-20 h-0.5 bg-yellow-300 absolute top-4 -left-12" />
        <div className="w-4 h-4 rounded-full bg-blue-300 absolute -bottom-2 left-6" />
      </motion.div>

      {/* Space station */}
      <motion.div
        className="absolute flex items-center justify-center"
        initial={{ x: '50vw', y: -50, rotate: 0 }}
        animate={{ 
          y: ['calc(-5vh)', 'calc(15vh)'],
          rotate: [0, 360],
        }}
        transition={{
          y: {
            duration: 20,
            yoyo: true,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          rotate: {
            duration: 180,
            repeat: Infinity,
            ease: 'linear',
          }
        }}
      >
        <div className="w-24 h-6 bg-gray-300 rounded-lg relative flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-gray-500 absolute" />
          <div className="w-32 h-2 bg-blue-500 absolute -left-16" />
          <div className="w-32 h-2 bg-blue-500 absolute -right-16" />
          <div className="w-4 h-12 bg-gray-400 absolute -top-8" />
        </div>
      </motion.div>
    </div>
  )
} 