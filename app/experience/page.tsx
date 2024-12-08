import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Briefcase, LinkIcon } from 'lucide-react'

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio website built with Next.js and Tailwind CSS, showcasing projects and skills.",
    technologies: ["Next.js", "Tailwind CSS", "React"],
    link: "https://github.com/Zaki-goumri/my_portfolio"
  },
  {
    title: "Aroma Barkery",
    description: "Catalogue for a bakery. Users can browse products,Contact the bakery .",
    technologies: ["Next.js", "Tailwind CSS", "React","firebase"],    
    link: "https://github.com/Zaki-goumri/Aroma"
  },
  {
  title: "SHOP.CO",
  description: "An e-commerce web application built using Next.js for the front end and Express.js for the back end. This project demonstrates a modern, scalable approach to online shopping platforms.",
  technologies: ["Next.js", "Tailwind CSS", "React","Express.js","MongoDB"],    
  link: "https://github.com/Zaki-goumri/SHOP.CO"
}
  
]

export default function ExperiencePage() {
  return (
    <main className="relative">
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Experience & Projects</h1>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-6 w-6" />
                      {project.title}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      <LinkIcon className="h-4 w-4" />
                    </a>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

