"use client"

import { Button } from '../Button'
import { BiChevronRight, BiDownArrow, BiDownload } from 'react-icons/bi'
import { HiHeart } from 'react-icons/hi2'
import { motion } from 'framer-motion'
import { socialLinks } from '@/constants/SocialLinks'
import Link from 'next/link'
import Image from 'next/image'
import { container, anim1, anim2 } from '@/constants/anim'


export default function HeroSection() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="min-h-screen pt-24 pb-28 items-center justify-center flex flex-col gap-12"
    >

      <div
        className='font-family-secondary font-medium mt-8  text-6xl md:text-[90px] flex flex-wrap text-center justify-center items-center gap-4 max-w-3xl mx-auto'
        style={{ lineHeight: "90%" }}
      >
        {["Welcome", "to", "SMS,", "simplified."].map((word, i) => (
          <motion.h1
            key={i}
            variants={anim1}
            className={word === "SMS," ? "text-accent italic" : ""}
          >
            {word}
          </motion.h1>
        ))}
      </div>


      <div className='font-family-primary text-center text-sm md:text-[17px]'>
        {[
          "No ads. No tracking. No clutter",
          "Send sms directly easily to your liking."
        ].map((line, i) => (
          <motion.h1 className='' key={i} variants={anim1}>
            {line}
          </motion.h1>
        ))}
      </div>
      <div className='flex gap-4 items-center '>
        <motion.div variants={anim1}>
          <Link  href="/app-release.apk" download="SMSender.apk">
            <Button size='xl'>
              <h1>Now Available</h1>
              <BiDownload className='size-5' />
            </Button></Link>

        </motion.div>
        <motion.div
          variants={anim1}
        >

          <Button variant='secondary' size='xl'>
            <h1>Support Us</h1>
            <HiHeart className='text-rose-600 size-5' />
          </Button>
        </motion.div>
      </div>
      <div className='-mt-5'>
        <motion.div
          variants={anim1}
          className='flex items-center gap-5'>
          {socialLinks.map((social, i) =>
            <Link className='hover:text-accent ease-in duration-100' href={social.href} key={i}>
              <social.icon className='size-5' />
            </Link>
          )}
        </motion.div>
      </div>

      <motion.div
        variants={anim2}
        className="relative w-full h-120">
        <video
          src="/a.mp4"

          autoPlay
          loop
          className="object-cover h-full w-full brightness-70 rounded-xl border-b-4 border-[0.5px] border-gray-500 border-b-primary"
        />
      </motion.div>
    </motion.div>
  )
}