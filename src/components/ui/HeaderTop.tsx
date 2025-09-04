import { IconLogo, MenuBtn } from '@/assets/Icons'
import Link from 'next/link'
import React from 'react'

const HeaderTop = () => {
  const links = [
    { id: 1, title: "Home", path: '/home' },
    { id: 2, title: "Properties", path: '/properties' },
    { id: 3, title: "Contacts", path: '/contacts' }
  ]
  return (
    <div className='px-[130px] py-[14px] bg-[#0D263B] max-sm:px-[16px] max-sm:py-[12px] flex items-center justify-between'>
      <button className='hidden max-sm:block'>
        <MenuBtn />
      </button>
      <Link href={'/'}>
        <IconLogo />
      </Link>
      <div className='flex items-center gap-[64px] max-sm:hidden'>
        {links.map(item => (
          <Link href={item.path} key={item.id} className='text-[16px] leading-[24px] text-white'>{item.title}</Link>
        ))}
      </div>
      <Link href={'/login'} className='w-[120px] py-[12px] px-[40px] text-[14px] leading-[20px] text-white border-[1px] border-white rounded-[2px]'>Login</Link>
    </div>
  )
}

export default HeaderTop