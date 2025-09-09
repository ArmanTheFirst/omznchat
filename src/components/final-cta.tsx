import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { Discord, GitHub, Twitter } from "./icons/icons";
import { env } from "@/env";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section id="community" className="relative w-full overflow-hidden sm:px-16">
          <div className="relative">
            <LampContainer>
              <motion.div
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: -30 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="bg-gradient-to-br -mt-24 sm:-mt-0 from-foreground to-foreground/70 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-5xl">
                  become a part of this project
                </h2>
              </motion.div>
            </LampContainer>
          </div>
          <div className="relative z-10 -mt-72 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-muted-foreground font-medium text-lg mb-8">
              hang out with contributors, share ideas, or just watch omzn grow in the open. everyone's invited.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={env.NEXT_PUBLIC_DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#5865F2] text-white hover:bg-[#4752c4] transition-colors text-sm font-medium"
              >
                <Discord className="h-4 w-4 text-inherit" />
                Join Discord
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={env.NEXT_PUBLIC_X_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors text-sm font-medium"
              >
                <Twitter className="h-4 w-4 text-inherit" />
                Follow on X
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={env.NEXT_PUBLIC_GITHUB_REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:bg-accent/50 transition-colors text-sm font-medium"
              >
                <GitHub className="h-4 w-4 text-inherit" />
                Contribute
              </motion.a>
            </div>
            
            <motion.div 
              className="mt-8 text-base text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Link 
                href="/roadmap" 
                className="hover:text-foreground transition-colors border-b border-dotted border-muted-foreground/30 hover:border-foreground"
              >
                see our roadmap →
              </Link>
            </motion.div>
          </motion.div>
        </div>
       
        </section>
  );
}