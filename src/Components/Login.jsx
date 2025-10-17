// Login.js
import React, { useState } from 'react';
import { X, Mail, Phone } from 'lucide-react';

const Login = ({ activeLogin, setActiveLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [activeTab, setActiveTab] = useState('email');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeTab === 'email') {
      console.log('Sign in attempted with:', { email, password });
    } else {
      console.log('Sign in attempted with:', { mobile, password });
    }
    setActiveLogin(false);
  };

  if (!activeLogin) return null;

  return (
    <div className="fixed top-0 right-0 z-50 transition-all duration-300 ease-in-out border-1 border-gray-700">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md relative">
        {/* Close Button */}
        <button 
          className=" top-4 right-4 w-8 h-8 m-2 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors z-10" 
          onClick={() => setActiveLogin(false)}
        >
          <X size={20} />
        </button>

        {/* Form */}
        <div className="p-8 pt-6">
          

        {/* Header */}
        <div className="bg-blue-950 text-white p-4 pt-8  pb-10 rounded-lg">
          <h1 className="text-2xl font-bold mb-3">Sign in to your account!</h1>
          <p className="text-sm text-blue-50">
            Get access to exclusive deals, save travellers' details for quicker bookings and manage your upcoming bookings with ease!
          </p>
        </div>
          <h2 className="text-center text-black text-lg font-semibold mt-8 mb-6">Sign in using your</h2>

          {/* Tabs */}
          <div className="flex gap-8 mb-8 justify-center">
            <button
              type="button"
              onClick={() => setActiveTab('email')}
              className={`flex items-center gap-2 pb-2 font-medium transition-colors relative ${
                activeTab === 'email' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Mail size={18} />
              Email Address
              {activeTab === 'email' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400 rounded-full"></div>
              )}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('mobile')}
              className={`flex items-center gap-2 pb-2 font-medium transition-colors relative ${
                activeTab === 'mobile' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Phone size={18} />
              Mobile Number
              {activeTab === 'mobile' && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400 rounded-full"></div>
              )}
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {activeTab === 'email' ? (
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            ) : (
              <div className="mb-4">
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="+965 XXXX XXXX"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            )}

            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 rounded-md transition-colors mb-4"
            >
              Sign In
            </button>
          </form>

          {/* Footer Links */}
          <div className="text-center">
            <button type="button" className="text-blue-600 hover:underline text-sm font-medium">
              Forgot your password?
            </button>
          </div>

          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">Don't have an account? </span>
            <button type="button" className="text-blue-600 hover:underline font-medium">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
