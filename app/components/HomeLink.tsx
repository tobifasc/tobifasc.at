'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function HomeLink() {

  const path = usePathname()

  return (path !== "/" ? <Link href="/" className="underline p-10">Home</Link> : <></>);
}

