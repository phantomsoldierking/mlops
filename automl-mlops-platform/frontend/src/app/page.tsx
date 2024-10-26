'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Upload, Brain, ChartBar, FlaskConical, Zap, Cloud, Lock, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Hero Section */}
      <section className="container mx-auto pt-24 pb-16 px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-8"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.div variants={fadeInUp}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500">
              Enterprise AutoML Platform
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your machine learning workflow with automated model training, deployment, and monitoring.
            </p>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600">
              <Link href="/demo" className="flex items-center">
                Start Free Trial
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link href="/documentation">View Documentation</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-12"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <h2 className="text-3xl font-bold mb-4">Enterprise-Grade ML Platform</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Built for data scientists and ML engineers who demand performance and reliability.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={stagger}
            >
              <FeatureCard
                icon={<Upload className="h-8 w-8 text-blue-500" />}
                title="Data Processing"
                description="Advanced data preprocessing with automated feature engineering and validation."
                link="/features/data"
              />
              <FeatureCard
                icon={<Brain className="h-8 w-8 text-teal-500" />}
                title="AutoML Training"
                description="State-of-the-art model selection and hyperparameter optimization."
                link="/features/training"
              />
              <FeatureCard
                icon={<ChartBar className="h-8 w-8 text-indigo-500" />}
                title="Model Analytics"
                description="Comprehensive model performance metrics and monitoring dashboards."
                link="/features/analytics"
              />
              <FeatureCard
                icon={<FlaskConical className="h-8 w-8 text-violet-500" />}
                title="MLOps Pipeline"
                description="Streamlined deployment with continuous integration and monitoring."
                link="/features/mlops"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-12"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <h2 className="text-3xl font-bold mb-4">Streamlined Workflow</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experience machine learning development without the complexity.
              </p>
            </motion.div>

            <Tabs defaultValue="upload" className="w-full">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3">
                <TabsTrigger value="upload">1. Data</TabsTrigger>
                <TabsTrigger value="train">2. Train</TabsTrigger>
                <TabsTrigger value="deploy">3. Deploy</TabsTrigger>
              </TabsList>
              <TabsContent value="upload">
                <WorkflowCard
                  title="Data Management"
                  description="Upload, version, and manage your datasets securely."
                  features={[
                    "Automated data validation",
                    "Version control integration",
                    "Feature store capabilities",
                    "Data quality monitoring"
                  ]}
                />
              </TabsContent>
              <TabsContent value="train">
                <WorkflowCard
                  title="Model Development"
                  description="Train and evaluate models with automated optimization."
                  features={[
                    "AutoML model selection",
                    "Distributed training",
                    "Experiment tracking",
                    "Performance optimization"
                  ]}
                />
              </TabsContent>
              <TabsContent value="deploy">
                <WorkflowCard
                  title="Deployment & Monitoring"
                  description="Deploy models to production with confidence."
                  features={[
                    "One-click deployment",
                    "A/B testing support",
                    "Performance monitoring",
                    "Automatic scaling"
                  ]}
                />
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-12"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <h2 className="text-3xl font-bold mb-4">Enterprise Benefits</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Built for scale, security, and performance.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={stagger}
            >
              <BenefitCard
                icon={<Zap className="h-8 w-8 text-yellow-500" />}
                title="High Performance"
                description="Optimized infrastructure for fast training and inference at any scale."
              />
              <BenefitCard
                icon={<Cloud className="h-8 w-8 text-blue-500" />}
                title="Cloud Native"
                description="Built for modern cloud infrastructure with automatic scaling."
              />
              <BenefitCard
                icon={<Lock className="h-8 w-8 text-green-500" />}
                title="Enterprise Security"
                description="SOC 2 Type II certified with end-to-end encryption."
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <motion.div 
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your ML Workflow?</h2>
            <p className="text-xl mb-8 opacity-90">Join leading enterprises who trust our platform.</p>
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-white/90">
              <Link href="/demo">Schedule a Demo</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description, link }: any) {
  return (
    <motion.div variants={fadeInUp}>
      <Card className="h-full transition-colors hover:border-blue-500/20 hover:bg-muted/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            {icon}
            <span>{title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="w-full justify-between">
            <Link href={link} className="flex items-center w-full justify-between">
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

function BenefitCard({ icon, title, description }: any) {
  return (
    <motion.div variants={fadeInUp}>
      <Card className="text-center transition-colors hover:border-blue-500/20 hover:bg-muted/50">
        <CardHeader>
          <CardTitle className="flex flex-col items-center gap-4">
            <div className="p-3 rounded-full bg-muted">
              {icon}
            </div>
            <span>{title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function WorkflowCard({ title, description, features }: any) {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature: string, index: number) => (
            <li key={index} className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-blue-500" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Learn More</Button>
      </CardFooter>
    </Card>
  )
}