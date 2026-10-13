"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Cpu,
  FolderGit2,
  BookOpen,
  Briefcase,
  GraduationCap,
  ScrollText,
  Mail,
  Terminal,
  ArrowLeft,
} from "lucide-react";
import { Footer } from "@/components/footer";

const dashboardItems = [
  {
    title: "Skills",
    description: "Technical skills and backend stack",
    icon: Cpu,
    href: "/skills",
  },
  {
    title: "Projects",
    description: "Portfolio and achievements",
    icon: FolderGit2,
    href: "/projects",
  },
  {
    title: "Articles",
    description: "Technical writing and insights",
    icon: BookOpen,
    href: "/articles",
  },
  {
    title: "Experience",
    description: "Professional background",
    icon: Briefcase,
    href: "/experience",
  },
  {
    title: "Education",
    description: "Academic background",
    icon: GraduationCap,
    href: "/education",
  },
  {
    title: "CV",
    description: "Complete resume overview",
    icon: ScrollText,
    href: "/cv",
  },
  {
    title: "Contact",
    description: "Get in touch",
    icon: Mail,
    href: "/contact",
  },
];

export default function Dashboard() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black p-4 scan-lines">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to terminal
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <Terminal className="w-8 h-8 text-green-400" />
            <h1 className="text-3xl font-bold text-green-400 neon-text">
              Dashboard - Zakaria Goumri
            </h1>
          </div>
          <p className="text-green-300">
            Backend Software Engineer • Node.js & NestJS Specialist
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <Card
                className="bg-gray-900/50 border-green-500/30 hover:border-green-400 transition-all duration-300 cursor-pointer group h-full"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="p-3 rounded-md border border-green-500/40 bg-green-500/5 group-hover:border-green-400 transition-colors duration-300"
                    >
                      <item.icon className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <CardTitle className="text-green-400 group-hover:text-green-300 transition-colors">
                        {item.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-green-300/80">
                    {item.description}
                  </CardDescription>
                  {hoveredCard === index && (
                    <div className="mt-3 text-green-400 text-sm animate-fade-in">
                      Click to access →
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* System Info */}
        <div className="mt-12 border border-green-500/30 rounded-lg p-4 bg-gray-900/20">
          <div className="text-green-400 text-sm font-mono">
            <div>system@portfolio:~$ uptime</div>
            <div className="text-green-300 mt-1">
              Portfolio active • Last update: January 2025 • Status:{" "}
              <span className="text-green-400">Online</span>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
