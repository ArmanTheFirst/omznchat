"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useUser } from "@clerk/nextjs"
import { motion } from 'framer-motion'
import ThemeToggle from "@/app/(root)/(routes)/dashboard/_components/ThemeToggle"

export function SiteHeader() {
  const pathname = usePathname()
  const { isSignedIn, user } = useUser()

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  return (
    <header className="border-b border-border/100 bg-background/95 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 w-full h-14">
      <div className="container flex h-full items-center justify-between px-4 max-w-6xl mx-auto">
        {/* Logo */}
        <Link 
          href="/" 
          className="group flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
        >
          <motion.div
            whileHover={{ rotate: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
          >
            <img 
              src="/logo.png" 
              alt="OMZN" 
              className="h-8 w-8 transition-transform duration-300 group-hover:-rotate-12" 
              width={32}
              height={32}
            />
          </motion.div>
          <span className="text-2xl font-semibold text-foreground group-hover:text-primary-light transition-colors">omzn</span>
        </Link>

        {/* Navigation */}
        <nav className="items-center space-x-8 text-sm font-medium hidden md:flex">    
          <Link 
            href="/#examples" 
            className={`transition-colors duration-300 ${isActive('/#examples') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            examples
          </Link>
          <Link 
            href="/#features" 
            className={`transition-colors duration-300 ${isActive('/#features') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            features
          </Link>
          <Link 
            href="/roadmap" 
            className={`transition-colors duration-300 ${isActive('/roadmap') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            roadmap
          </Link>
          <Link 
            href="/#community" 
            className={`transition-colors duration-300 ${isActive('/#community') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            community
          </Link>

        </nav>

        <div className="flex items-center gap-3">
          {/* CTA Button */}
          <Link
            href="/chat"
            className="group relative flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-700 to-blue-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:from-blue-800 hover:to-blue-700 dark:from-blue-600 dark:to-blue-500 dark:hover:from-blue-700 dark:hover:to-blue-600"
          >
            <span className="relative z-10">{isSignedIn ? `hey ${user?.firstName?.toLowerCase() || 'there'} 👋` : 'get started'}</span>
            <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          
          {/* Theme Toggle - Subtle version */}
          <ThemeToggle 
            variant="ghost"
            className="h-8 w-8"
            iconSize={16}
          />
        </div>
      </div>
    </header>
  )
}
