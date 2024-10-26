"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Footer() {
  const teamMembers = [
    { name: 'Anas', role: 'Developer' },
    { name: 'Yogeshgouda', role: 'Developer' },
    { name: 'Vishesh', role: 'Developer' },
    { name: 'Yash', role: 'Developer' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer 
      className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-8 mt-8"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
              AutoML-MLOps Platform
            </h3>
            <p className="text-gray-300 text-sm">
              Empowering machine learning workflows with automated solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="/data-upload" className="hover:text-blue-400 transition-colors">Data Upload</a></li>
              <li><a href="/model-training" className="hover:text-blue-400 transition-colors">Model Training</a></li>
              <li><a href="/predictions" className="hover:text-blue-400 transition-colors">Predictions</a></li>
              <li><a href="/experiments" className="hover:text-blue-400 transition-colors">Experiments</a></li>
            </ul>
          </motion.div>

          {/* Team Section */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2">
            <div className="text-center mb-4">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Code2 className="w-5 h-5 text-blue-400" />
                <h4 className="font-semibold">Developed by Syntax Squad</h4>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {teamMembers.map((member, index) => (
                  <TooltipProvider key={index}>
                    <Tooltip>
                      <TooltipTrigger>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors"
                        >
                          <p className="font-medium text-sm">{member.name}</p>
                          <p className="text-xs text-gray-400">{member.role}</p>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View Profile</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-gray-700 pt-6 mt-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} AutoML-MLOps Platform. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}