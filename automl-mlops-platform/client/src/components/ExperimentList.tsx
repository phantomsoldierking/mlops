'use client'

import { useState, useEffect } from 'react'
import { getExperiments } from '@/lib/api'
import { Experiment } from '@/types'

export default function ExperimentList() {
  const [experiments, setExperiments] = useState<Experiment[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchExperiments = async () => {
      try {
        const fetchedExperiments = await getExperiments()
        setExperiments(fetchedExperiments)
      } catch  (error) {
        console.error('Error fetching experiments:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchExperiments()
  }, [])

  if (loading) {
    return <div>Loading experiments...</div>
  }

  return (
    <div className="space-y-4">
      {experiments.map((experiment) => (
        <div key={experiment.id} className="bg-white shadow rounded-lg p-4">
          <h3 className="font-bold text-lg mb-2">{experiment.name}</h3>
          <p><strong>Task:</strong> {experiment.task}</p>
          <p><strong>Model:</strong> {experiment.model}</p>
          <p><strong>Accuracy:</strong> {experiment.accuracy.toFixed(4)}</p>
          <p><strong>Created:</strong> {new Date(experiment.created_at).toLocaleString()}</p>
        </div>
      ))}
    </div>
  )
}