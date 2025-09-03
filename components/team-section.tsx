"use client"

import { useEffect, useState, useRef } from "react"

export function TeamSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [highlightVisible, setHighlightVisible] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!isClient) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !highlightVisible) {
          setIsVisible(true)
          setHighlightVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [highlightVisible, isClient])

  const teamMembers = [
    { id: 1, name: "Alex Chen", role: "Lead Developer", quote: "Code is poetry in motion", isYellow: true },
    { id: 2, name: "Sarah Kim", role: "UI/UX Designer", quote: "Design is thinking made visual", isYellow: false },
    { id: 3, name: "Mike Johnson", role: "Project Manager", quote: "Excellence is in the details", isYellow: true },
    { id: 4, name: "Emma Davis", role: "Frontend Developer", quote: "Creating seamless experiences", isYellow: false },
    { id: 5, name: "David Wilson", role: "Brand Designer", quote: "Every brand tells a story", isYellow: false },
    { id: 6, name: "Lisa Zhang", role: "Backend Developer", quote: "Building robust foundations", isYellow: true },
    {
      id: 7,
      name: "Tom Rodriguez",
      role: "Creative Director",
      quote: "Innovation through creativity",
      isYellow: false,
    },
    { id: 8, name: "Anna Lee", role: "Product Manager", quote: "Turning ideas into reality", isYellow: true },
    { id: 9, name: "James Park", role: "Full Stack Developer", quote: "Bridging frontend and backend", isYellow: true },
    { id: 10, name: "Maya Patel", role: "Visual Designer", quote: "Beauty meets functionality", isYellow: false },
    { id: 11, name: "Chris Brown", role: "DevOps Engineer", quote: "Streamlining development", isYellow: true },
    {
      id: 12,
      name: "Sophie Taylor",
      role: "Marketing Manager",
      quote: "Connecting brands with people",
      isYellow: false,
    },
    { id: 13, name: "Ryan Murphy", role: "Mobile Developer", quote: "Mobile-first mindset", isYellow: false },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet the{" "}
            <span className="relative inline-block">
              Team
              <div
                  className={`absolute bottom-1 left-0 h-3 bg-blue-500 transform -skew-x-12 transition-all duration-1000 ease-out -z-10 ${
                    highlightVisible || !isClient ? "w-full" : "w-0"
                  }`}
                ></div>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-3 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`transition-all duration-600 ease-out relative ${
                isVisible || !isClient ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 100 + 500}ms` }}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="group cursor-pointer relative">
                <div
                  className={`w-full aspect-square ${
                    member.isYellow ? "bg-blue-500" : "bg-gray-100"
                  } flex items-center justify-center transform transition-all duration-300 group-hover:brightness-75 relative overflow-hidden`}
                >
                  <img
                    src={
                      member.isYellow
                        ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Qmm1t5VUTE74Zy6RSzqFJ9P2ATQ8nE.png"
                        : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CHR23m10RSN6Y5yzhGzpONScRvFmSZ.png"
                    }
                    alt={member.name}
                    className="w-36 h-36 object-contain"
                  />

                  {hoveredMember === member.id && (
                    <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-between p-6 text-white animate-in fade-in duration-200">
                      <div className="text-center">
                        <h4 className="font-bold text-lg">{member.name}</h4>
                        <p className="text-base italic mb-3">"{member.quote}"</p>
                      </div>
                      <div className="text-left">
                        <p className="text-base text-blue-500">{member.role}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
