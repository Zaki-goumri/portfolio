import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
const skills = {
  frontend: [
    { name: 'React.js', logo: '/logos/react.svg' },
    { name: 'Next.js', logo: '/logos/nextjs.svg',  },
    { name: 'HTML', logo: '/logos/html.svg' },
    { name: 'CSS', logo: '/logos/css.svg' },
    { name: 'JavaScript', logo: '/logos/javascript.svg' },
    { name: 'TypeScript', logo: '/logos/typescript.svg' },
    { name: 'Tailwind CSS', logo: '/logos/tailwindcss.svg' }, 
    {name:'Bootstrap',logo:'/logos/bootstarp.svg'},
    {name:'Vite',logo:'https://icon.icepanel.io/Technology/svg/Vite.js.svg'}
  ],
  backend: [
    { name: 'Node.js', logo: '/logos/nodejs.svg' },
    { name: 'Express.js', logo: '/logos/express.svg', style:'dark:invert' },
    { name: 'MongoDB', logo: '/logos/mongodb.svg' },
    { name: 'PostgreSQL', logo: '/logos/postgresql.svg' },
    { name: 'Solidity', logo: 'https://docs.soliditylang.org/en/latest/_static/img/logo-dark.svg', style:'h-12' },
    { name: 'Hardhat', logo: 'https://icon.icepanel.io/Technology/svg/Hardhat.svg' },
    { name: 'Firebase', logo: 'https://www.svgrepo.com/show/353735/firebase.svg' },
    { name: 'Bun', logo: 'https://icon.icepanel.io/Technology/svg/Bun.svg' },
    { name: 'SQLite', logo: 'https://icon.icepanel.io/Technology/png-shadow-512/SQLite.png' },
    { name: 'Prisma', logo: 'https://www.svgrepo.com/show/373776/light-prisma.svg' },
    { name: 'Socket.io', logo: 'https://icon.icepanel.io/Technology/png-shadow-512/Socket.io.png' },
    { name: 'Deno', logo: 'https://icon.icepanel.io/Technology/png-shadow-512/Deno.png' }
  ],
  tools: [
    { name: 'Git', logo: '/logos/git.svg' },
    { name: 'Docker', logo: '/logos/docker.svg' },
    { name: 'Figma', logo: '/logos/figma.svg', style:'h-16' },
    {name:'github',logo:'/logos/github.svg', style:'dark:invert'},
    {name:'Postman',logo:'https://icon.icepanel.io/Technology/svg/Postman.svg'}
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
              <CardContent className="space-y-4 flex gap-x-28 justify-center flex-wrap">
                {skills.frontend.map((skill) => (
                  <div key={skill.name} className="flex flex-col justify-center ">
                    <Image src={skill.logo} alt={skill.name} width={60} height={0} className={skill.style} />
                    <div className="flex flex-col justify-center">
                        <span className="text-sm font-medium text-center mt-4">{skill.name}</span>
                      </div>
                    </div>
                ))}
              </CardContent>
            </Card>
    
            <Card>
              <CardHeader>
                <CardTitle>Backend Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex gap-x-28 justify-center flex-wrap">
                {skills.backend.map((skill) => (
                  <div key={skill.name} className="flex flex-col justify-center ">
                    <Image src={skill.logo} alt={skill.name} width={60} height={0} className={skill?.style} />
                    <div className="flex flex-col justify-center">
                        <span className="text-sm font-medium text-center mt-4">{skill.name}</span>
                      </div>
                    </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tools & Technologies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex gap-x-28 justify-center flex-wrap">
                {skills.tools.map((skill) => (
                  <div key={skill.name} className="flex flex-col justify-center ">
                    <Image src={skill.logo} alt={skill.name} width={60} height={0} className={skill.style} />
                    <div className="flex flex-col justify-center">
                        <span className="text-sm font-medium text-center mt-4">{skill.name}</span>
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

