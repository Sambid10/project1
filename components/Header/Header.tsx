"use client"
import { Button } from '../Button'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import DropDown from './DropDown'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
export default function Header() {
  const pathname = usePathname()
  return (
    <header className='sticky  z-50  bg-background top-0 w-full h-24  flex items-center justify-between'>

      <Link
        href={"/"}
      >
        <h1 className='font-family-secondary text-3xl tracking-wide italic text-accent font-medium'>Lumen</h1>
      </Link>

      <DropDown />
      {pathname === "/weather" ? <Link href={"/"}>
        <Button className='w-50' size='xl'>
          <h1>Go Back</h1>
          <BiChevronLeft className='size-5' />
        </Button>
      </Link> :
        <Link href={"/weather"}>
          <Button className='w-50' size='xl'>
            <h1>Get Started</h1>
            <BiChevronRight className='size-5' />
          </Button>
        </Link>
      }


    </header>
  )
}
