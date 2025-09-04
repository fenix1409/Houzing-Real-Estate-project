import { AdvancedSearchIcon, HousesIcon, SearchIcon } from '@/assets/Icons'
import React from 'react'
import Button from './Button'

const HeaderBottom = () => {
    return (
        <div className='px-[130px] py-[10px] flex items-center justify-between max-sm:hidden'>
            <label className='w-[829px] border-[1px] rounded-[2px] pl-[15px] py-[15px] border-[#E6E9EC] flex items-center gap-[15px]'>
                <HousesIcon />
                <input className='outline-none w-full text-[14px] leading-[20px] text-[#0D263B]' type="text" placeholder='Enter an address, neighborhood, city, or ZIP code' />
            </label>
            <button className='w-[131px] py-[12px] px-[16px] text-[14px] leading-[20px] border-[1px] border-[#E6E9EC] flex items-center gap-[8px]'><AdvancedSearchIcon /> Advanced</button>
            <Button icon={<SearchIcon />}>Search</Button>
        </div>
    )
}

export default HeaderBottom