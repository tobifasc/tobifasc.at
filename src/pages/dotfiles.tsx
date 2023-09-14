import '../styles/globals.css';
import Link from 'next/link';

export default function Dotfiles() {
  return (
    <div className="min-h-screen">
      <div className="flex">
        <Link href="/" className="underline p-10">
          Home
        </Link>
        <a className="underline hover:underline-offset-4 w-30 p-10 ml-auto" href="https://github.com/tobifasc">Github</a>
        <a className="underline hover:underline-offset-4 w-30 p-10">LinkedIn</a>
        <a className="underline hover:underline-offset-4 w-30 p-10 mr-10">Anything else?</a>
        <a className="underline hover:underline-offset-4 w-30 p-10 mr-10">No?</a>
      </div>
      <div className="container mx-auto text-center p-20">
        <h1 className="text-7xl font-bold">Dotfiles</h1>
      </div>
      <div className="mx-auto text-center p-10">
        <p className="text-2xl">What.</p>
      </div>
    </div>
  )
}
