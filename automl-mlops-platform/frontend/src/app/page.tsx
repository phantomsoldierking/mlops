"use client"
import React from 'react';
import { ChevronRight, Sparkles, Cloud, Lock, Play, ArrowRight, Star, Globe, Shield, Zap } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function MainContent() {
  const features = [
    {
      icon: <Sparkles className="h-6 w-6 text-purple-400" />,
      title: "AutoML Training",
      description: "Automatic model selection and hyperparameter optimization with advanced neural architecture search",
      gradient: "from-purple-500/20 via-purple-500/5 to-transparent"
    },
    {
      icon: <Cloud className="h-6 w-6 text-blue-400" />,
      title: "One-Click Deploy",
      description: "Seamless deployment to production with automated scaling and monitoring capabilities",
      gradient: "from-blue-500/20 via-blue-500/5 to-transparent"
    },
    {
      icon: <Lock className="h-6 w-6 text-emerald-400" />,
      title: "Enterprise Security",
      description: "SOC2 compliant infrastructure with end-to-end encryption and audit logging",
      gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent"
    },
    {
      icon: <Globe className="h-6 w-6 text-cyan-400" />,
      title: "Global Edge Network",
      description: "Lightning-fast inference with our distributed edge computing infrastructure",
      gradient: "from-cyan-500/20 via-cyan-500/5 to-transparent"
    },
    {
      icon: <Shield className="h-6 w-6 text-rose-400" />,
      title: "Data Privacy",
      description: "Industry-leading data protection with advanced encryption and access controls",
      gradient: "from-rose-500/20 via-rose-500/5 to-transparent"
    },
    {
      icon: <Zap className="h-6 w-6 text-amber-400" />,
      title: "Real-time Analytics",
      description: "Comprehensive monitoring and analytics with real-time insights dashboard",
      gradient: "from-amber-500/20 via-amber-500/5 to-transparent"
    }
  ];

  const stats = [
    { 
      value: "10M+", 
      label: "Predictions/Day",
      icon: <Star className="h-4 w-4 text-yellow-400" />,
      gradient: "from-yellow-400 to-amber-400"
    },
    { 
      value: "99.9%", 
      label: "Uptime",
      icon: <Cloud className="h-4 w-4 text-blue-400" />,
      gradient: "from-blue-400 to-cyan-400"
    },
    { 
      value: "24/7", 
      label: "Expert Support",
      icon: <Lock className="h-4 w-4 text-emerald-400" />,
      gradient: "from-emerald-400 to-green-400"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 mt-6 overflow-hidden">
      <div className="relative">
        {/* Enhanced Gradient Overlays */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-blue-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-500/20 via-blue-500/5 to-transparent" />
          <div className="absolute inset-0 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-800/30 to-slate-900" />
          <div className="absolute inset-0 bg-grid-slate-800/[0.04] bg-[size:20px_20px]" />
        </div>

        {/* Main Content */}
        <div className="relative container mx-auto px-4 py-16">
          <div className="space-y-24 opacity-0 translate-y-4 animate-[fadeIn_1s_ease-out_forwards]">
            {/* Hero Section */}
            <div className="text-center space-y-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-2">
                  <span className="px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 backdrop-blur-sm opacity-0 -translate-y-4 animate-[fadeInDown_0.6s_ease-out_0.2s_forwards]">
                    ✨ New Release v1.0
                  </span>
                </div>
                <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 leading-tight tracking-tight">
                  Welcome to the Future<br />of MLOps
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                  Experience our next-generation platform with automated machine learning workflows 
                  and enterprise-grade deployment capabilities.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
               <Link href={'/functions'}> 
               <button 
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
                >
                  Get Started Free
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
               </Link>
                <button 
                  className="px-8 py-4 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800/50 hover:border-slate-600 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group backdrop-blur-sm"
                >
                  Watch Demo
                  <Play className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="opacity-0 translate-y-4 animate-[fadeInUp_0.5s_ease-out_forwards]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="bg-slate-900/50 border-slate-800/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 group relative overflow-hidden h-full hover:-translate-y-1">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <CardHeader>
                      <div className="flex items-center gap-4 relative z-10">
                        <div className="p-3 rounded-xl bg-slate-800/80 group-hover:bg-slate-700/80 transition-colors border border-slate-700/50">
                          {feature.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-indigo-400 transition-all">
                          {feature.title}
                        </h3>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div>
              <Card className="bg-slate-900/50 border-slate-800/50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 blur-3xl" />
                <CardContent className="relative p-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {stats.map((stat, index) => (
                      <div 
                        key={index} 
                        className="space-y-4 transition-transform hover:scale-105"
                      >
                        <div className="inline-flex items-center justify-center p-4 rounded-full bg-slate-800/50 border border-slate-700/50 shadow-lg shadow-slate-900/50">
                          {stat.icon}
                        </div>
                        <div className={`text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${stat.gradient}`}>
                          {stat.value}
                        </div>
                        <div className="text-slate-400 font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(1rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(1rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-1rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}