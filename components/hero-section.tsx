"use client"

import { useEffect, useState } from "react"
import { Lightbulb, Cog, Smartphone, Monitor, Palette } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const services = [
    { icon: Lightbulb, label: "IT SOLUTIONS", delay: 0 },
    { icon: Cog, label: "BRAND COMMUNICATION", delay: 200 },
    { icon: Smartphone, label: "DIGITAL MARKETING", delay: 400 },
    { icon: Monitor, label: "WEBSITE DEVELOPMENT", delay: 600 },
    { icon: Palette, label: "MOBILE APP DEVELOPMENT", delay: 800 },
  ]

  return (
    <section className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700 min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 300" className="w-full h-64 text-slate-600 opacity-30">
          <path
            fill="currentColor"
            d="M0,300 L0,200 L100,200 L100,150 L200,150 L200,100 L300,100 L300,180 L400,180 L400,120 L500,120 L500,160 L600,160 L600,80 L700,80 L700,140 L800,140 L800,90 L900,90 L900,170 L1000,170 L1000,110 L1100,110 L1100,190 L1200,190 L1200,300 Z"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Building and transforming businesses through{" "}
            <span className="relative inline-block">
              design innovation
              <div
                className={`absolute bottom-1 left-0 h-2 bg-yellow-400 transform -skew-x-12 transition-all duration-1000 ease-out -z-10 ${
                  isVisible ? "w-full" : "w-0"
                }`}
                style={{ transitionDelay: "800ms" }}
              ></div>
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            We are a digital agency with extensive experience in Web, App, IT Solutions, Digital Marketing, Brand
            Communication Solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 lg:gap-16 mt-16">
          {services.map((service, index) => (
            <div
              key={service.label}
              className={`transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-75 translate-y-8"
              }`}
              style={{ transitionDelay: `${service.delay + 400}ms` }}
            >
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-3 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-lg hover:shadow-xl">
                  <service.icon size={32} className="text-slate-900" />
                </div>
                <span className="text-xs text-gray-300 font-medium text-center max-w-20 leading-tight uppercase tracking-wide">
                  {service.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .group:hover .w-20 {
            animation: float 2s ease-in-out infinite;
          }
        `}</style>
      </div>
    </section>
  )
}
