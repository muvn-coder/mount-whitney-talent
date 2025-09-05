"use client"

import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="fixed bottom-16 right-4 md:bottom-24 md:right-8 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        className={`
          bg-white hover:bg-gray-100 text-gray-900 
          rounded-lg p-2 md:p-3 shadow-lg transition-all duration-300 border border-gray-300
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
        `}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-5 w-5 md:h-6 md:w-6" />
      </button>
    </div>
  )
}