"use client"
import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Bike, User, UserCogIcon } from 'lucide-react'

function EditRoleMobile() {
    const [roles, setRole] = useState([
        { id: "user", label: "User", icon: User },
        { id: "admin", label: "Admin", icon: UserCogIcon },
        { id: "deliveryBoy", label: "Delivery Boy", icon: Bike }
    ])
    const [selectedRole, setSelectedRole] = useState("")

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
            <div className='flex flex-col md:flex-row justify-center items-center gap-6 mt-10'>
                {roles.map((role) => {
                    const Icon = role.icon;
                    const isSelected = selectedRole === role.id;

                    return (
                        <motion.div
                        whileTap={{scale:0.96}}
                        onClick={()=>setSelectedRole(role.id)}
                            key={role.id}   
                            className={`flex flex-col items-center justify-center w-48 h-44 rounded-2xl border-2 transition-all ${isSelected
                                    ? "border-green-600"
                                    : "border-gray-300 bg-white hover:border-green-400"
                                }`}
                        >
                            <Icon />
                            <span>{role.label}</span>
                        </motion.div>
                    );
                })}
            </div>


        </div>
    )
}

export default EditRoleMobile