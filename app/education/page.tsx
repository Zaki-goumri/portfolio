import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GraduationCap, Calendar } from 'lucide-react'

export default function EducationPage() {
  return (
    <main className="relative">
      
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Education</h1>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2  leading-6">
                  <GraduationCap className="h-6 w-6" />
                  L&apos;École supérieure en informatique 08 Mai 1945 de Sidi Bel Abbès (ESI-SBA)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>2023 - Present</span>
                </div>
                <p>
                  Studying Computer Science with a focus on software engineering and web development.
                  Learning advanced programming concepts, algorithms, and modern development practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

