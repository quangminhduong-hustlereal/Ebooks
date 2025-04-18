import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa'
import { IoLogoGoogleplus } from "react-icons/io";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Add login logic here
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Sign in to your account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign In
          </button>
        </form>
        <div className="mt-6">
          <p className="text-center text-sm text-gray-600">Or continue with</p>
          <div className="mt-4 flex justify-center space-x-4">
            <button className="flex items-center px-4 py-2 border rounded-md shadow-sm hover:bg-gray-100 transition-colors">
              <IoLogoGoogleplus className="text-red-500 w-5 h-5" /> {/* Icon Google */}
              <span className="ml-2 text-sm font-medium text-gray-700">Google</span>
            </button>
            <button className="flex items-center px-4 py-2 border rounded-md shadow-sm hover:bg-gray-100 transition-colors">
              <FaFacebook className="text-blue-600 w-5 h-5" /> {/* Icon Facebook */}
              <span className="ml-2 text-sm font-medium text-gray-700">Facebook</span>
            </button>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-indigo-600 hover:text-indigo-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
