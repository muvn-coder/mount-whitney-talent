"use client"

import Image from "next/image"
import { useEffect, useState, useRef } from "react"

const clients = [
  { name: "TechCorp", logo: "/abstract-tech-logo.png" },
  { name: "InnovateLab", logo: "/innovation-lab-logo.png" },
  { name: "DigitalFlow", logo: "/digital-agency-logo.png" },
  { name: "StartupHub", logo: "/startup-incubator-logo.png" },
  { name: "CreativeStudio", logo: "/creative-studio-logo.png" },
  { name: "BusinessPro", logo: "/business-consulting-logo.png" },
]

export function ClienteleSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [highlightVisible, setHighlightVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
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
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span className="relative inline-block">
              clientele
              <div
                className={`absolute bottom-1 left-0 h-3 bg-yellow-400 transform -skew-x-12 transition-all duration-1000 ease-out -z-10 ${
                  highlightVisible ? "w-full" : "w-0"
                }`}
              ></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by leading companies worldwide to deliver exceptional digital solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={120}
                height={80}
                className="max-w-full h-auto opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
