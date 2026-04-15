"use client"
import { CgChevronDown } from 'react-icons/cg'
import { useRef, useState } from 'react'
import { dropdownConstants } from '@/constants/DropDownConstants'
import { AnimatePresence, easeIn, easeOut, motion } from "motion/react"
import useOutsideClick from '@/hooks/useOutsideClick'
export default function DropDown() {
    const [dropdownopen, setdropdownOpen] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)
    const btnref = useRef<HTMLButtonElement>(null)
    const handleClick = () => {
        setdropdownOpen(prev => !prev)
    }
    useOutsideClick({ ref: ref, handler: handleClick ,btnref:btnref})

    return (
        <div className='md:relative hidden'>
            <button
                ref={btnref}
                onClick={handleClick}
                className='flex cursor-pointer items-center gap-2 font-semibold text-[17px]'>
                <span><h1>Useful Links</h1></span>
                <CgChevronDown className={`${dropdownopen ? "rotate-180" : "rotate-0"} transition-transform ease-in duration-200`} />
            </button>


            <AnimatePresence>
                {dropdownopen &&
                    <motion.div
                        ref={ref}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: { ease: easeIn, duration: 0.3 } }}
                        exit={{ y: 5, opacity: 0, transition: { ease: easeOut, duration: 0.2 } }}
                        className='absolute z-50 bg-background top-full w-100 left-1/2 -translate-x-1/2 mt-4 shadow-md shadow-stone-500 p-6 border-2 border-primary flex flex-col gap-4 rounded-xl'>
                        {dropdownConstants.map((dropdown) =>
                            <button key={dropdown.id} className='flex flex-col gap-6 h-full text-left px-4 py-2 rounded-xl cursor-pointer hover:bg-secondary transition-colors ease-in duration-200'>
                                <div className='flex flex-col gap-1'>
                                    <div className='flex gap-2 items-center'>
                                        <span className='font-semibold text-[17px]'>{dropdown.title}</span>
                                        {dropdown.icon && <dropdown.icon className='size-5' />}
                                    </div>
                                    <p>{dropdown.desc}</p>
                                </div>
                            </button>
                        )}
                    </motion.div>
                }
            </AnimatePresence>


        </div>
    )
}