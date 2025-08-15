"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Code, Database, Cloud, Shield, TestTube, Monitor } from "lucide-react"
import { Footer } from "@/components/footer"

const skillCategories = [
  {
    title: "Backend Development",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    skills: [
      "NestJS",
      "Node.js",
      "FastAPI",
      "Express.js",
      "REST API",
      "Microservices",
      "Monolithic",
      "SSE",
      "WebSockets",
      "GraphQL",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "TypeORM", "Elasticsearch"],
  },
  {
    title: "DevOps & Tools",
    icon: Cloud,
    color: "from-purple-500 to-pink-500",
    skills: ["Docker", "CI/CD","Nginx", "Linux", "GitHub Actions", "ELK Stack", "Grafana"],
  },
  {
    title: "Programming Languages",
    icon: Monitor,
    color: "from-orange-500 to-red-500",
    skills: ["JavaScript", "TypeScript", "Python","SQL"],
  },
  {
    title: "Security",
    icon: Shield,
    color: "from-red-500 to-pink-500",
    skills: ["JWT", "OAuth2", "API Security", "Encryption", "Hashing"],
  },
  {
    title: "Testing",
    icon: TestTube,
    color: "from-indigo-500 to-purple-500",
    skills: ["Jest", "Postman", "Unit Testing", "Hurl"],
  },
]

const principles = [
  "SOLID Principles",
  "Object-Oriented Programming",
  "Database Design",
  "System Design",
  "Design Patterns",
]

const supportingSkills = ["React.js", "Next.js", "Tailwind CSS"]

export default function Skills() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

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
            <Code className="w-8 h-8 text-green-400" />
            <h1 className="text-3xl font-bold text-green-400 neon-text">Technical Skills</h1>
          </div>
          <p className="text-green-300">Backend Software Engineer • 2+ years of experience</p>
        </div>

        {/* Core Principles */}
        <Card className="mb-8 bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-500/50">
          <CardHeader>
            <CardTitle className="text-green-400 text-xl">Core Principles & Concepts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {principles.map((principle, index) => (
                <Badge
                  key={index}
                  className="bg-green-500/20 text-green-300 border border-green-500/30 px-3 py-1"
                  variant="outline"
                >
                  {principle}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-green-500/30 hover:border-green-400 transition-all duration-300 group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-green-400 group-hover:text-green-300 transition-colors">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2 text-green-300 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      {skill}
                    </div>
                  ))}
                </div>
                {hoveredCard === index && (
                  <div className="mt-3 text-green-400 text-sm animate-fade-in">
                    {category.skills.length} technologies
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Supporting Skills */}
        <Card className="mb-8 bg-gray-900/50 border-green-500/30">
          <CardHeader>
            <CardTitle className="text-green-400">Frontend (Supporting)</CardTitle>
            <CardDescription className="text-green-300/80">
              Frontend technologies for full-stack development
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {supportingSkills.map((skill, index) => (
                <Badge
                  key={index}
                  className="bg-blue-500/20 text-blue-300 border border-blue-500/30 px-3 py-1"
                  variant="outline"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Terminal Output */}
        <div className="border border-green-500/30 rounded-lg p-4 bg-gray-900/20">
          <div className="text-green-400 text-sm font-mono">
            <div>zakaria@portfolio:~$ skills --summary --experience</div>
            <div className="text-green-300 mt-1">
              [✓] Backend Software Engineer - 2+ years experience
              <br />
              [✓] Specialization: Node.js, NestJS, PostgreSQL
              <br />
              [✓] Architecture: Microservices, REST APIs, Real-time systems
              <br />
              [✓] Performance: Sub-200ms API responses, 100k+ records processing
              <br />
              [✓] DevOps: Docker, CI/CD, Cloud deployment (AWS)
              <br />
              [✓] Monitoring: ELK Stack, Grafana, System optimization
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
