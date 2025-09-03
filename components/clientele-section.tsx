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
  const [isVisible, setIsVisible] = useState(true)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-[fadeInUp_1s_ease-out_forwards]">
            Our{" "}
            <span className="relative inline-block">
              clientele
              <div className="absolute bottom-1 left-0 h-3 bg-yellow-400 transform -skew-x-12 animate-[slideIn_1s_ease-out_0.5s_both] -z-10"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-[fadeInUp_1s_ease-out_0.3s_both]">
            Trusted by leading companies worldwide to deliver exceptional digital solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 animate-[fadeInScale_0.7s_ease-out_forwards] grayscale hover:grayscale-0 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
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

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideIn {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.75);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  )
}
