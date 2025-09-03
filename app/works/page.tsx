"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import React from "react"

export default function WorksPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const unwrappedSearchParams = React.use(searchParams)
  const currentPage = parseInt(unwrappedSearchParams.page || "1")
  const itemsPerPage = 2
  const [highlightVisible, setHighlightVisible] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const allProjects = [
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

  // Show all 6 projects on every page to demonstrate pagination
  const totalPages = 3
  const projects = allProjects // Display all projects regardless of page
  const totalItems = allProjects.length

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
            Your thoughts. Our ideas.
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 relative inline-block mt-2">
            Full commitment
            <div className={`absolute bottom-0 left-0 right-0 h-3 bg-blue-500 transform -skew-x-12 -z-10 transition-all duration-1000 ease-out ${highlightVisible || !isClient ? 'w-full' : 'w-0'}`}></div>
          </h2>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {projects.map((project, index) => (
              <Link href={`/works/${project.id}`} key={project.id} className={`group cursor-pointer ${index % 2 === 1 ? "md:mt-16" : ""}`}>
                <div className="bg-transparent">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="pt-6">
                    <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mt-2 leading-tight">{project.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {/* <div className="flex justify-center mt-16">
            <div className="flex space-x-2">
              {[1, 2, 3].map((page) => (
                <Link
                  key={page}
                  href={`/works?page=${page}`}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    currentPage === page
                      ? "bg-blue-500 text-gray-900"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {page}
                </Link>
              ))}
            </div>
          </div> */}
        </div>
      </section>

      <Footer />
    </div>
  )
}
