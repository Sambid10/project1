import React from 'react'


export default function HeroPage() {
  return (
    <div className="h-screen items-center justify-center flex flex-col gap-12">
      <span 
      style={{
        lineHeight:"110%"
      }}
      className='font-family-secondary font-medium text-[82px] flex flex-wrap text-center justify-center items-center gap-2 max-w-2xl mx-auto'>
        <h1>Welcome to</h1> <h1 className='text-secondary italic'>weather,</h1> <h1>simplified.</h1>
      </span>
      <span className='font-family-primary text-center text-[17px]'>
        <h1>No ads. No tracking. No clutter</h1>
        <h1>Just the forecast — beautifully presented.</h1>
      </span>
    </div>
  )
}
