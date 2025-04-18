import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center px-4">
        {/* Logo */}
        <div className="mr-6 flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            {/* TODO: Replace with actual logo component or image */}
            <span className="text-xl font-bold">EbookStore</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-4 text-sm font-medium">
          <Link
            to="/"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/books"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Books
          </Link>
          <Link
            to="/categories"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Categories
          </Link>
        </nav>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Search Input */}
        <div className="hidden md:block md:w-64">
          <input
            type="search"
            placeholder="Search books..."
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4 ml-4">
          <button
            aria-label="Cart"
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path
                d="M2.05 2.05h2l2.66 12.42a2 2 0 002 1.58h9.78a2 2 0 001.95-1.57l1.65-7.43H5.12"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </button>
          <button
            aria-label="Account"
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
