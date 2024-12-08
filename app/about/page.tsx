import { NavBar } from '@/components/nav-bar'
import { ParticleBackground } from '@/components/particle-background'

export default function AboutPage() {
  return (
    <main className="relative">
      <ParticleBackground />
      <NavBar />
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg mb-6">
              Hello World! I&apos;m ZAKARIA, a passionate computer science student at L&apos;École supérieure en informatique 08 Mai 1945 de Sidi Bel Abbès (ESI-SBA). I love sharing my journey in the world of coding and creating elegant, user-friendly web applications.
            </p>
            <p className="text-lg mb-6">
              As a Full Stack Developer, I specialize in React development and modern web technologies. My goal is to craft beautiful, performant applications that provide great user experiences.
            </p>
            <div className="bg-muted/50 rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">Quick Facts</h2>
              <ul className="space-y-2">
                <li>🎓 Studying Computer Science at ESI-SBA</li>
                <li>💻 Full Stack Web Developer</li>
                <li>🌍 Based in Boumerdes, Algeria</li>
                <li>🚀 Always learning new technologies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

