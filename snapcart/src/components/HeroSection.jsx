"use client"
import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Leaf, Smartphone, Truck } from 'lucide-react';
import { AnimatePresence } from 'motion/react';
import Image from 'next/image';
function HeroSection() {
    const slides=[
        {
            id: 1,
            icon: <Leaf
             className='w-24 h-24 sm:w-32 sm:h-32 text-green-400 drop-shadow-lg' />,
            title: "Fresh Organic Groceries",
            description: "Fresh organic groceries delivered to your doorstep",
            btnText: "Shop Now",
            bg:"https://images.unsplash.com/photo-1741517287225-7cd8d44b3cf3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            
        },
        {
            id: 2,
            icon: <Truck
             className='w-24 h-24 sm:w-32 sm:h-28 text-yellow-500 drop-shadow-lg' />,
            title: "Fast Delivery",
            description: "Get your order delivered to your doorstep in no time",
            btnText: "Order Now",
            bg:"https://images.unsplash.com/photo-1690625642622-ba0bed1a68a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhc3QlMjBkZWxpdmVyeXxlbnwwfDB8MHx8fDA%3D"
        },
        {
            id: 3,
            icon: <Smartphone
             className='w-24 h-24 sm:w-32 sm:h-28 text-blue-500 drop-shadow-lg' />,
            title: "Shop Anytime, Anywhere ",
            description: "Shop from your phone, tablet, or computer",
            btnText: "Get Started",
            bg:"https://images.unsplash.com/photo-1696142794351-afefee19c3bf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ]   

    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(()=>{
        const timer = setInterval(()=>{
            setCurrentSlide((prev)=>(prev+1)%slides.length);
        },4000);
        return ()=>clearInterval(timer);
    },[currentSlide])
    return (
        <div className='relative  w-[98%] mx-auto mt-32 h-[80vh] rounded-3xl overflow-hidden shadow-2xl'>
            <AnimatePresence mode="wait">
                <motion.div 
                    key={slides[currentSlide].id} 
                    className='absolute inset-0'
                    initial={{ opacity: 0, x: 100 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    exit={{ opacity: 0, x: -100 }} 
                    transition={{ duration: 0.5 }}
                >
                    <div className='absolute inset-0 bg-cover bg-center bg-no-repeat'></div>
                    <Image src={slides[currentSlide].bg} alt={slides[currentSlide].title} fill className='object-cover' />
                    <div className='absolute inset-0 bg-black/50' />
                    <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
                        <h1 className='text-4xl font-bold'>{slides[currentSlide].title}</h1>
                        <p className='text-lg'>{slides[currentSlide].description}</p>
                        <button className='bg-green-500 text-white px-4 py-2 rounded-md'>{slides[currentSlide].btnText}</button>
                    </div>
                </motion.div>
            </AnimatePresence>
            
        </div>
    )
}
export default HeroSection