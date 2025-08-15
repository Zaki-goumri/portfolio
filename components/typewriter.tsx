"use client"

import { useState, useEffect } from "react"

interface TypewriterProps {
  text: string
  delay?: number
  onComplete?: () => void
  className?: string
}

export const Typewriter = ({ text, delay = 30, onComplete, className = "" }: TypewriterProps) => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex])
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, delay)

      return () => clearTimeout(timeout)
    } else if (onComplete) {
      onComplete()
    }
  }, [currentIndex, delay, onComplete, text])

  return <span className={className}>{currentText}</span>
}
