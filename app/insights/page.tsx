"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Calendar, User, ArrowRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"

export default function InsightsPage() {
  const [highlightVisible, setHighlightVisible] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  
  const articles = [
    {
      id: "web-development-trends-2024",
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping the web development landscape and how they impact business growth.",
      author: "Mount Whitney Talent Team",
      date: "December 15, 2024",
      category: "Web Development",
      image: "/web-development-trends-2024.png",
    },
    {
      id: "mobile-first-design",
      title: "Mobile-First Design: Why It Matters More Than Ever",
      excerpt: "Understanding the importance of mobile-first approach in today's digital landscape.",
      author: "Design Team",
      date: "December 10, 2024",
      category: "Design",
      image: "/mobile-first-design-concept.png",
    },
    {
      id: "digital-marketing-strategies",
      title: "Digital Marketing Strategies That Actually Work",
      excerpt: "Proven digital marketing tactics that drive real results for businesses of all sizes.",
      author: "Marketing Team",
      date: "December 5, 2024",
      category: "Digital Marketing",
      image: "/digital-marketing-strategy.png",
    },
    {
      id: "scalable-it-infrastructure",
      title: "Building Scalable IT Infrastructure for Growing Businesses",
      excerpt: "Essential considerations for creating IT systems that grow with your business needs.",
      author: "IT Team",
      date: "November 28, 2024",
      category: "IT Solutions",
      image: "/it-infrastructure-scalability.png",
    },
  ]

  const [selectedCategory, setSelectedCategory] = useState("All")

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
  
  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
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

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-wrap gap-8">
            {["All", "Web Development", "Design", "Digital Marketing", "IT Solutions"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-lg font-medium transition-colors pb-2 border-b-2 ${
                  selectedCategory === category
                    ? "text-gray-900 border-blue-500 font-bold"
                    : "text-gray-600 border-transparent hover:text-gray-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Row 1: Three equal cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {filteredArticles.slice(0, 3).map((article, index) => (
              <Link href={`/insights/${article.id}`} key={article.title}>
                <article className="group cursor-pointer">
                  <div className="bg-white overflow-hidden">
                    <div className="relative overflow-hidden mb-4">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-500 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                        {article.title}
                      </h2>
                      <p className="text-gray-600 text-sm leading-relaxed">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500 pt-2">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <User size={14} />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{article.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Row 2: Large card + Image with overlay */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Large card spanning 2 columns */}
            <div className="md:col-span-2">
              <Link href={`/insights/${filteredArticles[3]?.id}`}>
                <article className="group cursor-pointer">
                  <div className="bg-white rounded-lg overflow-hidden">
                    <div className="relative overflow-hidden mb-4">
                      <img
                        src={filteredArticles[3]?.image || "/placeholder.svg"}
                        alt={filteredArticles[3]?.title || ""}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                          {filteredArticles[3]?.category}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors leading-tight">
                        {filteredArticles[3]?.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed">{filteredArticles[3]?.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 pt-3">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User size={16} />
                            <span>{filteredArticles[3]?.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{filteredArticles[3]?.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </div>

            {/* Image with overlay text */}
            <Link href={`/insights/${filteredArticles[0]?.id}`}>
              <div className="relative group cursor-pointer">
                <div className="relative h-full overflow-hidden">
                  <img
                    src={filteredArticles[0]?.image || "/placeholder.svg"}
                    alt={filteredArticles[0]?.title || ""}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                        {filteredArticles[0]?.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors leading-tight">
                      {filteredArticles[0]?.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed mb-2">{filteredArticles[0]?.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-white/80">
                      <div className="flex items-center gap-1">
                        <User size={12} />
                        <span>{filteredArticles[0]?.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{filteredArticles[0]?.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Row 3: Same as Row 1 */}
          <div className="grid md:grid-cols-3 gap-8">
            {filteredArticles.slice(1, 4).map((article, index) => (
              <article key={article.title + index} className="group cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden">
                  <div className="relative overflow-hidden mb-4">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-lg font-bold text-gray-900 group-hover:text-yellow-600 transition-colors leading-tight">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-2">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{article.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
