"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export default function ContactPage() {
  const [highlightVisible, setHighlightVisible] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsClient(true)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHighlightVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section ref={sectionRef} className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
            Love to hear from you
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 relative inline-block mt-2">
            Get in touch
            <div className={`absolute bottom-0 left-0 right-0 h-3 bg-slate-400 transform -skew-x-12 -z-10 transition-all duration-1000 ease-out ${highlightVisible || !isClient ? 'w-full' : 'w-0'}`}></div>
          </h2>
        </div>
      </section>



      <ContactSection />
      <Footer />
    </div>
  )
}
