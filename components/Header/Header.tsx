import React from 'react'
import { Button } from '../Button'
import { BiChevronRight } from 'react-icons/bi'
import DropDown from './DropDown'
export default function Header() {
  return (
    <header className='absolute top-0 w-full h-24  flex items-center justify-between'>
        <h1 className='font-family-secondary text-3xl tracking-wide italic text-accent font-medium'>Lumen</h1>
        <DropDown/>
        <Button size='xl'>
            <h1>Get Started</h1>
            <BiChevronRight className='size-5'/>
        </Button>
 </header>
  )
}
