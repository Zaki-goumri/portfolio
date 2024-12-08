import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import Image from 'next/image'

const skills = {
  frontend: [
    { name: 'React.js', level: 70, logo: '/logos/react.svg' ,style:''},
    { name: 'Next.js', level: 80, logo: '/logos/nextjs.svg' , style:'dark:invert'},
    { name: 'HTML', level: 90, logo: '/logos/html.svg',style:'' },
    { name: 'CSS', level: 80, logo: '/logos/css.svg',style:'' },
    { name: 'JavaScript', level: 80, logo: '/logos/javascript.svg',style:'' },
    { name: 'TypeScript', level: 80, logo: '/logos/typescript.svg',style:'' },
    { name: 'Tailwind CSS', level: 80, logo: '/logos/tailwindcss.svg',style:'' }, 
    {name:'Bootstrap',level:60,logo:'/logos/bootstarp.svg',style:''} 
  ],
  backend: [
    { name: 'Node.js', level: 80, logo: '/logos/nodejs.svg',style:'' },
    { name: 'Express.js', level: 70, logo: '/logos/express.svg',style:'dark:invert' },
    { name: 'MongoDB', level: 70, logo: '/logos/mongodb.svg',style:'' },
    { name: 'PostgreSQL', level: 50, logo: '/logos/postgresql.svg',style:'' },
  ],
  tools: [
    { name: 'Git', level: 75, logo: '/logos/git.svg',style:'' },
    { name: 'Docker', level: 70, logo: '/logos/docker.svg' ,style:''},
    { name: 'VS Code', level: 80, logo: '/logos/vscode.svg',style:'' },
    { name: 'Figma', level: 75, logo: '/logos/figma.svg',style:'' },
    {name:'github',level:70,logo:'/logos/github.svg',style:'dark:invert'},
  ],
}

export default function SkillsPage() {
  return (
    <main className="relative">
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Skills</h1>
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Frontend Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.frontend.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-4">
                    <Image src={skill.logo} alt={skill.name} width={24} height={24} className={skill.style} />
                    <div className="flex-grow">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            

            <Card>
              <CardHeader>
                <CardTitle>Backend Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.backend.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-4">
                    <Image src={skill.logo} alt={skill.name} width={24} height={24} className={skill.style} />
                    <div className="flex-grow">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tools & Technologies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.tools.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-4">
                    <Image src={skill.logo} alt={skill.name} width={24} height={24} className={skill.style} />
                    <div className="flex-grow">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

