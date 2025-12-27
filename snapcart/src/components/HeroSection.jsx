import React from 'react'
import { motion } from 'motion/react'
import { Leaf } from 'lucide-react';
function HeroSection() {
    const slides=[
        {
            id: 1,
            icon: <Leaf
             className='w-24 h-24 sm:w-32 sm:h-32 text-green-400 drop-shadow-lg' />,
            title: "Fresh Organic Groceries",
            description: "Fresh organic groceries delivered to your doorstep",
            btnText: "Shop Now",
            
        },
        {
            id: 2,
            icon: <Leaf
             className='w-24 h-24 sm:w-32 sm:h-32 text-green-700' />,
            title: "Welcome to our website",
            description: "This is the second slide",
            image: "/images/hero-2.png"
        },
        {
            id: 3,
            icon: <Leaf
             className='w-24 h-24 sm:w-32 sm:h-32 text-green-700' />,
            title: "Welcome to our website",
            description: "This is the third slide",
            image: "/images/hero-3.png"
        }
    ]   
   
  return (
   <>
   </>
  )
}

export default HeroSection