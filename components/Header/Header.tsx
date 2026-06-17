"use client"
import { Button } from '../Button'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import DropDown from './DropDown'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BsDownload } from 'react-icons/bs'
export default function Header() {
  const pathname = usePathname()
  return (
    <header className='sticky  z-50  bg-background top-0 w-full h-24  flex items-center justify-between'>

      <Link
        href={"/"}
      >
        <h1 className='font-family-secondary text-2xl md:text-3xl tracking-wide italic text-accent font-medium'>SMS Sender</h1>
      </Link>
      <Link  href="/app-release.apk" download="SMSender.apk">
           <Button className='w-40 md:w-50 ' size='xl'>
          <h1>Download Apk</h1>
          <BsDownload className='size-4' />
        </Button>
      </Link>

    </header>
  )
}
