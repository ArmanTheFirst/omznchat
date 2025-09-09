import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import { MessageSquare, Code2, Zap, GitBranch, Lock, Globe, Hammer } from "lucide-react";
import { BackgroundBeams } from "./ui/background-beams";
import Link from "next/link";
import { Highlighter } from "./magicui/highlighter";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { env } from "@/env";

export default function Hero() {
  const textRef = useRef(null);
  const textInView = useInView(textRef, { once: true, margin: "-50px" });
  const textControls = useAnimation();
  
  useEffect(() => {
    if (textInView) {
      textControls.start("visible");
    }
  }, [textInView, textControls]);

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    }),
  };

  const features = [
    { text: "smart ai", icon: <Zap className="h-3.5 w-3.5" /> },
    { text: "open source", icon: <GitBranch className="h-3.5 w-3.5" /> },
    { text: "privacy first", icon: <Lock className="h-3.5 w-3.5" /> },
    { text: "real-time", icon: <Globe className="h-3.5 w-3.5" /> },
    { text: "built in public", icon: <Hammer className="h-3.5 w-3.5" /> },
  ];

  return (
    <section className="relative flex min-h-[calc(100dvh-4rem)] flex-col items-center justify-center overflow-hidden bg-background px-4 sm:px-16 pt-[max(env(safe-area-inset-top,1rem),1rem)] sm:pt-0">
      {/* This div ensures content is always visible below the header */}
      <div className="h-16 w-full absolute top-0 left-0 pointer-events-none" />
      <BackgroundBeams />
      
      <div ref={textRef} className="relative z-10 w-full max-w-4xl px-4 sm:px-6 text-center">
        {/* Enhanced badge with subtle glow */}
        <motion.div
          custom={1}
          initial="hidden"
          animate={textControls}
          variants={textVariants}
          className="group relative mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/80 dark:bg-card/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm transition-all duration-300"
          style={{
            boxShadow: '0 0 0 1px hsl(var(--primary) / 0.3), 0 0 15px hsl(var(--primary) / 0.2)'
          }}
        >
          <motion.div 
            className="absolute inset-0 -z-10 rounded-full"
            animate={{
              boxShadow: [
                '0 0 0 1px hsl(var(--primary) / 0.3), 0 0 10px hsl(var(--primary) / 0.2)',
                '0 0 0 1px hsl(var(--primary) / 0.5), 0 0 20px hsl(var(--primary) / 0.4)',
                '0 0 0 1px hsl(var(--primary) / 0.3), 0 0 10px hsl(var(--primary) / 0.2)'
              ]
            }}
            transition={{
              duration: 3,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          <span className="font-medium">👾 open beta: experiment, break stuff, suggest ideas</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={2}
          initial="hidden"
          animate={textControls}
          variants={textVariants}
          className="mb-6 text-5xl font-medium leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl"
        >
          <span className="dark:bg-gradient-to-r dark:from-gray-200 dark:to-gray-400 dark:bg-clip-text dark:text-transparent">
            chat for the{' '}
            <span className="relative inline-block">
              <Highlighter 
                action="highlight"
                color="#bfdbfe"
                darkColor="#3b82f6"
                animationDuration={2000}
                iterations={2}
              >
                <span className="text-foreground dark:text-gray-200">open web,</span>
              </Highlighter>
            </span>
          </span>
          <motion.div 
            className="mt-4 text-3xl md:text-4xl font-normal"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <TextGenerateEffect 
              words="built by all of us."
              className="text-primary dark:text-primary"
            />
          </motion.div>
        </motion.h1>

        {/* Description */}
        <motion.div
          custom={3}
          initial="hidden"
          animate={textControls}
          variants={textVariants}
          className="mx-auto mb-12 max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed"
        >
          <p className="mb-2">no more black boxes. no closed doors. omzn is a privacy-first, open chat app you can use, fork, and fix. built by dreamers, rebels, and everyone tired of 2010s messaging.</p>
          
        </motion.div>

        {/* CTAs with hover effects */}
        <motion.div
          custom={4}
          initial="hidden"
          animate={textControls}
          variants={textVariants}
          className="mb-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md mx-auto px-4"
        >
          <motion.div 
            className="w-full sm:w-auto"
            whileHover={{ y: -2 }} 
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                delay: 0.3,
                type: 'spring',
                stiffness: 100,
                damping: 10
              } 
            }}
          >
            <Link
              href="/chat"
              className="group relative flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-600/30 hover:from-indigo-700 hover:to-blue-700 dark:from-indigo-500 dark:to-blue-500 dark:hover:from-indigo-600 dark:hover:to-blue-600 sm:px-10"
            >
              <MessageSquare className="h-4 w-4 transition-transform group-hover:scale-110" />
              <span className="relative z-10">try it now</span>
              <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </motion.div>
          
          <motion.div className="w-full sm:w-auto" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
            <Link
              href={env.NEXT_PUBLIC_GITHUB_REPO_URL}
              target="_blank"
              className="group relative flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-3.5 text-sm font-medium text-gray-700 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-white/90 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700/90 sm:px-10"
            >
              <Code2 className="h-4 w-4 transition-transform group-hover:scale-110" />
              <span className="relative z-10">contribute</span>
              <span className="absolute inset-0 rounded-full bg-gray-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:bg-gray-700/30" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated divider */}
        <motion.div 
          className="relative my-8 flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              delay: 0.2,
              duration: 0.5 
            } 
          }}
          viewport={{ once: true }}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-border to-transparent dark:via-border" />
          <span className="mx-4 text-sm text-muted-foreground">OUR PILLARS</span>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-border to-transparent dark:via-border" />
        </motion.div>

        {/* Features with hover effects */}
        <motion.div
          custom={5}
          initial="hidden"
          animate={textControls}
          variants={textVariants}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 text-sm"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -2 }}
              className="group/feature flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-4 py-2 text-sm text-foreground backdrop-blur-sm transition-all hover:bg-background hover:shadow-md hover:shadow-primary/20 dark:border-border dark:bg-card/60 dark:text-foreground dark:hover:bg-card/80 dark:hover:shadow-primary/20"
            >
              <motion.span 
                animate={{ 
                  scale: [1, 1.2, 1],
                  transition: { 
                    duration: 2, 
                    repeat: Infinity,
                    repeatType: 'reverse',
                    ease: 'easeInOut'
                  } 
                }}
              >
                {feature.icon}
              </motion.span>
              <span>{feature.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
