"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react"
import { Footer } from "@/components/footer"

const experiences = [
  {
    title: "Backend Developer (DevOps & AI)",
    company: "Tyrhal (ترحال)",
    type: "Remote",
    period: "Dec 2025 – Present",
    achievements: [
      "Built and maintain the NestJS backend of a travel platform: 50+ endpoints for packages, agencies, bookings, and users",
      "Designed the data layer with Prisma and PostgreSQL, with optimized queries for filtering and search",
      "Used Redis pub/sub to stream real-time events to clients (CRM updates, PDF export progress)",
      "Built background workers for bookings, notifications, emails, PDF export, and translation, plus cron schedulers",
      "Implemented approval workflows and content moderation for agencies and travel packages",
      "Owned the DevOps side on DigitalOcean: Docker images and CI/CD pipelines to the DO registry for dev, staging, and prod",
      "Wrote Kubernetes manifests for the API, PostgreSQL, Valkey, and MinIO",
      "Wrote unit and integration tests with Jest and Testcontainers, ran k6 load tests and Trivy/Gitleaks security scans",
      "Designed AI-driven dynamic pricing and an LLM-powered Package Agent, served by FastAPI microservices",
    ],
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Redis", "Background Queues", "Docker", "Kubernetes", "CI/CD", "DigitalOcean", "Jest", "k6", "FastAPI"],
    color: "",
  },
  {
    title: "Backend Developer",
    company: "Ammerli",
    type: "Freelance · Remote",
    period: "Sep 2025 – Present",
    achievements: [
      "Engineered the full backend of a delivery and service mobile application",
      "Built a scalable architecture with NestJS, TypeORM, and PostgreSQL",
      "Integrated Chargili payments, OTP SMS, and FCM push notifications",
      "Set up the infrastructure with Docker, MinIO storage, and automated backups",
      "Improved performance with Redis caching and validated it with k6 load testing",
    ],
    technologies: ["NestJS", "TypeORM", "PostgreSQL", "Redis", "Docker", "MinIO", "Grafana", "k6", "FCM"],
    color: "",
  },
  {
    title: "IT Intern – Cloud & Infrastructure",
    company: "Ooredoo Algeria",
    type: "Ouled Fayet, Algiers",
    period: "Sep 2026",
    achievements: [
      "Discovery internship in the IT department, working alongside the Cloud, Linux, Database, DevOps, Datawarehouse, and AI & BI teams",
      "Cloud team: data center operations, VMware vSphere virtualization, SAN zoning, VDI, and network setup for client services",
      "Database team: Oracle, PostgreSQL, and MongoDB administration, backups, access control, and monitoring",
      "DevOps team: Docker containerization, Kubernetes orchestration, Azure DevOps CI/CD, and Grafana monitoring",
      "AI & BI team: self-hosted Qwen model on a 6-GPU cluster, LiteLLM gateway, Langfuse observability, and a GPU-as-a-Service project",
      "Wrote an internship report on the IT architecture and how the teams work together",
    ],
    technologies: ["VMware vSphere", "SAN", "Kubernetes", "Docker", "Oracle", "PostgreSQL", "Grafana", "LiteLLM"],
    color: "",
  },
  {
    title: "Backend Developer",
    company: "Portals",
    type: "Remote",
    period: "Feb 2025 – May 2025",
    achievements: [
      "Designed a scalable backend architecture with NestJS, PostgreSQL, and Prisma",
      "Implemented real-time notifications with Server-Sent Events (SSE)",
      "Designed database schemas built for concurrent traffic",
      "Delivered analytics APIs powering dashboards and reporting",
    ],
    technologies: ["NestJS", "PostgreSQL", "Prisma", "SSE", "Docker", "CI/CD"],
    color: "",
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
          <p className="text-green-300">Backend Developer • 3+ years of experience</p>
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
                  <div className={`p-3 rounded-md border border-green-500/40 bg-green-500/5 flex-shrink-0`}>
                    <Briefcase className="w-6 h-6 text-green-400" />
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
                  <div className={`p-3 rounded-md border border-green-500/40 bg-green-500/5 flex-shrink-0`}>
                    <TrendingUp className="w-6 h-6 text-green-400" />
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
              [✓] 3+ years of backend development experience
              <br />
              [✓] Tyrhal: NestJS backend, DevOps on DigitalOcean, Kubernetes, AI features
              <br />
              [✓] Ammerli: Delivery app backend, payments, notifications, infrastructure
              <br />
              [✓] Ooredoo Algeria: Cloud & infrastructure internship
              <br />
              [✓] Portals: NestJS backend, real-time notifications, analytics APIs
              <br />
              [✓] Focus: Backend, DevOps, cloud infrastructure
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
