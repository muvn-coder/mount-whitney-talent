"use client"

import { useState, useEffect, useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ExpertisePage() {
  const [selectedService, setSelectedService] = useState("Website Development")
  const [highlightVisible, setHighlightVisible] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const services = [
    "Website Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "Brand Communication",
    "IT Solutions",
  ]

  const serviceContent = {
    "Website Development": {
      title: "Website Development",
      description:
        "We create stunning, responsive websites that drive results. Our team specializes in modern web technologies including React, Next.js, and cutting-edge frameworks to deliver exceptional user experiences. From simple landing pages to complex web applications, we build digital solutions that grow with your business.",
      features: ["Responsive Design", "SEO Optimization", "Performance Focused", "Modern Technologies"],
    },
    "Mobile App Development": {
      title: "Mobile App Development",
      description:
        "Transform your ideas into powerful mobile applications. We develop native iOS and Android apps, as well as cross-platform solutions using React Native and Flutter. Our mobile apps are designed for performance, usability, and scalability across all devices.",
      features: ["Native iOS & Android", "Cross-Platform Solutions", "App Store Optimization", "Push Notifications"],
    },
    "UI/UX Design": {
      title: "UI/UX Design",
      description:
        "Create intuitive and engaging user experiences that convert. Our design team focuses on user-centered design principles, conducting thorough research and testing to ensure your digital products not only look great but also provide seamless user journeys.",
      features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Usability Testing"],
    },
    "Digital Marketing": {
      title: "Digital Marketing",
      description:
        "Amplify your online presence with strategic digital marketing campaigns. We help businesses reach their target audience through SEO, social media marketing, content strategy, and paid advertising campaigns that deliver measurable results.",
      features: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"],
    },
    "Brand Communication": {
      title: "Brand Communication",
      description:
        "Build a strong brand identity that resonates with your audience. Our brand communication services include logo design, brand guidelines, messaging strategy, and comprehensive brand identity packages that tell your unique story.",
      features: ["Brand Identity", "Logo Design", "Brand Guidelines", "Messaging Strategy"],
    },
    "IT Solutions": {
      title: "IT Solutions",
      description:
        "Robust IT infrastructure and solutions to support your business operations. We provide comprehensive IT consulting, cloud solutions, system integration, and technical support to ensure your technology works seamlessly for your business goals.",
      features: ["Cloud Solutions", "System Integration", "IT Consulting", "Technical Support"],
    },
  }

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
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-left mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Elevate your digital journey with us
              <br />
              Let us build your{" "}
              <span className="relative inline-block">
                world
                <div className={`absolute bottom-0 left-0 w-full h-3 bg-yellow-400 transform -skew-x-12 transition-all duration-1000 ease-out -z-10 ${highlightVisible || !isClient ? 'w-full' : 'w-0'}`}></div>
              </span>
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Dynamic Content */}
            <div className="bg-white p-12 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {serviceContent[selectedService as keyof typeof serviceContent].title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {serviceContent[selectedService as keyof typeof serviceContent].description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Key Features:</h4>
                <ul className="space-y-2">
                  {serviceContent[selectedService as keyof typeof serviceContent].features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Services List */}
            <div className="space-y-4">
              <div className="space-y-1">
                {services.map((service) => (
                  <button
                    key={service}
                    onClick={() => setSelectedService(service)}
                    className={`w-full text-left py-2 transition-colors duration-300 text-3xl font-bold ${
                      selectedService === service
                        ? "text-yellow-500"
                        : "text-gray-900 hover:text-yellow-500"
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
