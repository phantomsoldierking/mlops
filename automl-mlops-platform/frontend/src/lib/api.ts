import { Experiment } from '@/types'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export async function uploadData(file: File): Promise<{ data_id: string }> {
  const formData = new FormData()
  formData.append('file', file)

  const response = await fetch(`${API_URL}/data/upload`, {
    method: 'POST',
    body: formData,
  })

  if (!response.ok) {
    throw new Error('Failed to upload data')
  }

  return response.json()
}

export async function getAvailableModels(): Promise<string[]> {
  const response = await fetch(`${API_URL}/model/available`)

  if (!response.ok) {
    throw new Error('Failed to fetch available models')
  }

  const data = await response.json()
  return data.models
}

export async function trainModel(task: string): Promise<{ run_id: string }> {
  const response = await fetch(`${API_URL}/model/train`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ task }),
  })

  if (!response.ok) {
    throw new Error('Failed to start model training')
  }

  return response.json()
}

export async function makePrediction(task: string, input: string): Promise<any> {
  const response = await fetch(`${API_URL}/predict`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ task, data: input }),
  })

  if (!response.ok) {
    throw new Error('Failed to make prediction')
  }

  return response.json()
}

export async function getExperiments(): Promise<Experiment[]> {
  const response = await fetch(`${API_URL}/experiments`)

  if (!response.ok) {
    throw new Error('Failed to fetch experiments')
  }

  return response.json()
}