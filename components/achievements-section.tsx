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
  const [isVisible, setIsVisible] = useState(true)

  const achievements = [
    { number: 20, label: "IT Solutions", delay: 0 },
    { number: 29, label: "Portal & CMS", delay: 200 },
    { number: 503, label: "Creatives", delay: 400 },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-[fadeInUp_1s_ease-out_forwards]">
            Our{" "}
            <span className="relative inline-block">
              Achievements
              <div className="absolute bottom-1 left-0 h-3 bg-yellow-400 transform -skew-x-12 animate-[slideIn_1s_ease-out_0.5s_both] -z-10"></div>
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.label}
              className={`animate-[fadeInUp_0.8s_ease-out_forwards] ${index === 1 ? "md:mt-12" : ""}`}
              style={{ animationDelay: `${achievement.delay + 500}ms` }}
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
      `}</style>
    </section>
  )
}
