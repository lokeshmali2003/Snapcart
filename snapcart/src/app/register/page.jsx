"use client"
import React, {useState} from 'react'
import Welcome from '@/components/Welcome.jsx'
import RegisterForm from '@/components/RegisterForm.jsx'

function Register() {
    const [step , setStep] = useState(1);
  return (
    <div>
        {step === 1 ? <Welcome nextStep={() => setStep(2)} /> : <RegisterForm />}

    </div>
  )
}

export default Register