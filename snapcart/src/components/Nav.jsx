"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence , motion } from 'motion/react'
import { SearchIcon,  ShoppingCartIcon, UserIcon, LogOutIcon } from 'lucide-react'
import Image from 'next/image'
function Nav({user}) {
    const {name, email, role, mobile, image} = user || {}   
    const [open, setOpen] = useState(false)
  return (
    <>
    <div className='w-[90%] mx-auto fixed top-4 left-1/2 -translate-x-1/2 bg-linear-to-r from-green-500 to-green-700 rounded-2xl shadow-lg shadow-black/30  p-4 flex justify-between items-center h-20 px-4 md:px-8 z-50'>
    <Link href='/' className='text-2xl font-bold text-white hover:text-gray-200 transition-colors drop-shadow-lg '>
    Snapcart
    </Link>
    <form className='hidden md:flex bg-white rounded-full px-4 py-2 w-1/2 max-w-lg flex items-center shadow-md space-x-4'>
     <SearchIcon className='w-6 h-6 text-gray-500 mr-2' />
     <input type='text' placeholder='Search Groceries...' className='w-full outline-none text-gray-700 placeholder:text-gray-400' />
    </form>
    <div className='flex items-center md:gap-4  relative '> 
      <Link href='/cart' className='relative bg-white rounded-full p-2 m-1'>
        <ShoppingCartIcon className="w-6 h-6 text-green-600 hover:text-gray-200 transition-colors" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
      </Link>

      <div className='relative'>
        <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0, y:-10, scale:0.95}} animate={{opacity:1, y:0, scale:1}} exit={{opacity:0, y:-10, scale:0.95}} transition={{duration:0.2}} className='absolute top-10 right-0 w-48 bg-white rounded-lg shadow-lg p-2'>
            <motion.div className='flex w-10 h-10 rounded-full bg-green-500 p-1 m-1 flex items-center justify-center transition-colors overflow-hidden shadow-md  transition-transform duration-300 relative'>
            {user.image?<Image src={user.image} alt={user.name} width={32} height={32} className='object-cover rounded-full' />:<UserIcon className='w-8 h-8 text-white hover:text-gray-200 transition-colors' />}
            </motion.div>
            <div className='text-green-600 font-bold'>{user.name}</div>
            <div className='text-gray-500 text-sm'>{user.email}</div>
            <div className='text-gray-500 text-sm'>{user.role}</div>
            <div className='text-gray-500 text-sm'>{user.mobile}</div>
            <Link href='/login' className='text-green-600 font-bold'>Logout</Link>
          </motion.div>
        )}
        </AnimatePresence>
      <div className='relative w-10 h-10 rounded-full bg-white p-1 m-1 flex items-center justify-center hover:bg-gray-100 transition-colors overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 relative' onClick={()=>setOpen(prev=>!prev)}>
        {user.image?<Image src={user.image} alt={user.name} width={32} height={32} className='object-cover rounded-full' />:<UserIcon className='w-8 h-8 text-green-600 hover:text-gray-200 transition-colors' />}
      </div>
      </div>
    </div>
  </div>
</>
);
}

export default Nav;