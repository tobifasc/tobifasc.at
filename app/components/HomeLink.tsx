'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const HomeLink = () => {

  const path = usePathname()

  return (path !== "/" ? <Link href="/" className="underline p-10">Home</Link> : <></>);
}

export default HomeLink
