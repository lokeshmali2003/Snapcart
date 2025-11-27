"use client"
import React from 'react'
import { motion } from "motion/react"
import { ArrowBigRight, Bike, ShoppingBasket } from 'lucide-react'


function Welcome({nextStep}) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center p-6'>
      <motion.div 
      initial={{
        opacity: 0,
        y:-20
      }}
       animate={{ opacity: 1, y: 0 }} 
         transition={{ duration: 1 }}
       className="flex items-center justify-center">
        <ShoppingBasket className='w-15 h-15 text-green-700' />
        <h1 className='text-5xl md:text-6xl font-bold mb-4 text-green-700'>Snapcart</h1>
        </motion.div>
        <motion.p 
         initial={{
          opacity: 0,   
            y:20
        }}
         animate={{ opacity: 1, y: 0 }} 
         transition={{ duration: 1, delay: 0.5 }}
        className='text-lg md:text-xl text-gray-700 max-w-xl'>
          Your ultimate shopping companion. Simplify your shopping experience with Snapcart - where convenience meets savings!
        </motion.p>
        <motion.div 
         initial={{
          opacity: 0,   
            y:20
        }}
         animate={{ opacity: 1, y: 0, scale: 1 }} 
         transition={{ duration: 0.6, delay: 0.5 }}
        className='flex items-center justify-center space-x-8 mt-10 '>
          <ShoppingBasket className='w-24 h-24 md:w-32 md:h-32 text-green-600 drop-shadow-lg' />
          <Bike className='w-24 h-24 md:w-32 md:h-32 text-orange-500 drop-shadow-lg ' />
        </motion.div>
        <motion.button 
         initial={{
          opacity: 0,   
            y:20
        }}
         animate={{ opacity: 1, y: 0 }} 
         transition={{ duration: 0.6, delay: 0.8 }}
        className='mt-12 px-6 py-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition duration-300' onClick={() => nextStep(2)}>
          Get Started <ArrowBigRight className='inline-block w-6 h-6 ml-2' />
        </motion.button>
    </div>
  )
}

export default Welcome