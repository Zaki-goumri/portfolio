import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import { Metadata } from 'next';
import { NavBar } from '@/components/nav-bar';
import { ParticleBackground } from '@/components/particle-background';

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
               <ParticleBackground /> 
          <NavBar/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

