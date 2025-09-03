"use client"

import { useEffect, useState, useRef } from "react"

interface CounterProps {
  end: number
  duration: number
  delay: number
  isVisible: boolean
}

function Counter({ end, duration, delay, isVisible }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const timer = setTimeout(() => {
      let start = 0
      const increment = end / (duration / 16)
      const counter = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(counter)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(counter)
    }, delay)

    return () => clearTimeout(timer)
  }, [end, duration, delay, isVisible])

  return <span>{count}</span>
}

export function AchievementsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [highlightVisible, setHighlightVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => {
            setHighlightVisible(true)
          }, 300)
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

  const achievements = [
    { number: 20, label: "IT Solutions", delay: 0 },
    { number: 29, label: "Portal & CMS", delay: 200 },
    { number: 503, label: "Creatives", delay: 400 },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our{" "}
            <span className="relative inline-block">
              Achievements
              <div
                className={`absolute bottom-1 left-0 h-3 bg-yellow-400 transform -skew-x-12 transition-all duration-1000 ease-out -z-10 ${
                  highlightVisible ? "w-full opacity-100" : "w-0 opacity-0"
                }`}
              ></div>
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.label}
              className={`transition-all duration-800 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${index === 1 ? "md:mt-12" : ""}`}
              style={{ transitionDelay: `${achievement.delay + 500}ms` }}
            >
              <div className="text-6xl md:text-7xl font-bold text-yellow-400 mb-4">
                <Counter
                  end={achievement.number}
                  duration={2000}
                  delay={achievement.delay + 800}
                  isVisible={isVisible}
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{achievement.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
