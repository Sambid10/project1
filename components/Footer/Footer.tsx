import ContainerWrapper from '../ContainerWrapper'
import { Button } from '../Button'
import { BiChevronRight } from 'react-icons/bi'
import { footerlinks, footerlinks1, socialLinks } from '@/constants/SocialLinks'
import Link from 'next/link'
import { HiHeart } from 'react-icons/hi2'

export default function Footer() {
    return (
        <footer className='min-h-[80vh] bg-primary text-black'>
            <ContainerWrapper className='py-12 md:py-24 flex flex-col justify-between min-h-[80vh] gap-10 md:gap-0'>

                <div className='flex flex-col gap-3'>
                    <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl'>LUMEN</h1>
                    <div className='text-[#121212] text-sm md:text-base font-medium leading-relaxed'>
                        <p>Beautifully designed, privacy-focused, and packed with</p>
                        <p>features. We care about your experience, not your data.</p>
                    </div>
                </div>

                <Button size='dxl' variant='secondary' className='w-fit md:w-[20%] lg:w-[15%]'>
                    <h1>Get Started</h1>
                    <BiChevronRight />
                </Button>

                <div className='flex flex-wrap gap-8 md:gap-24 lg:gap-40 w-full'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='font-semibold'>Follow Us</h1>
                        <div className='flex items-center gap-4'>
                            {socialLinks.map((social, i) => (
                                <Link className='hover:text-accent ease-in duration-100' href={social.href} key={i}>
                                    <social.icon className='size-6' />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <h1 className='font-semibold'>Get Started</h1>
                        <div className='flex flex-col gap-1 mt-2'>
                            {footerlinks1.map((item, i) => (
                                <Link className='text-[#222220] hover:text-accent ease-in duration-100' href={item.href} key={i}>
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <h1 className='font-semibold'>Get Help</h1>
                        <div className='flex flex-col gap-1 mt-2'>
                            {footerlinks.map((item, i) => (
                                <Link className='text-[#222220] hover:text-accent ease-in duration-100' href={item.href} key={i}>
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <span className='flex items-center gap-1 flex-wrap'>
                    <span>Made with</span>
                    <HiHeart className='text-red-600' />
                    <span>by</span>
                    <span className='text-red-500 underline font-semibold underline-offset-4'>Shakya.</span>
                </span>

            </ContainerWrapper>
        </footer>
    )
}