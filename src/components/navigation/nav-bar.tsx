'use client'
import { RiCloseLine, RiMenuLine } from '@remixicon/react'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '../ui/button'

const LOGO_URL = "https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/projects-images/navbar-component/starter/img/abstractly.svg"

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (state?: boolean) => {
    setIsOpen(prev => state !== undefined ? state : !prev);
  }
  return (
    <>
      <header className='w-full pt-4'>
        <div className='max-w-[90rem] mx-auto px-4 md:px-8 xl:px-28 flex py-3 min-h-[4.25rem] items-center gap-24 justify-between'>
          <Image
            width={112}
            height={32}
            alt="Abstractly Logo"
            src={LOGO_URL}
          />
          <nav className='hidden xl:flex flex-1'>
            <ul className='flex flex-row gap-8 text-base font-medium text-neutral-600 [&>li]:hover:text-neutral-800 '>
              <li><a href="/home">Home</a></li>
              <li><a href="/features">Features</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/about">About us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
          <div className='hidden xl:flex gap-4'>
            <Button variant={'secondary'} size={'lg'}>Learn more</Button>
            <Button variant={'primary'} size={'lg'}>See pricing</Button>
          </div>
          <div className='flex xl:hidden'>
            <Button onClick={() => toggleMenu()} aria-label='Open mobile menu' variant={'link-gray'} size={'sm'}><RiMenuLine /></Button>
          </div>
        </div>
      </header >


      {/* slide-out menu */}
      <div
        aria-hidden={true}
        data-visible={isOpen}
        className='data-[visible=false]:hidden xl:hidden fixed w-dvw h-dvh bg-neutral-500/50 top-0 left-0'
        onClick={() => toggleMenu(false)}
      />
      <aside
        data-visible={isOpen}
        role="navigation"
        aria-label="Main menu"
        className='fixed flex flex-col xl:hidden w-[22.5rem] h-dvh bg-white top-0 left-0 p-4 pt-8 gap-6 justify-between transition-all -translate-x-[100%] data-[visible=true]:translate-x-0' >
        <div className='flex items-center justify-between'>
          <Image
            width={112}
            height={32}
            alt="Abstractly Logo"
            src={LOGO_URL}
          />
          <Button onClick={() => toggleMenu(false)} aria-label='Open mobile menu' variant={'link-gray'} size={'sm'}><RiCloseLine /></Button>
        </div>
        <nav className='flex flex-1'>
          <ul className='flex flex-col gap-2 text-base font-medium text-neutral-600 [&>li]:hover:text-neutral-800 [&>li]:px-3 [&>li]:py-2'>
            <li><a href="/home">Home</a></li>
            <li><a href="/features">Features</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div className='flex flex-col gap-4'>
          <Button variant={'secondary'} size={'lg'}>Learn more</Button>
          <Button variant={'primary'} size={'lg'}>See pricing</Button>
        </div>

      </aside >

    </>
  )
}

export { NavBar }
