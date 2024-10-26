import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Inter } from 'next/font/google'

import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AutoML-MLOps Platform',
  description: 'An end-to-end AutoML and MLOps solution',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
      </body>
    </html>
  )
}