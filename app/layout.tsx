import './styles/globals.css';
import { Inter } from 'next/font/google';
import HomeLink from './components/HomeLink';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'tobifasc.at',
  description: 'Created by me',
}

export default function Layout({
    children
  }: {
      children: React.ReactNode
    }) {
  return (
    <html>
        <body>
            <div className="min-h-screen">
              <div className="flex">
                <HomeLink />
                <a className="underline hover:underline-offset-4 w-30 p-10 ml-auto" href="https://github.com/tobifasc">Github</a>
                <a className="underline hover:underline-offset-4 w-30 p-10">LinkedIn</a>
                <a className="underline hover:underline-offset-4 w-30 p-10 mr-10">Anything else?</a>
                <a className="underline hover:underline-offset-4 w-30 p-10 mr-10">No?</a>
              </div>
              {children}
            </div>
        </body>
    </html>
  )
}