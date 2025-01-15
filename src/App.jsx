import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Pricing from './Pricing'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 text-center mt-12 md:mt-20">
      <h1 className="text-4xl md:text-5xl font-light mb-4 leading-tight">
        Drive Your<br className="md:hidden" /> Dream Car<br className="md:hidden" /> Today.
      </h1>
      <p className="text-gray-400 max-w-2xl mb-8 font-light text-sm md:text-base px-4">
        Redefining elegance, performance, and precision—crafted 
        for those who demand the extraordinary
      </p>
      <button className="bg-white text-black px-8 py-2.5 rounded-md hover:bg-gray-100 transition-colors font-light">
        Book Now
      </button>

      {/* Car Image Container */}
      <div className="mt-12 md:mt-16 w-full max-w-6xl mx-auto relative">
        <div className="aspect-video relative overflow-hidden rounded-lg">
          <img
            src='/car.jpg'
            alt="Luxury Sports Car"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
        </div>
      </div>
    </div>
  )
}

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => (
  <nav className="p-4 md:p-6 relative">
    {/* Mobile Nav */}
    <div className="flex items-center justify-between md:hidden">
      <Link to="/" className="text-xl font-light">CarRental</Link>
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)} 
        className="text-white z-50 transition-transform duration-200 ease-in-out"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>

    {/* Mobile Menu */}
    <div 
      className={`
        fixed inset-0 bg-black/95 backdrop-blur-sm md:hidden
        transition-all duration-300 ease-in-out transform
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        pt-20 px-4 z-40
      `}
    >
      <div className="flex flex-col space-y-6 items-center text-xl">
        <Link to="/" className="hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/about" className="hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>About us</Link>
        <Link to="/pricing" className="hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
        <Link to="/blog" className="hover:text-gray-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Blog</Link>
        <button className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-200 w-full max-w-xs">
          Explore Fleet
        </button>
      </div>
    </div>

    {/* Desktop Nav */}
    <div className="hidden md:flex items-center justify-between">
      <div className="flex-1">
        <Link to="/" className="text-2xl font-light">CarRental</Link>
      </div>
      
      <div className="flex-1 flex justify-center items-center space-x-8">
        <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
        <Link to="/about" className="hover:text-gray-300 transition-colors">About us</Link>
        <Link to="/pricing" className="hover:text-gray-300 transition-colors">Pricing</Link>
        <Link to="/blog" className="hover:text-gray-300 transition-colors">Blog</Link>
      </div>
      
      <div className="flex-1 flex justify-end">
        <button className="border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-colors">
          Explore Fleet
        </button>
      </div>
    </div>
  </nav>
)

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-montserrat overflow-hidden">
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  )
}

export default App