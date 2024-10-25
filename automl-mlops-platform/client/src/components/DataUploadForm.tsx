'use client'

import { useState } from 'react'
import { uploadData } from '@/lib/api'

export default function DataUploadForm() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return

    setUploading(true)
    setMessage('')

    try {
      const result = await uploadData(file)
      setMessage(`File uploaded successfully. Data ID: ${result.data_id}`)
    } catch (error) {
      setMessage('Error uploading file. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="file" className="block mb-2">Select a CSV file:</label>
        <input
          type="file"
          id="file"
          accept=".csv"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
      </div>
      <button
        type="submit"
        disabled={!file || uploading}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
      {message && <p className="mt-4 text-sm text-gray-600">{message}</p>}
    </form>
  )
}