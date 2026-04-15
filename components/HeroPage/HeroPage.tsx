"use client"

import { Button } from '../Button'
import { BiChevronRight } from 'react-icons/bi'
import { HiHeart } from 'react-icons/hi2'
import { delay, motion, Variants } from 'framer-motion'

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren:0.2
    }
  }
}

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 5,
    filter: "blur(3px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.35,
      ease: "easeIn"
    }
  }
}

export default function HeroPage() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="h-screen items-center justify-center flex flex-col gap-12"
    >

      <div
        className='font-family-secondary font-medium text-[82px] flex flex-wrap text-center justify-center items-center gap-4 max-w-2xl mx-auto'
        style={{ lineHeight: "90%" }}
      >
        {["Welcome", "to", "weather,", "simplified."].map((word, i) => (
          <motion.h1
            key={i}
            variants={item}
            className={word === "weather," ? "text-accent italic" : ""}
          >
            {word}
          </motion.h1>
        ))}
      </div>


      <div className='font-family-primary text-center text-[17px]'>
        {[
          "No ads. No tracking. No clutter",
          "Just the forecast — beautifully presented."
        ].map((line, i) => (
          <motion.h1 key={i} variants={item}>
            {line}
          </motion.h1>
        ))}
      </div>
      <div className='flex gap-4 items-center '>
        <motion.div variants={item}>
          <Button size='xl'>
            <h1>Now Available</h1>
            <BiChevronRight className='size-5' />
          </Button>
        </motion.div>
        <motion.div
          variants={item}
        >

          <Button variant='secondary' size='xl'>
            <h1>Support Us</h1>
            <HiHeart className='text-rose-600 size-5' />
          </Button>
        </motion.div>
      </div>


    </motion.div>
  )
}