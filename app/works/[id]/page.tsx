"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { useEffect, useState, useRef } from "react"

interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
  outcome: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "Singapore Grand Prix Web Development 2022",
    category: "Website Development",
    image: "/singapore-gp-website.png",
    description: "A comprehensive web development project for the Singapore Grand Prix 2022, featuring real-time updates, ticketing integration, and immersive user experience.",
    outcome: "Successfully delivered a high-performance website that handled 50,000+ concurrent users during peak event times, resulting in a 40% increase in online ticket sales compared to previous years."
  },
  {
    id: 2,
    title: "HMGICS IONQ-5 Pre-Launch Microsite - HMGICS",
    category: "Website Development",
    image: "/hmgics-ionq5-microsite.png",
    description: "An innovative pre-launch microsite for the HMGICS IONQ-5 project, showcasing cutting-edge technology and building anticipation for the official launch.",
    outcome: "Generated 10,000+ pre-registrations within the first week of launch, establishing strong market presence and creating significant buzz in the tech community."
  },
  {
    id: 3,
    title: "E-commerce Platform",
    category: "Web Development",
    image: "/modern-ecommerce-website.png",
    description: "A modern, scalable e-commerce platform with advanced features including AI-powered recommendations, seamless checkout, and mobile-first design.",
    outcome: "Increased client revenue by 150% within 6 months of launch, with conversion rates improving by 35% and average order value increasing by 25%."
  },
  {
    id: 4,
    title: "Mobile Banking App",
    category: "Mobile Development",
    image: "/mobile-banking-app.png",
    description: "A secure and user-friendly mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management tools.",
    outcome: "Achieved 4.8-star rating on app stores with 100,000+ downloads in the first quarter, reducing customer service calls by 60% through intuitive design."
  },
  {
    id: 5,
    title: "Brand Identity Design",
    category: "Branding",
    image: "/brand-identity-design-mockup.png",
    description: "Complete brand identity redesign including logo, color palette, typography, and comprehensive brand guidelines for consistent market presence.",
    outcome: "Established strong brand recognition with 80% increase in brand recall surveys and successful expansion into three new market segments."
  },
  {
    id: 6,
    title: "Corporate Website",
    category: "Web Development",
    image: "/corporate-website-design.png",
    description: "A professional corporate website showcasing company values, services, and achievements with integrated lead generation and content management system.",
    outcome: "Increased qualified leads by 200% and reduced bounce rate by 45%, establishing the company as an industry thought leader through strategic content."
  },
]

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const [isClient, setIsClient] = useState(false)
  const [projectHighlightVisible, setProjectHighlightVisible] = useState(false)
  const [outcomeHighlightVisible, setOutcomeHighlightVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsClient(true)
    
    // Use IntersectionObserver for scroll-triggered animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProjectHighlightVisible(true)
          setTimeout(() => {
            setOutcomeHighlightVisible(true)
          }, 300)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const { id } = params
  const projectId = parseInt(typeof id === 'string' ? id : '1')
  const project = projects.find(p => p.id === projectId)

  if (!project) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold text-center">Project not found</h1>
          <div className="text-center mt-8">
            <Link href="/works" className="text-yellow-600 hover:text-yellow-700">
              ← Back to works
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-2">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* The Project and Description */}
          <div className="grid md:grid-cols-12 gap-8 items-start mb-20">
            <div className="md:col-span-4 md:col-start-3">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 relative inline-block">
                The Project
                <div className={`absolute bottom-0 left-0 w-full h-3 bg-yellow-400 transform -skew-x-12 transition-all duration-1000 ease-out -z-10 ${
                  projectHighlightVisible || !isClient ? "w-full" : "w-0"
                }`}></div>
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          {/* Image and Outcome */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-80"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 relative inline-block">
                Outcome
                <div className={`absolute bottom-0 left-0 w-full h-3 bg-yellow-400 transform -skew-x-12 transition-all duration-1000 ease-out -z-10 ${
                  outcomeHighlightVisible || !isClient ? "w-full" : "w-0"
                }`}></div>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {project.outcome}
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link 
              href="/works" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700"
            >
              ← Back to all projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}