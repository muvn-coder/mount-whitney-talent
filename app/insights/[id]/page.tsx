"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Calendar, User } from "lucide-react"
import Image from "next/image"
import { use } from "react"

interface BlogPost {
  id: string
  title: string
  content: string
  author: string
  date: string
  category: string
  image: string
  keypoints?: string[]
  images?: string[]
}

const blogPosts: Record<string, BlogPost> = {
  "web-development-trends-2024": {
    id: "web-development-trends-2024",
    title: "The Future of Web Development: Trends to Watch in 2024",
    content: "The web development landscape is evolving at an unprecedented pace, driven by emerging technologies and changing user expectations. As we move into 2024, several key trends are reshaping how we build and interact with web applications.\n\nFrom the rise of AI-powered development tools to the increasing importance of web performance and accessibility, developers are facing new challenges and opportunities. The integration of machine learning capabilities into web applications is becoming more accessible, while serverless architectures continue to mature and offer scalable solutions for businesses of all sizes.\n\nProgressive Web Apps (PWAs) are reaching new levels of sophistication, blurring the lines between web and native applications. Meanwhile, the focus on sustainability in tech is driving innovations in green web development practices, ensuring that our digital solutions are not only efficient but also environmentally responsible.",
    author: "Mount Whitney Talent Team",
    date: "December 15, 2024",
    category: "Web Development",
    image: "/web-development-trends-2024.png",
    keypoints: [
      "AI-powered development tools are becoming mainstream",
      "Serverless architectures offer scalable solutions",
      "PWAs are blurring web-native boundaries",
      "Sustainability is driving green web practices"
    ],
    images: ["/web-trend-1.png", "/web-trend-2.png"]
  },
  "mobile-first-design": {
    id: "mobile-first-design",
    title: "Mobile-First Design: Why It Matters More Than Ever",
    content: "In today's digital landscape, mobile devices account for over 60% of global web traffic. This shift has fundamentally changed how we approach web design, making mobile-first design not just a best practice, but a necessity for business success.\n\nMobile-first design starts with the smallest screen in mind and progressively enhances the experience for larger devices. This approach ensures that your core content and functionality are accessible to the widest possible audience, regardless of their device capabilities.\n\nThe benefits extend beyond just accessibility. Mobile-first design often leads to cleaner, more focused user interfaces, improved performance, and better SEO rankings. Google's mobile-first indexing means that sites optimized for mobile are more likely to rank higher in search results.",
    author: "Design Team",
    date: "December 10, 2024",
    category: "Design",
    image: "/mobile-first-design-concept.png",
    keypoints: [
      "Mobile traffic exceeds 60% globally",
      "Mobile-first improves accessibility",
      "Better performance and SEO rankings",
      "Cleaner, focused user interfaces"
    ],
    images: ["/mobile-design-1.png", "/mobile-design-2.png"]
  },
  "digital-marketing-strategies": {
    id: "digital-marketing-strategies",
    title: "Digital Marketing Strategies That Actually Work",
    content: "In the crowded digital marketplace, effective marketing strategies can make the difference between business growth and stagnation. This comprehensive guide explores proven digital marketing tactics that drive real, measurable results for businesses across industries.\n\nContent marketing remains the cornerstone of successful digital strategies. By creating valuable, relevant content that addresses your audience's pain points, you build trust and authority while naturally attracting potential customers. The key is consistency and quality over quantity.\n\nSocial media marketing has evolved beyond simple posting to sophisticated community building and customer service platforms. Each platform requires a tailored approach - what works on LinkedIn won't necessarily resonate on TikTok. Understanding your audience's platform preferences is crucial.",
    author: "Marketing Team",
    date: "December 5, 2024",
    category: "Digital Marketing",
    image: "/digital-marketing-strategy.png",
    keypoints: [
      "Content marketing builds trust and authority",
      "Social media requires platform-specific approaches",
      "Consistency and quality over quantity",
      "Focus on audience pain points"
    ],
    images: ["/marketing-1.png", "/marketing-2.png"]
  },
  "scalable-it-infrastructure": {
    id: "scalable-it-infrastructure",
    title: "Building Scalable IT Infrastructure for Growing Businesses",
    content: "As businesses grow, their IT infrastructure must evolve to meet increasing demands while maintaining reliability and security. Building scalable IT systems requires careful planning, strategic investments, and a forward-thinking approach that anticipates future needs.\n\nScalability isn't just about handling more users or data - it's about creating systems that can adapt to changing business requirements without complete overhauls. This means choosing technologies and architectures that can grow incrementally, rather than requiring massive migrations when thresholds are reached.\n\nCloud computing has revolutionized how businesses approach scalability. Services like AWS, Azure, and Google Cloud offer virtually unlimited scaling potential, but success requires understanding how to architect applications for cloud-native environments. This includes implementing proper monitoring, automated scaling policies, and disaster recovery procedures.",
    author: "IT Team",
    date: "November 28, 2024",
    category: "IT Solutions",
    image: "/it-infrastructure-scalability.png",
    keypoints: [
      "Scalability requires forward-thinking planning",
      "Cloud services offer unlimited potential",
      "Automated scaling and monitoring essential",
      "Disaster recovery procedures crucial"
    ],
    images: ["/infrastructure-1.png", "/infrastructure-2.png"]
  }
}

export default function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const post = blogPosts[resolvedParams.id]

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Blog Post Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Image */}
          <div className="mb-8">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
          </div>

          {/* Title */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="bg-blue-500 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-600">
              <div className="flex items-center gap-1">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {post.content}
            </p>

            {/* Key Points */}
            {post.keypoints && post.keypoints.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Points</h2>
                <ul className="list-disc list-inside space-y-2">
                  {post.keypoints.map((point, index) => (
                    <li key={index} className="text-gray-700">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Additional Images */}
            {post.images && post.images.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Visual Examples</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {post.images.map((image, index) => (
                    <div key={index} className="relative">
                      <Image
                        src={image}
                        alt={`${post.title} - Image ${index + 1}`}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}