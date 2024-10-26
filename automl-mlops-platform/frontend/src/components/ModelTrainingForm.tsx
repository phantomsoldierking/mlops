'use client'

import { useState, useEffect } from 'react'
import { getAvailableModels, trainModel } from '@/lib/api'

export default function ModelTrainingForm() {
  const [availableModels, setAvailableModels] = useState<string[]>([])
  const [selectedModel, setSelectedModel] = useState('')
  const [training, setTraining] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const models = await getAvailableModels()
        setAvailableModels(models)
        if (models.length > 0) {
          setSelectedModel(models[0])
        }
      } catch (error) {
        console.error('Error fetching models:', error)
      }
    }
    fetchModels()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedModel) return

    setTraining(true)
    setMessage('')

    try {
      const result = await trainModel(selectedModel)
      setMessage(`Model training started. Run ID: ${result.run_id}`)
    } catch (error) {
      setMessage('Error starting model training. Please try again.')
    } finally {
      setTraining(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="model" className="block mb-2">Select a model:</label>
        <select
          id="model"
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded"
        >
          {availableModels.map((model) => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        disabled={!selectedModel || training}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
      >
        {training ? 'Training...' : 'Start Training'}
      </button>
      {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}
    </form>
  )
}