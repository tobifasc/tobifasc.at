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
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-7xl font-bold">TOBIFASC.AT</h1>
        <div className="mx-auto text-center p-10">
          <p className="text-3xl">Hi, I am <span className="font-bold text-4xl">Tobias</span>.</p>
          <p className="text-3xl">I am a&nbsp;
            <span 
              className="font-bold text-4xl text-transparent" 
              style={{
                background: "linear-gradient(to right, #6666ff, #0099ff , #00ff00, #ff3399, #6666ff)", 
                backgroundClip: "text",
                WebkitBackgroundClip: "text"}}>
              fullstack developer
            </span> 
            &nbsp;driven by a passion for <span className="font-bold">robust</span>, <span className="font-bold">scalable</span> and <span className="font-bold">secure</span> <span className="font-bold">backends</span>.</p>
          <p className="text-3xl mt-5">My comfortzone is a terminal running <span className="font-bold">VIM</span>.</p>
          <p className="text-2xl mt-10">Beyond the code I&apos;m an avid runner, cook, musician, ...</p>
          <p className="text-2xl mt-10">Do you want to know more about me? <Link href="/about" className="font-bold underline text-3xl">Click here</Link></p>
          <p className="text-2xl mt-5">Or maybe take a look at this:</p>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          <Link href="/serversetup" className="block w-72 p-6 bg-gray-700 border border-gray-500 rounded-lg shadow hover:bg-gray-600 z-10">
            <h2 className="mb-2 text-2xl font-bold">Server-Setup</h2>
            <p>What is running on my server...</p>
          </Link>
          <Link href="/f-edlin" className="block w-72 p-6 bg-gray-700 border border-gray-500 rounded-lg shadow hover:bg-gray-600 z-10">
            <h2 className="mb-2 text-2xl font-bold">F-Edlin</h2>
            <p>My take on a clone of the famous DOS editor...</p>
          </Link>
          <Link href="/nvim-setup" className="block w-72 p-6 bg-gray-700 border border-gray-500 rounded-lg shadow hover:bg-gray-600 z-10">
            <h2 className="mb-2 text-2xl font-bold">Neovim-Setup</h2>
            <p>How to get started using NVim...</p>
          </Link>
        </div>
      </div>
  )
}
