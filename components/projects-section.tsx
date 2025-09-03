"use client"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"

const projects = [
  {
    id: 1,
    title: "Singapore Grand Prix Web Development 2022",
    category: "Website Development",
    image: "/singapore-gp-website.png",
  },
  {
    id: 2,
    title: "HMGICS IONQ-5 Pre-Launch Microsite - HMGICS",
    category: "Website Development",
    image: "/hmgics-ionq5-microsite.png",
  },
  {
    id: 3,
    title: "Brand Identity Design",
    category: "Branding",
    image: "/brand-identity-design-mockup.png",
  },
  {
    id: 4,
    title: "Corporate Website",
    category: "Web Development",
    image: "/corporate-website-design.png",
  },
]

export function ProjectsSection() {
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

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore some of our{" "}
            <span className="relative inline-block">
              Our Projects
              <div
                className={`absolute bottom-1 left-0 h-3 bg-slate-400 transform -skew-x-12 transition-all duration-1000 ease-out -z-10 ${
                  highlightVisible || !isClient ? "w-full" : "w-0"
                }`}
              ></div>
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={project.id} className={`group cursor-pointer ${index % 2 === 1 ? "md:mt-16" : ""}`}>
              <div className="relative overflow-hidden mb-6">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={320}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <span className="text-gray-500 text-sm font-medium">{project.category}</span>
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
