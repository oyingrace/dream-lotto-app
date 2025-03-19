// app/auth/signin/page.jsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
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
    console.log('Sign in data:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg-primary flex flex-col">
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
        <h1 className="text-2xl font-bold text-center mb-6 dark:text-dark-text-primary">Welcome Back</h1>
        
        {/* Google Sign In Button */}
        <button className="w-full flex items-center justify-center bg-white dark:bg-dark-bg-secondary border border-gray-300 dark:border-gray-700 rounded-lg py-3 px-4 mb-4 shadow-sm dark:text-dark-text-primary">
          <FcGoogle className="text-xl mr-2" />
          <span>Sign in with Google</span>
        </button>
        
        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-gray-300 dark:border-gray-700"></div>
          <span className="mx-4 text-gray-500 dark:text-dark-text-secondary text-sm">or</span>
          <div className="flex-1 border-t border-gray-300 dark:border-gray-700"></div>
        </div>
        
        {/* Sign In Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-dark-bg-secondary dark:text-dark-text-primary rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none focus:border-yellow-50"
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-dark-text-secondary mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 dark:bg-dark-bg-secondary dark:text-dark-text-primary rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none focus:border-yellow-50"
                placeholder="Enter your password"
                required
              />
              <button 
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-dark-text-secondary"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
              </button>
            </div>
          </div>
          
          <div className="flex justify-end mb-6">
            <Link href="/auth/signin" className="text-sm text-yellow-500 dark:text-dream-yellow-light">
              Forgot Password?
            </Link>
          </div>
         
          <Link href="/home">
            <button 
              type="submit" 
              className="w-full bg-yellow-500 dark:bg-dream-yellow text-black font-medium py-3 rounded-lg mb-4 hover:bg-yellow-600 dark:hover:bg-dream-yellow-dark transition-colors"
            >
              Sign In
            </button>
          </Link>
        </form>
        
        <p className="text-center text-gray-600 dark:text-dark-text-secondary">
          Don&apos;t have an account?{' '}
          <Link href="/auth/signup" className="text-yellow-500 dark:text-dream-yellow-light font-medium">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;