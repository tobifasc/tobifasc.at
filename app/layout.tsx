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
              <div className="flex flex-wrap">
                <HomeLink />
                <a className="underline hover:underline-offset-4 w-30 p-10 md:ml-auto" href="https://github.com/tobifasc">Github</a>
                <a className="underline hover:underline-offset-4 w-30 p-10" href="https://www.linkedin.com/in/tobias-fasching-496286125">LinkedIn</a>
              </div>
              {children}
            </div>
        </body>
    </html>
  )
}
