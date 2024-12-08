'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Send } from 'lucide-react'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import Link from 'next/link'
import React from 'react'
import Alert from '@mui/material/Alert';

export default function ContactPage() {
 
  const [result, setResult] = React.useState<{message: string, severity: 'error' | 'info' | 'success' | undefined }>({message:'',severity: undefined});

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult({message:'sending',severity:'info'});
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "720c02eb-10cd-402c-8946-0185d70fe734");
    try{
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();

    if (data.success) {
      setResult({message:'Form Submitted Successfully',severity:'success'});
      (event.target as HTMLFormElement).reset();
    } else {
      setResult({message:'An error occured try again',severity:'error'});
    }
  }catch(err){
    console.log(err);
    setResult({message:'check your connection',severity:'error'});
  }
  };
  return (
    <main className="relative">
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Contact</h1>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className='z-50'>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={onSubmit}>
                  <div>
                    <Input placeholder="Your Name" type="text" name="name" required/>
                  </div>
                  <div>
                    <Input type="email" placeholder="Your Email"  name="name" required />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Your Message"
                      className="min-h-[150px]"
                      name="message" required
                    />
                  </div>
                  <Button className="w-full" type='submit'>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
                {result.message  && <Alert className='mt-5' severity={result.severity} variant="outlined" >{result.message}</Alert> }
                
              </CardContent>
            </Card>

            <Card className='z-50'>
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              <CardContent className="space-y-4 pt-5" >
              <Link
                  href="https://github.com/Zaki-goumri"
                  target="_blank"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <SiGithub className="h-5 w-5" />
                  GitHub
                </Link>
                <a
                  href="https://www.linkedin.com/in/zakaria-goumri-76ab222a6"
                  target="_blank"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <SiLinkedin className="h-5 w-5" />
                  LinkedIn
                </a>
                <a
                  href="mailto:zakariagoumri23@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  Email
                </a>
              </CardContent>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

