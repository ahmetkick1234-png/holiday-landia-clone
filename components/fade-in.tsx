"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function FadeIn({ children, delay = 0, duration = 600, className = "" }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
