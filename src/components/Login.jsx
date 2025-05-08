
import React from 'react'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useNavigate } from 'react-router-dom'

const Login =() =>{

    const  SITE_KEY ="6LfVuDArAAAAADsEVke1LOhS4h0EWj9tIsnxvQbX"
    const navigate = useNavigate ();
    const uniqId = useId();
    const [formData, setFormData]= useState({
        email:'',
        password:'',
        reCaptchaVerified: false
    })

    const handleChange =(e) => {
        setFormData({
            ...target,
            [e.target.name]:e.target.value
        })
    }
    const handleRecaptchachange =(value) =>{
        console.log(value)
        //const isVerified = value? true: false;
        const isVerified =!!value;
        setFormData({
            ...formData,
            reCaptchaVerified: isVerified
        })
    }
    const handlesumbit =(e) => {
        e.preventDefault();
        if(formData.email !='admin@gmail.com')return;
        if(formData.password !='admin123')return;
        if(formData.reCaptchaVerified) return;

        
        alert('Login successful')
    }
    return(
        <div className='flex justify-center'>
        <form onSubmit={handlesumbit}>

        <h1 className="text-4x1 text-center my-10">Login Form</h1>
        <div className="mb-4 text-x1 flex flex-col">
        <label htmlFor="email">Enter Email</label>
        <input type="text" name="email" id="email" id={`${uniqId}-email`}
          className="text-x1 border-2 border-gray-300 rounded-1g p-1" onChange={handleChange} value={FormData.email}/>
        </div>

        <div className="mb-4">  
        <label htmlFor="password">Enter password</label>
        <input type="password" name="password" id="password" onChange={handleChamge} value={foemData.password}/>
        </div>
        
        <div className="mb-4">

        <ReCAPTCHA sitekey={SITE_KEY} onChange={handleChange} />
        </div>


        <div className="mb-4">

        <button type="submit" className='bg-blue-400 hover: bg-blue bg-blue-600'>Login</button>
        </div>
        </form>
        </div>
    )
}

export default Login

