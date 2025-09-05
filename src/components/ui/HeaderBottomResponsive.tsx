"use client"
import { AdvancedSearchIcon, HousesIcon, PriceIcon, SearchIcon, StatusIcon } from '@/assets/Icons'
import React from 'react'
import Button from './Button'
import AdvancedModal from './AdvancedModal'

const HeaderBottomResponsive = () => {
    const [showModal, setShowModal] = React.useState(false)
    return (
        <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 flex flex-col gap-6">
            {/* Address input */}
            <div className="flex items-center gap-3 border-b pb-2">
                <HousesIcon />
                <input
                    className="outline-none w-full text-base sm:text-lg md:text-xl leading-6 text-[#0D263B] bg-transparent placeholder:text-[#888]"
                    type="text"
                    placeholder="Enter an address, city, ZIP code"
                />
            </div>
            {/* Status select */}
            <div className="flex items-center gap-3 border-b pb-2">
                <StatusIcon />
                <select className="outline-none w-full text-base sm:text-lg md:text-xl leading-6 text-[#0D263B] bg-transparent">
                    <option value="">Status</option>
                    <option value="for-sale">For Sale</option>
                    <option value="for-rent">For Rent</option>
                </select>
            </div>
            {/* Price select */}
            <div className="flex items-center gap-3 border-b pb-2">
                <PriceIcon />
                <select className="outline-none w-full text-base sm:text-lg md:text-xl leading-6 text-[#0D263B] bg-transparent">
                    <option value="">Price</option>
                    <option value="0-100k">$0 - $100k</option>
                    <option value="100k-500k">$100k - $500k</option>
                    <option value="500k+">$500k+</option>
                </select>
            </div>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
                <Button
                    variant="secondary"
                    className="w-full sm:w-1/2 border-2 border-[#0061DF] text-[#0061DF] bg-white flex items-center justify-center gap-2 text-base sm:text-lg py-3"
                    icon={<AdvancedSearchIcon />}
                    type="button"
                    onClick={() => setShowModal(true)}
                >
                    Advanced
                </Button>
                <Button
                    variant="primary"
                    className="w-full sm:w-1/2 bg-[#0061DF] text-white flex items-center justify-center gap-2 text-base sm:text-lg py-3"
                    icon={<SearchIcon />}
                    type="submit"
                >
                    Search
                </Button>
            </div>
            {showModal && <AdvancedModal onClose={() => setShowModal(false)} />}
        </div>
    )
}

export default HeaderBottomResponsive