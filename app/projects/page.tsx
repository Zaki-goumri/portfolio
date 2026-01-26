"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FolderOpen, ExternalLink, Github, Calendar, Users, TrendingUp, Shield, Code, Blocks, Smartphone } from "lucide-react"
import { Footer } from "@/components/footer"

type Project = {
  id: number;
  title: string;
  type: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
  metrics: Record<string, string>;
  color: string;
  icon: any;
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    id: 10,
    title: "Ammerli",
    type: "Professional Project",
    period: "2024",
    description: "Comprehensive backend for a delivery and service mobile application, built for scale and reliability.",
    highlights: [
      "Scalable NestJS architecture with TypeORM and PostgreSQL",
      "Integrated Chargili payments, OTP SMS, and FCM notifications",
      "Robust infrastructure with Docker, MinIO storage, and automated backups",
      "Performance optimized with Redis caching and k6 load testing",
    ],
    technologies: ["NestJS", "TypeORM", "PostgreSQL", "Redis", "Docker", "MinIO", "Grafana", "k6", "FCM"],
    metrics: {
      reliability: "Automated backups",
      monitoring: "Grafana dashboards",
      testing: "k6 load tested",
    },
    color: "from-purple-600 to-indigo-600",
    icon: Smartphone,
    demo: "https://play.google.com/store/apps/details?id=com.islam.ammerli",
  },  
  {
    id: 4,
    title: "IntelliPower – AI Security System",
    type: "Hackathon Project",
    period: "2024",
    description: "IoT architecture with AI-based facial recognition for security systems.",
    highlights: [
      "IoT architecture design with MQTT protocols",
      "AI-based facial recognition integration",
      "3D sensor layout visualizations",
      "Real-time security monitoring",
    ],
    technologies: ["MQTT", "IoT", "AI Face Recognition", "3D Visualization"],
    metrics: {
      type: "AI Security",
      protocol: "MQTT",
      visualization: "3D",
    },
    color: "from-orange-500 to-red-500",
    icon: FolderOpen,
    github: 'https://github.com/Nest-hackathon-app/IntelliPower-back'
  },
  {
    id: 5,
    title: "Qurbani Management System",
    type: "Hackathon Project",
    period: "Jul 2025",
    description: "Mobile and backend platform with AI-powered sacrifice video validation, Kafka microservices, and offline-first architecture.",
    highlights: [
      "AI model to detect sheep presence and donor name in sacrifice videos",
      "Automated blood blur processing before uploading to Cloudinary",
      "Kafka-based microservices for video processing and notifications",
      "Offline-first mobile app for donation tracking",
    ],
    technologies: ["FastAPI", "Python", "React Native", "Kafka", "PostgreSQL", "Cloudinary", "AI/ML"],
    metrics: {
      videos: "100+ processed",
      ai: "Sheep + donor detection",
      architecture: "Kafka microservices",
    },
    color: "from-yellow-500 to-amber-500",
    icon: FolderOpen,
    github: 'https://github.com/Junction-Hackathon'
  },
  {
    id: 6,
    title: "PTU Backend",
    type: "Professional Project",
    period: "2025",
    description: "Backend system powering PTU Learning Platform with secure authentication, role management, and performance-focused APIs.",
    highlights: [
      "Built with NestJS and PostgreSQL for scalability and maintainability",
      "Role-based access control and secure JWT authentication",
      "File upload support and email notifications",
      "Optimized queries with TypeORM for fast data retrieval",
    ],
    technologies: ["NestJS", "PostgreSQL", "TypeORM", "JWT", "Multer", "Nodemailer", "Docker"],
    metrics: {
      platform: "Learning",
      roles: "RBAC",
      performance: "Optimized queries",
    },
    color: "from-indigo-500 to-sky-500",
    icon: FolderOpen,
    github: 'https://github.com/Zaki-goumri/ptu-learning-platform-back'
  },
  {
    id: 7,
    title: "Assurini",
    type: "Hackathon Project",
    period: "2024",
    description: "Next-gen insurance platform with AI accident reconstruction transforming the car accident experience.",
    highlights: [
      "Streamlined claims process connecting multiple insurers",
      "AI agent for accident scene reconstruction and damage estimation",
      "User-friendly mobile app with modern UI",
      "Delivered complex MVP in 48 hours",
    ],
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "GraphQL", "Kafka", "Redis", "Docker"],
    metrics: {
      time: "48 hours",
      ai: "Scene reconstruction",
      platform: "Mobile + Web",
    },
    color: "from-teal-500 to-emerald-500",
    icon: Shield,
    github: "https://github.com/Zaki-goumri/future-caravan",
  },
  {
    id: 8,
    title: "NestJS Chargili",
    type: "Personal Project",
    period: "2024",
    description: "Backend service for Chargili, a payment and charging system built with scalability in mind.",
    highlights: [
      "Built with NestJS for modular architecture",
      "Implemented secure payment processing flows",
      "RESTful API design with comprehensive validation",
    ],
    technologies: ["NestJS", "TypeScript", "REST API"],
    metrics: {
      type: "Backend API",
      framework: "NestJS",
    },
    color: "from-red-500 to-orange-500",
    icon: Code,
    github: "https://github.com/Zaki-goumri/nestjs-chargili",
  },
  {
    id: 9,
    title: "Tip Jar Blockchain",
    type: "Web3 Project",
    period: "2024",
    description: "Small decentralized tip jar application allowing users to send tips via the blockchain.",
    highlights: [
      "Smart contract development with Solidity",
      "Secure transaction handling on the Ethereum network",
      "Web3 integration for wallet connection",
    ],
    technologies: ["Solidity", "Blockchain", "Web3", "Ethereum"],
    metrics: {
      type: "DApp",
      network: "Ethereum",
    },
    color: "from-yellow-500 to-amber-500",
    icon: Blocks,
    github: "https://github.com/Zaki-goumri/Tip-jar-blokchain",
  },
  
] as const;

export default function Projects() {
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
            <FolderOpen className="w-8 h-8 text-green-400" />
            <h1 className="text-3xl font-bold text-green-400 neon-text">Projects Portfolio</h1>
          </div>
          <p className="text-green-300">Professional projects, academic work, and hackathon achievements</p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-gray-900/50 border-green-500/30 hover:border-green-400 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} flex-shrink-0`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-green-400 text-xl">{project.title}</CardTitle>
                      <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30">{project.type}</Badge>
                    </div>
                    <div className="flex items-center gap-1 text-green-300/80 text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      {project.period}
                    </div>
                    <p className="text-green-300 leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Key Highlights */}
                <div>
                  <h4 className="text-green-400 font-semibold mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2 text-green-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div>
                  <h4 className="text-green-400 font-semibold mb-3">Project Metrics:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="bg-gray-800/50 rounded-lg p-3 border border-green-500/20">
                        <div className="text-green-400 text-sm font-semibold capitalize">{key}</div>
                        <div className="text-green-300 font-bold">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-green-400 font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        className="bg-green-500/20 text-green-300 border border-green-500/30"
                        variant="outline"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  {project.github && (
                    <Button
                      className="bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 neon-glow"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      variant="outline"
                      className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black bg-transparent"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <Card className="mt-12 bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-500/50">
          <CardHeader>
            <CardTitle className="text-green-400 text-xl">Portfolio Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">{projects.length}</div>
                <div className="text-green-300 text-sm">Total Projects</div>
              </div>
               <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">2+</div>
                <div className="text-green-300 text-sm">Years Experience</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Terminal Output */}
        <div className="mt-8 border border-green-500/30 rounded-lg p-4 bg-gray-900/20">
          <div className="text-green-400 text-sm font-mono">
            <div>zakaria@portfolio:~$ projects --list --stats</div>
            <div className="text-green-300 mt-1">
              [✓] {projects.length} projects documented and deployed
              <br />
              [✓] Professional: Event Management Platform (100k+ users)
              <br />
              [✓] Academic: Student-Company Matching (200+ matches)
              <br />
              [✓] Hackathons: Smart City & AI Security Systems
              <br />
              [✓] Tech Stack: NestJS, Node, PostgreSQL, MongoDB, Docker
              <br />
              [✓] GitHub: github.com/Zaki-goumri
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
