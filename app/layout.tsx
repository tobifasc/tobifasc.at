import './styles/globals.css';
import { Inter } from 'next/font/google';
import NavBar from './components/NavBar';
import SpaceShip from './components/SpaceShip';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'tobifasc.at',
  description: 'Created by me',
}

function getStarShadows() {
    var result = "";
    for (var i = 0; i < 700; i++) {
        result += Math.floor(Math.random() * 3840) + "px " + Math.floor(Math.random() * 2160) + "px #FFF,";
    }
    return result.slice(0, -1);
}

export default function Layout({
  children
  }: {
      children: React.ReactNode
    }) {
  return (
    <html>
        <body>
            <SpaceShip />
            <div className="min-h-screen pb-10">
              <div style={{boxShadow: getStarShadows(), width: "1px", height: "1px"}} />
              <div style={{boxShadow: getStarShadows(), width: "2px", height: "2px"}} />
              <NavBar />
              {children}
            </div>
        </body>
    </html>
  )
}
