"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FolderOpen, ExternalLink, Github, Calendar, Shield, Code, Smartphone, HardDrive, Database, KeyRound } from "lucide-react"
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
    id: 11,
    title: "Vexo – S3-Compatible Object Store",
    type: "Personal Project",
    period: "2026",
    description: "Single-node object storage server written in Go that speaks the real S3 HTTP API, so standard tools like aws-cli and boto3 work with it.",
    highlights: [
      "S3 HTTP API for buckets and objects with AWS SigV4 authentication",
      "IAM-style JSON policy engine with users, groups, and access keys",
      "Lifecycle rules moving objects across hot, infrequent, and cold (gzip) tiers",
      "Vue 3 web console, custom binary TCP protocol, and Docker Compose setup",
    ],
    technologies: ["Go", "bbolt", "AWS SigV4", "IAM Policies", "Vue 3", "TypeScript", "Docker"],
    metrics: {
      api: "S3-compatible",
      auth: "SigV4 + IAM",
      storage: "3 tiers",
    },
    color: "",
    icon: HardDrive,
    github: "https://github.com/Zaki-goumri/vexo",
  },
  {
    id: 12,
    title: "NemoBase – Database Engine From Scratch",
    type: "Personal Project",
    period: "2026",
    description: "Relational database built from scratch in Go to understand how storage engines work from the inside.",
    highlights: [
      "Copy-on-write B+tree storage engine",
      "Page-based node layout and crash-safe atomic writes",
      "Roadmap: key-value store, secondary indexes, transactions, query language",
    ],
    technologies: ["Go", "B+tree", "Storage Engines"],
    metrics: {
      language: "Go",
      engine: "B+tree",
    },
    color: "",
    icon: Database,
    github: "https://github.com/Zaki-goumri/nemobase",
  },
  {
    id: 13,
    title: "Stamp – OAuth 2.0 Authorization Server for NestJS",
    type: "Open Source Library",
    period: "2026",
    description: "Reusable NestJS module that turns any application into an OAuth 2.0 authorization server.",
    highlights: [
      "Authorization Code flow with PKCE",
      "Ready-made authorize and token endpoints",
      "Pluggable client store so apps can use any database",
    ],
    technologies: ["NestJS", "TypeScript", "OAuth 2.0", "PKCE"],
    metrics: {
      protocol: "OAuth 2.0",
      security: "PKCE",
    },
    color: "",
    icon: KeyRound,
    github: "https://github.com/Zaki-goumri/Stamp",
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
          <p className="text-green-300">Systems and backend projects</p>
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
                  <div className={`p-3 rounded-md border border-green-500/40 bg-green-500/5 flex-shrink-0`}>
                    <project.icon className="w-6 h-6 text-green-400" />
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
                <div className="text-3xl font-bold text-orange-400">3+</div>
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
              [✓] Systems: S3-compatible object store, database engine, OAuth 2.0 server
              <br />
              [✓] Tech Stack: Go, NestJS, TypeScript, Docker
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
