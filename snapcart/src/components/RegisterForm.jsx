import { ArrowLeft } from 'lucide-react'
import React from 'react'

function RegisterForm() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-white relative'>
        <div>
            <ArrowLeft className='w-6 h-6 text-gray-600 cursor-pointer' />
        </div>
        <div className='mt-6 w-full max-w-md bg-green-50 p-8 rounded-lg shadow-lg'>     
            <h2 className='text-3xl font-bold mb-6 text-green-700 text-center'>Create Your Account</h2>
            <form className='space-y-4'>
                <div>
                    <label className='block text-gray-700'>Name</label>
                    <input type="text" className='w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500' placeholder='Your Name' />
                </div>
                <div>
                    <label className='block text-gray-700'>Email</label>
                    <input type="email" className='w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500' placeholder='Your Email' />  
                </div>
                <div>
                    <label className='block text-gray-700'>Password</label>
                    <input type="password" className='w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500' placeholder='Create a Password' />
                </div>
                <button type="submit" className='w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300'>Register</button>
            </form> 
                
        </div>

    </div>
  )
}

export default RegisterForm