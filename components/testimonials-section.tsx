"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    content:
      "Mount Whitney Talent transformed our digital presence completely. Their attention to detail and innovative approach exceeded our expectations.",
    avatar: "/professional-woman-avatar.png",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CTO, InnovateNow",
    content:
      "Working with Mount Whitney Talent was a game-changer. They delivered a solution that perfectly aligned with our business goals.",
    avatar: "/professional-man-avatar.png",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Marketing Director, GrowthCo",
    content:
      "The team at Mount Whitney Talent is exceptional. They understood our vision and brought it to life with remarkable precision.",
    avatar: "/professional-woman-avatar.png",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [highlightVisible, setHighlightVisible] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsClient(true)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setHighlightVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            We're the service on{" "}
            <span className="relative inline-block">
              everyone's lips
              <div
                className={`absolute bottom-0 left-0 w-full h-3 bg-blue-500 transform -skew-x-12 transition-all duration-1000 ease-out -z-10 ${
                  highlightVisible || !isClient ? "w-full" : "w-0"
                }`}
              ></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600">What our clients say about us</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center">
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-blue-500 hover:bg-blue-600 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
