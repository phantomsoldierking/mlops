'use client'

import { useState } from 'react'
import { makePrediction } from '@/lib/api'

export default function PredictionForm() {
  const [task, setTask] = useState('')
  const [input, setInput] = useState('')
  const [predicting, setPredicting] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!task || !input) return

    setPredicting(true)
    setResult(null)

    try {
      const prediction = await makePrediction(task, input)
      setResult(JSON.stringify(prediction, null, 2))
    } catch (error) {
      setResult('Error making prediction. Please try again.')
    } finally {
      setPredicting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="task" className="block mb-2">Select a task:</label>
        <select
          id="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Select a task</option>
          <option value="sentiment-analysis">Sentiment Analysis</option>
          <option value="named-entity-recognition">Named Entity Recognition</option>
          <option value="text-generation">Text Generation</option>
        </select>
      </div>
      <div>
        <label htmlFor="input" className="block mb-2">Input:</label>
        <textarea
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded"
          rows={4}
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={!task || !input || predicting}
        className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
      >
        {predicting ? 'Predicting...' : 'Make Prediction'}
      </button>
      {result && (
        <div className="mt-4">
          <h3 className="font-bold mb-2">Prediction Result:</h3>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">{result}</pre>
        </div>
      )}
    </form>
  )
}