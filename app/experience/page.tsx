"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react"
import { Footer } from "@/components/footer"

const experiences = [

   {
    title: "Back-End Engineer",
    company: "Tyrhal (ترحال)",
    type: "Production System · Remote",
    period: "Dec 2025 – Present",
    achievements: [
      "Designed and built scalable backend services using NestJS for travel packages, agencies, bookings, and users",
      "Implemented approval workflows and content moderation for agencies and travel packages",
      "Built package availability and pricing logic (available, on-discount, unavailable) with strong validation rules",
      "Developed optimized PostgreSQL queries and Prisma data models for high-performance filtering and search",
      "Worked on production-grade API endpoints used by real customers and travel agencies",
    ],
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "REST APIs", "System Design", "DigitalOcean"],
    color: "from-indigo-500 to-blue-600",
  },
  {
    title: "Backend Developer",
    company: "Portals - Event Management Platform",
    type: "Freelance, Remote",
    period: "Feb 2025 – May 2025",
    achievements: [
      "Engineered backend services in NestJS, PostgreSQL, Prisma",
      "Implemented real-time notification system (SSE)",
      "Designed optimized database schemas to handle high-volume concurrent traffic",
      "Delivered analytics APIs powering dashboards for users",
    ],
    technologies: ["NestJS", "PostgreSQL", "Prisma", "SSE", "Docker", "GitHub Actions"],
    color: "from-blue-500 to-cyan-500",
  },

  {
    title: "Backend Engineer",
    company: "Ammerli",
    type: "Freelance",
    period: "Sep 2025 - Present",
    achievements: [
      "Engineered comprehensive backend for a delivery and service mobile application",
      "Built scalable architecture using NestJS, TypeORM, and PostgreSQL",
      "Integrated Chargili payments, OTP SMS, and FCM notifications",
      "Implemented robust infrastructure with Docker, MinIO storage, and automated backups",
      "Optimized performance with Redis caching and conducted k6 load testing",
    ],
    technologies: ["NestJS", "TypeORM", "PostgreSQL", "Redis", "Docker", "MinIO", "Grafana", "k6", "FCM"],
    color: "from-purple-600 to-indigo-600",
  },
]

const hackathons = [
  {
    title: "Assurini – FutureCaravans Hackathon",
    date: "Sep 2025",
    description: "A next-gen, tech-boosted insurance platform transforming the car accident experience.",
    achievements: [
      "Streamlined claims process by connecting multiple insurance companies",
      "Developed AI agent for accident scene reconstruction and damage estimation",
      "Built user-friendly mobile app with modern UI",
      "Delivered complex MVP in 48 hours",
    ],
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "Graphql", "Kafka", "Redis", "Docker"],
    color: "from-teal-500 to-emerald-500",
  },
  {
    title: "Boumerdes Smart City (BSC)",
    date: "Nov 2024",
    description: "Developed admin dashboard and backend for hotel/tourist attraction reservations",
    achievements: [
      "Integrated analytics using Chart.js for tourism insights",
      "Built comprehensive reservation management system",
    ],
    technologies: ["Next.js", "Express.js", "MongoDB", "Chart.js"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "IntelliPower – AI Security System",
    date: "April 2025",
    description: "Designed IoT architecture integrating AI-based facial recognition",
    achievements: [
      "Rendered sensor layouts in 3D visualizations",
      "Implemented MQTT communication protocols"
    ],
    technologies: ["MQTT", "IoT", "AI Face Recognition"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Qurbani Management Platform – JunctionX Algiers Winner",
    date: "Apr 2025",
    description: "Hackathon-winning platform enabling AI-based sacrifice video validation and transparent donation tracking.",
    achievements: [
      "Trained AI model to detect sheep presence and donor name in sacrifice videos",
      "Automated blood blur processing before upload to Cloudinary",
      "Implemented Kafka-based microservices for video processing and notifications",
      "Built offline-first mobile app for donation tracking in low-connectivity areas",
      "Won 4th place at JunctionX Algiers 2025 Hackathon"
    ],
    technologies: ["FastAPI", "Python", "React Native", "Kafka", "PostgreSQL", "Cloudinary", "AI/ML"],
    color: "from-yellow-500 to-amber-500",
  },
]


export default function Experience() {
  return (
    <div className="min-h-screen bg-black p-4 scan-lines">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to dashboard
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <Briefcase className="w-8 h-8 text-green-400" />
            <h1 className="text-3xl font-bold text-green-400 neon-text">Professional Experience</h1>
          </div>
          <p className="text-green-300">Backend Software Engineer • 2+ years of experience</p>
        </div>

        {/* Professional Experience */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl font-bold text-green-400 mb-6">Professional Experience</h2>

          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-green-500/30 hover:border-green-400 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${exp.color} flex-shrink-0`}>
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-green-400 text-xl mb-2">{exp.title}</CardTitle>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-green-300">
                        <TrendingUp className="w-4 h-4" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-4 text-green-300/80 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.type}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Achievements */}
                <div>
                  <h4 className="text-green-400 font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2 text-green-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-green-400 font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="bg-green-500/20 text-green-300 border border-green-500/30"
                        variant="outline"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Hackathon Achievements */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-green-400 mb-6">Hackathon Achievements</h2>

          {hackathons.map((hackathon, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-green-500/30 hover:border-green-400 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${hackathon.color} flex-shrink-0`}>
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-green-400 text-xl mb-2">{hackathon.title}</CardTitle>
                    <div className="flex items-center gap-1 text-green-300/80 text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      {hackathon.date}
                    </div>
                    <p className="text-green-300">{hackathon.description}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Achievements */}
                <div>
                  <h4 className="text-green-400 font-semibold mb-2">Achievements:</h4>
                  <ul className="space-y-1">
                    {hackathon.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2 text-green-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-green-400 font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {hackathon.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="bg-purple-500/20 text-purple-300 border border-purple-500/30"
                        variant="outline"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Terminal Output */}
        <div className="mt-8 border border-green-500/30 rounded-lg p-4 bg-gray-900/20">
          <div className="text-green-400 text-sm font-mono">
            <div>zakaria@portfolio:~$ experience --summary</div>
            <div className="text-green-300 mt-1">
              [✓] 2+ years Backend Software Engineering experience
              <br />
              [✓] Freelance: Event Management Platform (100k+ records, sub-200ms APIs)
              <br />
              [✓] Academic: Student-Company Matching Platform (200+ matches)
              <br />
              [✓] Hackathons: Smart City & AI Security Systems
              <br />
              [✓] Specialization: Scalable systems, real-time processing, microservices
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
