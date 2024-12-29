import React from 'react';
import Image from 'next/image';
import loginSideImage from '../../public/LoginSignUpSideImage.png';

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white"> 
      <div className="bg-white p-10 rounded-lg w-11/12 md:w-3/4 lg:w-3/4 relative flex gap-10"> 
        <div className="w-1/2 h-full hidden md:block"> 
          <Image 
            src={loginSideImage} 
            alt="Login Side Image" 
            objectFit="contain" 
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center"> 
          <h1 className="text-3xl font-bold mb-4">Login into your account</h1>
          <p className="text-gray-500 mb-6">
            Welcome back! Please enter your details.
          </p>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="mt-1 p-2 w-full border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex items-center justify-between my-10 mb-6">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2"/>
                <label htmlFor="remember" className="text-sm text-gray-500">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm font-semibold text-[#079455] hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="bg-[#079455] hover:bg-[#079420] text-white font-bold py-2 px-4 rounded w-full"
            >
              Sign In
            </button>
          </form>
          <div className="mt-6">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-2 px-4 rounded w-full">
              Sign In with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;