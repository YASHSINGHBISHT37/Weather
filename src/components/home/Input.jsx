import React, { useEffect } from 'react'

const Input = () => {
    useEffect(() => {
        
    })

    return (
        <div className='h-auto pt-6'>
            <div className="input w-auto flex justify-center items-center h-auto gap-2 mt-10 relative lg:hidden mx-6">

                <div className='w-full relative flex justify-between items-center border-[.2vh] border-[#121212]/60 rounded-2xl px-3'>
                    <input type="text" placeholder="Search by the city..." className="cityInput lg:w-[30vw] w-full h-9 outline-none bg- text-[#121212]/80" />
                    <img src="/icons/search.png" alt="search-icon" className='w-5 h-5 opacity-100' />
                </div>

                <ul className="suggestions text-[#121212]/70 absolute top-11 lg:top-12 left-0 w-full h-auto border- bg-white/80 backdrop-blur-[1vw] lg:bg-white/10 lg:backdrop-blur-[.8vw] border-[#121212]/50 rounded-2xl max-h-48 overflow-auto z-50">
                    {/* <li class="w-full flex justify-between items-center cursor-pointer py-1 ${borderClass} border-[#121212]/50 px-4 hover:bg-blue-700/70 hover:text-white " >
                        <h1>h1</h1>
                        <h1>h1</h1>
                    </li> */}

                </ul>
            </div>
        </div>
    )
}

export default Input
