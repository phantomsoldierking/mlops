import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          AutoML-MLOps
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/data-upload" className="hover:text-gray-300">Data Upload</Link></li>
          <li><Link href="/model-training" className="hover:text-gray-300">Model Training</Link></li>
          <li><Link href="/predictions" className="hover:text-gray-300">Predictions</Link></li>
          <li><Link href="/experiments" className="hover:text-gray-300">Experiments</Link></li>
        </ul>
      </nav>
    </header>
  )
}