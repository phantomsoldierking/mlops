import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Welcome to AutoML-MLOps Platform</h1>
      <p className="text-xl">
        This platform provides end-to-end machine learning workflows, from data upload to model deployment.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/data-upload" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-center">
          Upload Data
        </Link>
        <Link href="/model-training" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded text-center">
          Train Model
        </Link>
        <Link href="/predictions" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded text-center">
          Make Predictions
        </Link>
        <Link href="/experiments" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded text-center">
          View Experiments
        </Link>
      </div>
    </div>
  )
}