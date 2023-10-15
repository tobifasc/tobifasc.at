'use client'
import { useState } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const path = usePathname()

  return (
  <>
    <div className="hidden md:flex flex-wrap">
			{path !== "/" ? 
    		<Link href="/" className="underline hover:underline-offset-4 p-10">Home</Link> 
    	: <></>}
      <a className="underline hover:underline-offset-4 w-30 p-10 ml-auto" href="https://github.com/tobifasc">Github</a>
      <a className="underline hover:underline-offset-4 w-30 p-10" href="https://www.linkedin.com/in/tobias-fasching-496286125">LinkedIn</a>
    </div>
    <div className="md:hidden flex justify-end p-4">
			<button className="outline-none" onClick={() => setShowDropdown(!showDropdown)}>
				<svg className="w-8 h-8 text-gray-500"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
				</svg>
			</button>
		</div>
		<div className={showDropdown ? '': 'hidden'}>
			<ul>
				{path !== "/" ? 
    		<li onClick={() => setShowDropdown(false)} className="md:hidden p-4">
      		<Link href="/" className="underline">Home</Link> 
    		</li> : <></>}
				<li onClick={() => setShowDropdown(false)} className="p-4">
				  <a className="underline hover:underline-offset-4" href="https://github.com/tobifasc">Github</a>
				</li>
        <li onClick={() => setShowDropdown(false)} className="p-4">
          <a className="underline hover:underline-offset-4" href="https://www.linkedin.com/in/tobias-fasching-496286125">LinkedIn</a>
        </li>
				</ul>
			</div>
			</>
  );
}

