'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ArrowRight, Upload, FlaskConical, Brain, ChartBar } from 'lucide-react'
import Link from 'next/link'

const cards = [
  {
    title: 'Data Upload',
    description: 'Upload and manage your datasets',
    icon: <Upload className="h-8 w-8" />,
    href: '/data-upload',
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    title: 'Experiments',
    description: 'Run and track your ML experiments',
    icon: <FlaskConical className="h-8 w-8" />,
    href: '/experiments',
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    title: 'Model Training',
    description: 'Train and fine-tune your models',
    icon: <Brain className="h-8 w-8" />,
    href: '/model-training',
    gradient: 'from-orange-600 to-red-600'
  },
  {
    title: 'Predictions',
    description: 'Make predictions with your trained models',
    icon: <ChartBar className="h-8 w-8" />,
    href: '/predictions',
    gradient: 'from-green-600 to-emerald-600'
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-8">
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 max-w-5xl w-full"
        initial="hidden"
        animate="visible"
      >
        {cards.map((card, index) => (
          <motion.div
            key={card.href}
            variants={cardVariants}
            custom={index}
            whileHover={{ scale: 1.05, rotate: 0.5 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href={card.href}>
              <Card className="relative bg-slate-900/70 shadow-lg border-none backdrop-blur-md hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group p-6 rounded-2xl">
                <CardHeader className="flex items-center gap-6">
                  <div className={`p-4 rounded-lg bg-gradient-to-br ${card.gradient} text-white shadow-md`}>
                    {card.icon}
                  </div>
                  <div>
                    <CardTitle className="text-white text-xl font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-indigo-400 transition-all">
                      {card.title}
                    </CardTitle>
                    <CardDescription className="text-slate-400 mt-1">
                      {card.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <motion.div 
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ x: 4 }}
                >
                  <ArrowRight className="h-6 w-6 text-white" />
                </motion.div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
