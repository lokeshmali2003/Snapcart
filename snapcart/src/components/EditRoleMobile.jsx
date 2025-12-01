"use client"
import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Bike, User, UserCogIcon } from 'lucide-react'

function EditRoleMobile() {
    const [role, setRole] = useState([
        { id: "user", label: "User", icon: User },
        { id: "admin", label: "Admin", icon: UserCogIcon },
        { id: "deliveryBoy", label: "Delivery Boy", icon: Bike }
    ])
    return (
        <div className='flex flex-col min-h-screen p-6 w-full'>
            <motion.h1
                initial={{
                    opacity: 0,
                    y: -20
                }}
                animate={
                    {
                        opacity: 1,
                        y: 0
                    }
                }
                transition={{
                    duration: 0.6
                }}
                className='text-3xl md:text-4xl font-extrabold text-green-700 text-center mt-8'
            >Sele Your Role</motion.h1>
            <div className='flex flex-col md:flex-row justify-center items-center gap-6  mt-10'>
              {rol3e.map((role)=>{
                const Icon =role.icon
                return(
                    <motion.div>

                    </motion.div>
                )
              })}
            </div>

        </div>
    )
}

export default EditRoleMobile