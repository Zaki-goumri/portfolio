"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, GraduationCap, Calendar, MapPin, BookOpen, Award } from "lucide-react"
import { Footer } from "@/components/footer"

const education = {
  institution: "Higher National School of Computer Science",
  degree: "Higher School Degree in Computer Science",
  period: "Sep 2023 – Present",
  expectedGraduation: "2028",
  location: "Sidi Bel Abbès, Algeria",
  description:
    "Prestigious computer science program focusing on advanced algorithms, distributed systems, and software engineering.",
}

const coursework = [
  {
    category: "Core Computer Science",
    courses: ["Advanced Algorithms", "Distributed Systems", "Database Design", "Software Engineering"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Web Development",
    courses: ["Web Development", "Frontend Technologies", "Backend Systems", "API Design"],
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "System Design",
    courses: ["System Architecture", "Performance Optimization", "Scalability Patterns", "Microservices"],
    color: "from-purple-500 to-pink-500",
  },
]

const languages = [
  { language: "Arabic", level: "Native", proficiency: 100 },
  { language: "English", level: "Professional", proficiency: 85 },
  { language: "French", level: "Professional", proficiency: 80 },
]

const achievements = [
  {
    title: "Academic Excellence",
    description: "Maintaining high academic performance in computer science program",
    icon: Award,
    color: "text-yellow-400",
  },
  {
    title: "Practical Application",
    description: "Successfully applying academic knowledge to real-world projects",
    icon: BookOpen,
    color: "text-green-400",
  },
  {
    title: "Research Focus",
    description: "Specializing in backend systems and distributed architecture",
    icon: GraduationCap,
    color: "text-blue-400",
  },
]

export default function Education() {
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
            <GraduationCap className="w-8 h-8 text-green-400" />
            <h1 className="text-3xl font-bold text-green-400 neon-text">Education</h1>
          </div>
          <p className="text-green-300">Academic background and continuous learning</p>
        </div>

        {/* Current Education */}
        <Card className="mb-8 bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-500/50">
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-green-400 text-xl mb-2">{education.degree}</CardTitle>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-green-300">
                    <BookOpen className="w-4 h-4" />
                    <span className="font-semibold">{education.institution}</span>
                  </div>
                  <div className="flex items-center gap-4 text-green-300/80 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {education.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {education.location}
                    </div>
                  </div>
                  <Badge className="bg-green-500/20 text-green-300 border border-green-500/30">
                    Expected Graduation: {education.expectedGraduation}
                  </Badge>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-green-300 leading-relaxed">{education.description}</p>
          </CardContent>
        </Card>

        {/* Relevant Coursework */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-green-400 mb-6">Relevant Coursework</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coursework.map((category, index) => (
              <Card
                key={index}
                className="bg-gray-900/50 border-green-500/30 hover:border-green-400 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-green-400 text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.courses.map((course, courseIndex) => (
                      <div key={courseIndex} className="flex items-center gap-2 text-green-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-sm">{course}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Languages */}
        <Card className="mb-8 bg-gray-900/50 border-green-500/30">
          <CardHeader>
            <CardTitle className="text-green-400 text-xl">Languages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-green-300 font-semibold">{lang.language}</span>
                    <Badge className="bg-green-500/20 text-green-300 border border-green-500/30" variant="outline">
                      {lang.level}
                    </Badge>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${lang.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Academic Achievements */}
        {/* <Card className="mb-8 bg-gray-900/50 border-green-500/30">
          <CardHeader>
            <CardTitle className="text-green-400 text-xl">Academic Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center space-y-3">
                  <div className={`mx-auto w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center`}>
                    <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                  </div>
                  <div>
                    <h4 className="text-green-400 font-semibold">{achievement.title}</h4>
                    <p className="text-green-300/80 text-sm mt-1">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card> */}

        {/* Learning Philosophy */}
        <Card className="mb-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border-purple-500/50">
          <CardHeader>
            <CardTitle className="text-purple-400 text-xl">Learning Philosophy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-300 leading-relaxed">
              My education at the Higher National School of Computer Science provides a strong theoretical foundation
              that I actively apply to real-world projects. I believe in combining academic rigor with practical
              experience, which is why I pursue freelance projects and hackathons alongside my studies. This approach
              allows me to bridge the gap between theoretical knowledge and industry requirements, making me a more
              effective backend engineer.
            </p>
          </CardContent>
        </Card>

        {/* Terminal Output */}
        <div className="border border-green-500/30 rounded-lg p-4 bg-gray-900/20">
          <div className="text-green-400 text-sm font-mono">
            <div>zakaria@portfolio:~$ education --status --progress</div>
            <div className="text-green-300 mt-1">
              [✓] Institution: Higher National School of Computer Science
              <br />
              [✓] Degree: Higher School Degree in Computer Science
              <br />
              [✓] Status: Currently enrolled (2023-2028)
              <br />
              [✓] Location: Sidi Bel Abbès, Algeria
              <br />
              [✓] Focus: Advanced Algorithms, Distributed Systems, Software Engineering
              <br />
              [✓] Languages: Arabic (Native), English (Professional), French (Professional)
              <br />
              [✓] Approach: Theory + Practical Application
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
