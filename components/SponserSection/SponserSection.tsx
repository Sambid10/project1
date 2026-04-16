"use client"
import Image from 'next/image'
import { container, item } from '@/constants/reveal-anim'
import { motion } from "motion/react"
export default function SponserSection() {
    return (
        <motion.div 
        variants={container}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{once:true}}
        className='pb-28 text-center flex flex-col gap-4 items-center'>
            <motion.h1
            variants={item}
            className='text-6xl font-semibold tracking-tight'>Our Sponser</motion.h1>
            <motion.div
             variants={item}
            className='flex flex-col gap-0.5 '>
                <p>We are grateful to our sponsors for their support. They help us to keep the project alive.</p>
                <p>You can also be part of this journey by donating to us directly!</p>
            </motion.div>
            <motion.div
             variants={item}
            >
                <Image
                    src={"/openweather-seeklogo.svg"}
                    height={79}
                    width={176}
                    className='object-cover'
                    alt='logo'
                />
            </motion.div>

        </motion.div>
    )
}
