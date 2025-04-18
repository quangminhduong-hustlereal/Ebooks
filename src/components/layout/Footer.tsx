import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row md:h-24 px-4">
        <p className="text-sm text-gray-600 text-center md:text-left">
          &copy; {new Date().getFullYear()} <Link to="/" className="font-semibold hover:underline">EbookStore</Link>. All rights reserved.
        </p>
        <nav className="flex items-center space-x-4">
          <Link to="/about" className="text-sm text-gray-600 hover:text-gray-800 transition-colors">
            About
          </Link>
          <Link to="/privacy" className="text-sm text-gray-600 hover:text-gray-800 transition-colors">
            Privacy
          </Link>
          <Link to="/terms" className="text-sm text-gray-600 hover:text-gray-800 transition-colors">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
