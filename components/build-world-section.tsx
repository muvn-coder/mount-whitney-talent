"use client"

import { useState, useEffect, useRef } from "react"

export function BuildWorldSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [highlightVisible, setHighlightVisible] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const images = [
    {
      src: "/branding-materials-with-yellow-accents.png",
      alt: "Branding Materials",
    },
    {
      src: "/team-photo-in-aquarium-setting.jpeg",
      alt: "Team Photo",
    },
    {
      src: "/casual-team-members-posing-together.jpg",
      alt: "Team Members",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [images.length])

  useEffect(() => {
    setIsClient(true)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setHighlightVisible(true)
        }
      },
      { threshold: 0.2 }, // Reduced threshold for earlier trigger
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-blue-500">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
          We Build Your{" "}
          <span className="relative inline-block">
            World
            <div
              className={`absolute bottom-1 left-0 h-3 bg-gray-900 transform -skew-x-12 transition-all duration-1000 ease-out -z-10 ${
                highlightVisible || !isClient ? "w-full" : "w-0"
              }`}
            ></div>
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-900 max-w-4xl mx-auto leading-relaxed mb-16">
          We are an aspiring team who keeps pursuing to supersede ourselves in our skill sets and know-how to deliver
          the best to our clients. We believe in delivering tailor-made products to our clients as every unique business
          requires a different spotlight to shine.
        </p>

        <div className="flex justify-center items-end space-x-8 overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ease-in-out transform ${
                index === currentSlide
                  ? "scale-110 opacity-100 z-10"
                  : index === (currentSlide + 1) % images.length ||
                      index === (currentSlide - 1 + images.length) % images.length
                    ? "scale-100 opacity-80"
                    : "scale-90 opacity-60"
              }`}
            >
              <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-64 h-80 object-cover rounded-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
