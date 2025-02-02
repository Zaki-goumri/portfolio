'use client'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Instagram } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'

export function HeroSection() {

  return (
    <div className="min-h-screen flex items-center relative overflow-hidden pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Hi There,
                <br />
                I&apos;m&nbsp;
                <span className="text-blue-600">
                  <TypeAnimation
                    sequence={['Zakaria', 1000, 'a Developer', 1000]}
                    repeat={Infinity}
                  />
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-muted-foreground">
                I Am Into{' '}
                <span className="text-blue-600 font-semibold">
                  Full Stack Web Dev
                </span>
              </h2>
            </div>

            <a
              href="/ZakariaGoumri.pdf"
              download="/zakaria Goumri.pdf"
              className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-opacity-80 duration-700"
            >
              Download CV
            </a>

            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full" >
                <a href='https://github.com/Zaki-goumri' target='_blank'>
                <Github className="w-5 h-5" />
                </a>
                
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
               <a href='https://www.linkedin.com/in/zakaria-goumri-76ab222a6/' target='_blank'>  
                <Linkedin className="w-5 h-5" />
                </a>

              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" target='_blank'>
                 <a href='https://www.instagram.com/_.zaki_____/'>
                <Instagram className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

