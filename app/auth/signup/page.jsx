// app/auth/signup/page.jsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Sign up data:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Logo Header */}
      <div className="p-4 flex justify-center mt-8 mb-4">
        <Image 
          src="/images/dream-lotto-logo.png" // Replace with your actual logo path
          alt="Logo"
          width={80} 
          height={80}
          priority
        />
      </div>

      <div className="flex-1 flex flex-col justify-center px-6">
        <h1 className="text-2xl font-bold text-center mb-6">Create an Account</h1>
        
        {/* Google Sign Up Button */}
        <button className="w-full flex items-center justify-center bg-white border border-gray-300 rounded-lg py-3 px-4 mb-4 shadow-sm">
          <FcGoogle className="text-xl mr-2" />
          <span>Sign up with Google</span>
        </button>
        
        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 text-sm">or</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        
        {/* Sign Up Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none focus:border-yellow-50"
              placeholder="Enter your full name"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none focus:border-yellow-50"
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none focus:border-yellow-50"
                placeholder="Create a password"
                required
              />
              <button 
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
              </button>
            </div>
          </div>
          
          <Link href="/home">
          <button 
            type="submit" 
            className="w-full bg-yellow-500 text-black font-medium py-3 rounded-lg mb-4"
          >
            Sign Up
          </button>
          </Link>
        </form>
        
        <p className="text-center text-gray-600">
          Already have an account?{' '}
          <Link href="/auth/signin" className="text-yellow-500 font-medium">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;