import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { motion } from 'motion/react'
import axios from 'axios';
import { useRouter } from 'next/navigation';

function RegisterForm({ prevStep }) {
    const [name, setname] = React.useState('');
    const [email, setemail] = React.useState('');
    const [password, setpassword] = React.useState('');
    const [showPassword, setshowPassword] = React.useState(false);
    const [loading, setLoading] = React.useState(false); // ✅ Move inside component
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const result = await axios.post('/api/auth/register', { name, email, password }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
              router.push('/login');
            if (result.status >= 200 && result.status < 300) {
                alert('Registration successful! Please log in.');
                router.push('/login');
            } else {
                alert('Registration failed. Please try again.');
            }
        } catch (error) {
            const msg = error.response?.data?.message || "Registration failed";
            alert(msg);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-white relative'>
            <div className='absolute top-6 left-6 flex items-center space-x-2 cursor-pointer' onClick={() => prevStep(1)}>
                <ArrowLeft className='w-6 h-6 text-green-600 cursor-pointer' />
                <p className='text-green-600 font-bold'>Back</p>
            </div>
            <div className='mt-6 w-full max-w-md bg-green-50 p-8 rounded-lg shadow-lg'>
                <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='text-3xl font-bold mb-6 text-green-700 text-center'>Create Your Account</motion.h2>
                <form className='space-y-4' onSubmit={handleRegister}>
                    <div>
                        <label className='block text-gray-700'>Name</label>
                        <input type="text" className='w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500' placeholder='Your Name'
                            onChange={(e) => setname(e.target.value)} value={name} />
                    </div>
                    <div>
                        <label className='block text-gray-700'>Email</label>
                        <input type="email" className='w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500' placeholder='Your Email' onChange={(e) => setemail(e.target.value)} value={email} />
                    </div>
                    <div>
                        <label className='block text-gray-700'>Password</label>
                        <input type={showPassword ? "text" : "password"} className='w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500' placeholder='Create a Password' onChange={(e) => setpassword(e.target.value)} value={password} />
                        <div className='mt-2'>
                            <input type="checkbox" id='showPassword' checked={showPassword} onChange={() => setshowPassword(!showPassword)} />
                            <label htmlFor='showPassword' className='ml-2 text-gray-700 cursor-pointer'>Show Password</label>
                        </div>
                    </div>
                    {
                        (() => {
                            const isFormValid = name.trim() !== '' && email.trim() !== '' && password.trim() !== '';
                            if (isFormValid) {
                                return (
                                    <button type="submit" className='w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300'>
                                        {loading ? "Registering..." : "Register"}
                                    </button>
                                )
                            } else {
                                return (
                                    <button type="submit" disabled className='w-full bg-gray-400 text-white py-2 rounded-md cursor-not-allowed'>Register</button>
                                )
                            }
                        })()
                    }
                </form>
                <div>
                    <p className='text-center text-gray-600 mt-4'>Already have an account? <span className='text-green-600 font-bold cursor-pointer' onClick={() => router.push("/login")}>Sign In</span></p>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm
