import './globals.css'
import { Metadata } from 'next';
import { NavBar } from '@/components/nav-bar';
import { ParticleBackground } from '@/components/particle-background';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: 'Zakaria GOUMRI',
  description: 'A passionate full-stack developer based in Algeria.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en"  suppressHydrationWarning={true} >
      <body  >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

      
        <NavBar/>
        <ParticleBackground /> 
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

