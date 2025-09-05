import React from "react"
import Button from "./Button"

const AdvancedModal: React.FC<{onClose?: () => void}> = ({onClose}) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-40 backdrop-blur-sm z-50">
            <div className="bg-white rounded-lg w-full max-w-[900px] p-4 md:p-10 shadow-lg mx-2">
                <form>
                    {/* Address */}
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold mb-4">Address</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            <input className="border rounded px-4 py-3 w-full" placeholder="Country" />
                            <input className="border rounded px-4 py-3 w-full" placeholder="Region" />
                            <input className="border rounded px-4 py-3 w-full" placeholder="City" />
                            <input className="border rounded px-4 py-3 w-full" placeholder="Zip code" />
                        </div>
                    </div>
                    {/* Apartment info */}
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold mb-4">Apartment info</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                            <input className="border rounded px-4 py-3 w-full" placeholder="Rooms" />
                            <input className="border rounded px-4 py-3 w-full" placeholder="Size" />
                            <input className="border rounded px-4 py-3 w-full" placeholder="Sort" />
                        </div>
                    </div>
                    {/* Price */}
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold mb-4">Price</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <input className="border rounded px-4 py-3 w-full" placeholder="Min price" />
                            <input className="border rounded px-4 py-3 w-full" placeholder="Max price" />
                        </div>
                    </div>
                    {/* Footer */}
                    <div className="flex flex-col md:flex-row justify-end items-center bg-gray-100 px-4 md:px-8 py-4 md:py-6 rounded-b-lg -mx-4 md:-mx-10 -mb-4 md:-mb-10 mt-8 gap-4">
                        <Button variant="secondary" className="w-full md:w-[120px] border border-gray-400 !text-black bg-transparent" type="button" onClick={onClose}>Cancel</Button>
                        <Button variant="primary" className="w-full md:w-[120px]" type="submit">Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdvancedModal