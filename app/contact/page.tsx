"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, User, GraduationCap, MapPin, Phone } from "lucide-react"
import { Footer } from "@/components/footer"

export default function Contact() {
  return (
    <div className="min-h-screen bg-black p-4 scan-lines">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to dashboard
          </Link>

          <h1 className="text-3xl font-bold text-green-400 neon-text mb-2">Contact</h1>
        </div>

        {/* Thank you message */}
        <Card className="mb-8 bg-gray-900/50 border-green-500/30">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-green-400 mb-4 neon-text">Thank you for visiting my portfolio</h2>
            <p className="text-green-300 text-lg leading-relaxed">
              Feel free to contact me for any questions or future collaboration opportunities. I'm open to backend
              development opportunities, system architecture projects, and innovative projects using Node.js, NestJS,
              and modern technologies.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Personal Info */}
          <Card className="bg-gray-900/50 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center gap-2">
                <User className="w-5 h-5" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-green-400" />
                <div>
                  <div className="text-green-400 font-semibold">Education</div>
                  <div className="text-green-300 text-sm">Higher National School of Computer Science</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <div>
                  <div className="text-green-400 font-semibold">Location</div>
                  <div className="text-green-300 text-sm">Sidi Bel Abbès, Algeria</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400" />
                <div>
                  <div className="text-green-400 font-semibold">Phone</div>
                  <div className="text-green-300 text-sm">+213 560 620 999</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <Card className="bg-gray-900/50 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Me
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                className="w-full bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 neon-glow"
                onClick={() => (window.location.href = "mailto:zakariagoumri213@gmail.com")}
              >
                <Mail className="w-4 h-4 mr-2" />
                zakariagoumri213@gmail.com
              </Button>
              <Button
                className="w-full bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300"
                onClick={() => window.open("https://www.linkedin.com/in/zakaria-goumri-76ab222a6/", "_blank")}
              >
                LinkedIn Profile
              </Button>
              <Button
                className="w-full bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition-all duration-300"
                onClick={() => window.open("https://github.com/Zaki-goumri", "_blank")}
              >
                GitHub Profile
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Experience Summary */}
        <Card className="mb-8 bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-500/50">
          <CardHeader>
            <CardTitle className="text-green-400 text-xl">Professional Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-green-400 font-semibold">Backend Developer - Portals (Freelance)</h4>
                <p className="text-green-300 text-sm">February 2025 - May 2025</p>
                <p className="text-green-300/80 text-sm mt-1">
                  Backend services development in NestJS/PostgreSQL, processing 100k+ event records
                </p>
              </div>
              <div>
                <h4 className="text-green-400 font-semibold">Full-Stack Engineer - GrowPath</h4>
                <p className="text-green-300 text-sm">January 2025 - April 2025</p>
                <p className="text-green-300/80 text-sm mt-1">
                  Student-company matching platform, 200+ internship matches achieved
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Summary */}
        <Card className="mb-8 bg-gray-900/50 border-green-500/30">
          <CardHeader>
            <CardTitle className="text-green-400">Areas of Expertise</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div className="text-green-300">• Node.js & NestJS</div>
              <div className="text-green-300">• PostgreSQL & MongoDB</div>
              <div className="text-green-300">• Microservices</div>
              <div className="text-green-300">• REST API & GraphQL</div>
              <div className="text-green-300">• Docker & DevOps</div>
              <div className="text-green-300">• System Architecture</div>
            </div>
          </CardContent>
        </Card>

        {/* Terminal Output */}
        <div className="border border-green-500/30 rounded-lg p-4 bg-gray-900/20">
          <div className="text-green-400 text-sm font-mono">
            <div>zakaria@portfolio:~$ contact --info</div>
            <div className="text-green-300 mt-1">
              [✓] Email: zakariagoumri213@gmail.com
              <br />
              [✓] Phone: +213 560 620 999
              <br />
              [✓] GitHub: github.com/Zaki-goumri
              <br />
              [✓] LinkedIn: linkedin.com/in/zakaria-goumri-76ab222a6/
              <br />
              [✓] Status: Backend Software Engineer - 2+ years experience
              <br />
              [✓] Specialties: Node.js, NestJS, PostgreSQL, Microservices
              <br />
              [i] Portfolio generated on {new Date().toLocaleDateString("en-US")}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
