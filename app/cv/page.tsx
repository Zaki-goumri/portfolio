"use client"

import Link from "next/link"
import { ArrowLeft, Download, FileText, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/footer"

export default function CV() {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/cv/Zakaria_Goumri_CV.pdf" // Path to your CV file
    link.download = "Zakaria_Goumri_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handlePreview = () => {
    window.open("/cv/Zakaria_Goumri_CV.pdf", "_blank")
  }

  return (
    <div className="min-h-screen bg-black p-4 scan-lines">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to dashboard
          </Link>

          <h1 className="text-3xl font-bold text-green-400 neon-text mb-2">Download CV</h1>
          <p className="text-green-300">Get my latest resume in PDF format</p>
        </div>

        <Card className="bg-gray-900/50 border-green-500/30 mb-6">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
              <FileText className="w-8 h-8 text-green-400" />
            </div>
            <CardTitle className="text-green-400 text-xl">Zakaria Goumri - CV</CardTitle>
            <p className="text-green-300">Backend Software Engineer</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <p className="text-green-300 leading-relaxed">
                Download my comprehensive CV featuring 2+ years of backend engineering experience, technical skills in
                Node.js/NestJS/PostgreSQL, and proven track record in building scalable systems.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={handleDownload} className="bg-green-600 hover:bg-green-700 text-black font-semibold">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
                <Button
                  onClick={handlePreview}
                  variant="outline"
                  className="border-green-500/50 text-green-300 hover:bg-green-500/10 bg-transparent"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Preview CV
                </Button>
              </div>
            </div>

            <div className="border-t border-green-500/30 pt-6">
              <h3 className="text-green-400 font-semibold mb-3">CV Highlights</h3>
              <ul className="text-green-300 text-sm space-y-2">
                <li>• 2+ years backend development experience</li>
                <li>• Expertise in NestJS, Node.js, PostgreSQL</li>
                <li>• Microservices & Monolithic architecture & real-time systems</li>
                <li>• Performance optimization & API security</li>
                <li>• Academic background in Computer Science</li>
              </ul>
            </div>

            <div className="text-center text-green-300/70 text-xs">
              Last updated: January 2025 • PDF Format • 2 pages
            </div>
          </CardContent>
        </Card>

        <Footer />
      </div>
    </div>
  )
}
