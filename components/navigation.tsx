"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Expertise", href: "/expertise" },
    { name: "Works", href: "/works" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHomePage = pathname === '/'
  const isOnHero = isHomePage && !isScrolled

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isOnHero 
        ? 'bg-slate-900/95 backdrop-blur-sm' 
        : 'bg-white/95 backdrop-blur-sm shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="h-30 relative -my-6 overflow-visible">
              <img 
                src="/logo.png" 
                alt="Mount Whitney Talent" 
                className="h-full w-auto object-contain" 
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  isOnHero ? 'text-white hover:text-yellow-400' : 'text-gray-700 hover:text-gray-900'
                } ${
                  pathname === item.href ? (isOnHero ? 'text-yellow-400' : 'text-gray-900') : ''
                } group`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                  pathname === item.href ? 'scale-x-100' : ''
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className={`p-2 transition-colors ${
                isOnHero ? 'text-white hover:text-yellow-300' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block relative px-3 py-2 text-base font-medium transition-colors ${
                    pathname === item.href 
                      ? 'text-yellow-600 font-bold bg-gray-50' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  } group`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-3 right-3 h-0.5 bg-yellow-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                    pathname === item.href ? 'scale-x-100' : ''
                  }`}></span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
