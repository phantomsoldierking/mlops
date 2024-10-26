"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Twitter, ExternalLink } from 'lucide-react';

export default function Footer() {
  const teamMembers = [
    { 
      name: 'Anas', 
      role: 'Developer',
      github: 'https://github.com/anas',
      linkedin: 'https://linkedin.com/in/anas',
      email: 'anas@example.com'
    },
    { 
      name: 'Yogeshgouda', 
      role: 'Developer',
      github: 'https://github.com/yogeshgouda',
      linkedin: 'https://linkedin.com/in/yogeshgouda',
      email: 'yogeshgouda@example.com'
    },
    { 
      name: 'Vishesh', 
      role: 'Developer',
      github: 'https://github.com/vishesh',
      linkedin: 'https://linkedin.com/in/vishesh',
      email: 'vishesh@example.com'
    },
    { 
      name: 'Yash', 
      role: 'Developer',
      github: 'https://github.com/yash',
      linkedin: 'https://linkedin.com/in/yash',
      email: 'yash@example.com'
    },
  ];

  const footerLinks = {
    Platform: [
      { name: 'Features', href: '#features' },
      { name: 'Documentation', href: '#docs' },
      { name: 'API Reference', href: '#api' },
    ],
    Resources: [
      { name: 'Blog', href: '#blog' },
      { name: 'Tutorials', href: '#tutorials' },
      { name: 'Support', href: '#support' },
    ],
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' },
    ],
  };

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

  const SocialLink = ({ href, icon: Icon, label }: any) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="text-gray-400 hover:text-white transition-colors"
      aria-label={label}
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  );

  return (
    <motion.footer 
      className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-12"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent mb-4">
              AutoML-MLOps Platform
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Empowering machine learning workflows with automated solutions.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <SocialLink href="https://github.com/automl-mlops" icon={Github} label="GitHub" />
              <SocialLink href="https://twitter.com/automl-mlops" icon={Twitter} label="Twitter" />
              <SocialLink href="mailto:contact@automl-mlops.com" icon={Mail} label="Email" />
            </div>
          </motion.div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <motion.div key={section} variants={itemVariants} className="text-center md:text-left">
              <h4 className="font-semibold text-white mb-4">{section}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <motion.div variants={itemVariants} className="border-t border-slate-800 pt-8 mt-8">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Code2 className="w-5 h-5 text-blue-400" />
              <h4 className="font-semibold">Developed by Syntax Squad</h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors"
                >
                  <p className="font-medium text-sm mb-2">{member.name}</p>
                  <p className="text-xs text-gray-400 mb-3">{member.role}</p>
                  <div className="flex justify-center space-x-3">
                    <SocialLink href={member.github} icon={Github} label={`${member.name}'s GitHub`} />
                    <SocialLink href={member.linkedin} icon={Linkedin} label={`${member.name}'s LinkedIn`} />
                    <SocialLink href={`mailto:${member.email}`} icon={Mail} label={`Email ${member.name}`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Copyright */}
          <motion.div 
            variants={itemVariants}
            className="text-center text-gray-400 text-sm mt-8"
          >
            <p>© {new Date().getFullYear()} AutoML-MLOps Platform. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}