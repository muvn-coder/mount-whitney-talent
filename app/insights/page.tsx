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
      id: "nextjs-performance-optimization-2024",
      title: "Next.js Performance Optimization: Advanced Techniques for 2024",
      excerpt: "Discover cutting-edge techniques to optimize your Next.js applications for maximum performance and user experience.",
      author: "Web Development Team",
      date: "December 20, 2024",
      category: "Web Development",
      image: "/web-development-trends-2024.png",
    },
    {
      id: "react-native-vs-flutter-2024",
      title: "React Native vs Flutter: Which Framework Wins in 2024?",
      excerpt: "Comprehensive comparison of React Native and Flutter for mobile app development, including performance, ecosystem, and real-world use cases.",
      author: "Mobile Development Team",
      date: "December 18, 2024",
      category: "Mobile Development",
      image: "/mobile-first-design-concept.png",
    },
    {
      id: "defi-smart-contracts-security",
      title: "DeFi Smart Contracts: Security Best Practices and Audit Strategies",
      excerpt: "Learn essential security patterns and audit techniques for building robust DeFi applications on Ethereum and other blockchain platforms.",
      author: "Blockchain Team",
      date: "December 15, 2024",
      category: "Blockchain Development",
      image: "/digital-marketing-dashboard.png",
    },
    {
      id: "ai-ml-integration-web-apps",
      title: "AI/ML Integration in Web Applications: A Practical Guide",
      excerpt: "Step-by-step guide to integrating machine learning models into web applications using TensorFlow.js, OpenAI APIs, and modern ML frameworks.",
      author: "AI Development Team",
      date: "December 12, 2024",
      category: "AI Development",
      image: "/it-infrastructure-scalability.png",
    },
    {
      id: "microservices-architecture-scaling",
      title: "Microservices Architecture: Scaling Web Applications Beyond Monoliths",
      excerpt: "Explore proven strategies for transitioning from monolithic to microservices architecture, including containerization and orchestration.",
      author: "Web Development Team",
      date: "December 10, 2024",
      category: "Web Development",
      image: "/web-development-trends-2024.png",
    },
    {
      id: "cross-platform-mobile-performance",
      title: "Cross-Platform Mobile Performance: Native vs Hybrid vs PWA",
      excerpt: "In-depth analysis of performance characteristics across native, hybrid, and progressive web app approaches for mobile development.",
      author: "Mobile Development Team",
      date: "December 8, 2024",
      category: "Mobile Development",
      image: "/mobile-first-design-concept.png",
    },
    {
      id: "nft-marketplace-development",
      title: "NFT Marketplace Development: Building the Next OpenSea",
      excerpt: "Complete guide to creating NFT marketplaces with smart contracts, IPFS integration, and scalable backend infrastructure.",
      author: "Blockchain Team",
      date: "December 5, 2024",
      category: "Blockchain Development",
      image: "/digital-marketing-dashboard.png",
    },
    {
      id: "ai-powered-chatbots-implementation",
      title: "AI-Powered Chatbots: Implementation Strategies for Modern Businesses",
      excerpt: "Learn how to implement intelligent chatbots using natural language processing and machine learning for enhanced customer engagement.",
      author: "AI Development Team",
      date: "December 3, 2024",
      category: "AI Development",
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
            <div className={`absolute bottom-0 left-0 right-0 h-3 bg-slate-400 transform -skew-x-12 -z-10 transition-all duration-1000 ease-out ${highlightVisible || !isClient ? 'w-full' : 'w-0'}`}></div>
          </h2>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-wrap gap-8">
            {["All", "Web Development", "Mobile Development", "Blockchain Development", "AI Development"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-lg font-medium transition-colors pb-2 border-b-2 ${
                  selectedCategory === category
                    ? "text-gray-900 border-slate-400 font-bold"
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
                        <span className="bg-slate-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-lg font-bold text-gray-900 group-hover:text-slate-500 transition-colors leading-tight">
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
                        <span className="bg-slate-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                        {filteredArticles[3]?.category}
                      </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-xl font-bold text-gray-900 group-hover:text-slate-500 transition-colors leading-tight">
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
            <Link href={`/insights/${filteredArticles[4]?.id}`}>
              <div className="relative group cursor-pointer">
                <div className="relative h-full overflow-hidden">
                  <img
                    src={filteredArticles[4]?.image || "/placeholder.svg"}
                    alt={filteredArticles[4]?.title || ""}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="absolute top-4 left-4">
                      <span className="bg-slate-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                        {filteredArticles[4]?.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-slate-300 transition-colors leading-tight">
                      {filteredArticles[4]?.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed mb-2">{filteredArticles[4]?.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-white/80">
                      <div className="flex items-center gap-1">
                        <User size={12} />
                        <span>{filteredArticles[4]?.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{filteredArticles[4]?.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Row 3: Additional articles */}
          <div className="grid md:grid-cols-3 gap-8">
            {filteredArticles.slice(5).map((article) => (
              <Link key={article.id} href={`/insights/${article.id}`}>
                <article className="bg-white rounded-lg overflow-hidden group cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-slate-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-slate-500 transition-colors leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{article.excerpt}</p>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
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
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
