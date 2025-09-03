"use client"

import { useEffect, useState, useRef } from "react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div
            className={`transition-all duration-800 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              We are{" "}
              <span className="relative inline-block">
                Mount Whitney Talent
                <span
                  className={`absolute bottom-1 left-0 h-3 bg-blue-500 transform -skew-x-12 transition-all duration-1000 ease-out -z-10 ${
                    isVisible ? "w-full" : "w-0"
                  }`}
                  style={{ transitionDelay: "500ms" }}
                ></span>
              </span>
            </h2>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">We have extensive experience in</h3>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                <span className="relative">
                  <strong>IT solutions, Brand Communication, Digital Marketing, Website Development</strong>
                  <span
                    className={`absolute bottom-0 left-0 h-1 bg-blue-500/30 transition-all duration-1000 ease-out -z-10 ${
                      isVisible ? "w-full" : "w-0"
                    }`}
                    style={{ transitionDelay: "800ms" }}
                  ></span>
                </span>{" "}
                and{" "}
                <span className="relative">
                  <strong>Mobile App Development.</strong>
                  <span
                    className={`absolute bottom-0 left-0 h-1 bg-blue-500/30 transition-all duration-1000 ease-out -z-10 ${
                      isVisible ? "w-full" : "w-0"
                    }`}
                    style={{ transitionDelay: "1000ms" }}
                  ></span>
                </span>
              </p>
            </div>
          </div>

          <div
            className={`space-y-6 text-gray-600 leading-relaxed transition-all duration-800 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <p>
              We are an aspiring team with keen practicing to supersede ourselves in our skill sets and knowledge to
              deliver the best results.
            </p>
            <p>
              Our expertise in technologies and our acute interest fused together is the most innovative ways to ensure
              clients' satisfaction.
            </p>
            <p>
              We believe in delivering tailor-made products to our clients as every unique business requires a different
              approach and solution. Through our comprehensive work, we foster an unparalleled relationship and deliver
              with pride.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
