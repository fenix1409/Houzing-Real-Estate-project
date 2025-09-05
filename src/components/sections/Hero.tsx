import { BathIcon, BedIcon, GarageIcon, RulerIcon } from '@/assets/Icons'
import Link from 'next/link'
import React from 'react'
import HeaderBottomResponsive from '../ui/HeaderBottomResponsive'

const Hero = () => {
    const information = [
        { id: 1, title: "4 beds", icon: <BedIcon /> },
        { id: 2, title: "5 baths", icon: <BathIcon /> },
        { id: 3, title: "2 garages", icon: <GarageIcon /> },
        { id: 4, title: "1200 Sq Ft", icon: <RulerIcon /> }
    ]
    return (
        <section className='hero'>
            <div className="bg-[#000000CC] backdrop:blur-sm z-50 w-full h-full pt-[134px] px-[474px] text-center max-lg:px-10 max-md:px-4 max-sm:pt-[90px] max-sm:px-[19px]">
                <h1 className='text-white text-[44px] leading-[48px] font-bold max-lg:text-[32px] max-lg:leading-[38px] max-sm:text-[28px] max-sm:leading-[36px] max-sm:font-semibold mb-2'>Skyper Pool Partment</h1>
                <p className='text-[16px] text-white leading-[24px] mb-6 max-lg:text-[14px] max-lg:leading-[20px]'>112 Glenwood Ave Hyde Park, Boston, MA</p>
                <div className="w-full flex flex-wrap items-center justify-center gap-6 mb-6 max-lg:gap-4 max-md:gap-3 max-sm:gap-2">
                    {information.map(item => (
                        <div className="w-[80px] h-[47px] flex flex-col gap-[4px] items-center justify-center max-sm:w-[60px] max-sm:h-[40px]" key={item.id}>
                            <div className="max-sm:w-5 max-sm:h-5">{item.icon}</div>
                            <p className='text-[16px] text-white leading-[24px] max-lg:text-[14px] max-lg:leading-[20px] max-sm:text-[12px] max-sm:leading-[16px]'>{item.title}</p>
                        </div>
                    ))}
                </div>
                <p className='text-[28px] leading-[36px] font-semibold mb-[48px] max-sm:mb-[24px] text-white'>$5,250/mo</p>
                <Link href={'#'} className='w-[180px] py-[12px] px-[51px] text-[14px] leading-[20px] text-white border-[1px] border-white rounded-[2px]'>Read more</Link>
                <div className="hidden max-sm:block"><HeaderBottomResponsive /></div>
            </div>
        </section>
    )
}

export default Hero