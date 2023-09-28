import './styles/globals.css';
import Link from 'next/link';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'tobifasc.at',
  description: 'Created by me',
}

export default function Page() {
  return (
      <div className="container mx-auto text-center p-20">
        <h1 className="text-4xl md:text-7xl font-bold">TOBIFASC.AT</h1>
        <div className="mx-auto text-center p-10">
          <p className="text-2xl">Hi, I am <span className="font-bold">Tobias</span>.</p>
          <p className="text-2xl">By day I am a <span className="font-bold">fullstack developer</span>.</p>
          <p className="text-2xl">What I&apos;m most passionate about though is <span className="font-bold">backend</span> and <span className="font-bold">DevOps</span>.</p>
          <p className="text-2xl mt-5">Take a look at this:</p>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          <Link href="https://edlin.tobifasc.at" className="block w-72 p-6 bg-gray-700 border border-gray-500 rounded-lg shadow hover:bg-gray-600">
            <h2 className="mb-2 text-2xl font-bold">F-Edlin</h2>
            <p>My take on a clone of the famous DOS editor...</p>
          </Link>
          <Link href="/dotfiles" className="block w-72 p-6 bg-gray-700 border border-gray-500 rounded-lg shadow hover:bg-gray-600">
            <h2 className="mb-2 text-2xl font-bold">Dotfiles</h2>
            <p>Some insight into my PC setup...</p>
          </Link>
          <Link href="/serversetup" className="block w-72 p-6 bg-gray-700 border border-gray-500 rounded-lg shadow hover:bg-gray-600">
            <h2 className="mb-2 text-2xl font-bold">Server-Setup</h2>
            <p>What is running on my server...</p>
          </Link>
        </div>
      </div>
  )
}
