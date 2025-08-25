"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  FileText,
  PenTool,
  Clock,
  ExternalLink,
} from "lucide-react";
import { Footer } from "@/components/footer";

const upcomingArticles = [
  {
    title:
      "Designing Data-Intensive Applications – A Summary of Reliability, Scalability, and Maintainability",
    description:
      "A concise breakdown of key concepts from 'Designing Data-Intensive Applications', focusing on building systems that are reliable, scalable, and maintainable.",
    estimatedDate: "Published",
    link: "https://dev.to/zakigoumri/designing-data-intensive-applications-a-summary-of-reliability-scalability-and-maintainability-397e",
    topics: [
      "System Design",
      "Reliability",
      "Scalability",
      "Maintainability",
      "Architecture",
    ],
  },
  {
    title: "GraphQL Deep Dive: How It Really Works Beyond the Basics ",
    description:
      "explain advanced graphql patterns how it works how the engine parse it how it goes over tcp http udpb and even websocket via subscription",
    estimatedDate: "Published",
    link: "https://dev.to/zakigoumri/graphql-deep-dive-how-it-really-works-beyond-the-basics-5dia",
    topics: ["GraphQL", "http", "AST", "Tcp", "udp"],
  },
];

const writingTopics = [
  "Backend Architecture Patterns",
  "API Security Best Practices",
];

export default function Articles() {
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
            <FileText className="w-8 h-8 text-green-400" />
            <h1 className="text-3xl font-bold text-green-400 neon-text">
              Technical Articles
            </h1>
          </div>
          <p className="text-green-300">
            Sharing knowledge about backend development and system architecture
          </p>
        </div>

        {/* Coming Soon Notice */}
        <Card className="mb-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-500/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <PenTool className="w-6 h-6 text-blue-400" />
              <CardTitle className="text-blue-400 text-xl">
                Technical Writing Journey
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-green-300 leading-relaxed mb-4">
              As a backend software engineer with 2+ years of experience, I'm
              passionate about sharing knowledge and insights from my work with
              scalable systems, microservices, and high-performance APIs. I'm
              currently preparing a series of technical articles based on
              real-world projects and challenges.
            </p>
          </CardContent>
        </Card>

        {/* Upcoming Articles */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-400 mb-6">
            My Articles
          </h2>
          <div className="space-y-6">
            {upcomingArticles.map((article, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-green-500/30 hover:border-green-400 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-green-400 text-lg">
                    {article.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-green-300/70 text-sm">
                    <Clock className="w-4 h-4" />
                    {article.estimatedDate}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-green-300 leading-relaxed">
                    {article.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {article.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Read on Dev.to
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Writing Topics */}
        <Card className="mb-8 bg-gray-900/50 border-green-500/30">
          <CardHeader>
            <CardTitle className="text-green-400 text-xl">
              Planned Writing Topics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {writingTopics.map((topic, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-green-300 p-3 bg-gray-800/30 rounded-lg border border-green-500/20"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Newsletter Signup */}
        <Card className="mb-8 bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-500/50">
          <CardHeader>
            <CardTitle className="text-green-400 text-xl">
              Stay Updated
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-green-300">
              Want to be notified when I publish new technical articles? Connect
              with me on LinkedIn or follow my GitHub for updates on my latest
              writing and projects.
            </p>
            <div className="flex gap-3">
              <Button
                className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/zakaria-goumri-76ab222a6/",
                    "_blank",
                  )
                }
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button
                className="bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition-all duration-300"
                onClick={() =>
                  window.open("https://github.com/Zaki-goumri", "_blank")
                }
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Writing Philosophy */}
        <Card className="mb-8 bg-gray-900/50 border-green-500/30">
          <CardHeader>
            <CardTitle className="text-green-400 text-xl">
              Writing Philosophy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-300 leading-relaxed">
              My technical writing focuses on practical, real-world solutions
              backed by actual implementation experience. Each article will
              include code examples, performance metrics, and lessons learned
              from building production systems. I believe in sharing not just
              what works, but also what doesn't work and why, helping fellow
              developers avoid common pitfalls and make informed architectural
              decisions.
            </p>
          </CardContent>
        </Card>

        {/* Terminal Output */}
        <div className="border border-green-500/30 rounded-lg p-4 bg-gray-900/20">
          <div className="text-green-400 text-sm font-mono">
            <div>zakaria@portfolio:~$ articles --status --topics</div>
            <div className="text-green-300 mt-1">
              [✓] Technical writing initiative: In preparation
              <br />
              [✓] Focus areas: Backend architecture, microservices, performance
              <br />
              [✓] Planned articles: 3 comprehensive guides
              <br />
              [✓] Topics: NestJS, PostgreSQL, SSE, Database optimization
              <br />
              [✓] Approach: Real-world examples with performance metrics
              <br />
              [✓] Updates: LinkedIn & GitHub notifications available
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
