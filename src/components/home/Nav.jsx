import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import Login from '../../pages/Login'
// import Signup from '../../pages/Signup'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const menuRaf = useRef(null)

    useEffect(() => {
        const outClick = (e) => {
            if (menuRaf.current && !menuRaf.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", outClick);
        }

        return () => {
            document.removeEventListener("mousedown", outClick);
        };
    }, [isOpen]);

    return (
        <div className='w-screen h-auto fixed top-2 z-[9999] '>
            {/* Navbar */}
            <nav className="Menu ... w-full lg:top-2 lg:px-8 px-5 py- flex justify-between items-center">
                <div className="relative">
                    <Link to='/'>
                        <h1 className="text-3xl font-bold tracking-tight text-white"><span className="text-blue-600">W</span>eather.</h1>
                    </Link>
                </div>

                <div className="menu w-6 h-[2.2vh] gap-1 flex flex-col cursor-pointer" onClick={() => setIsOpen(!isOpen)} >
                    <div className={`bar w-auto h-1/3 rounded-full transition-colors duration-300 ${isOpen ? "bg-blue-600" : "bg-white"}`}></div>
                    <div className={`bar w-auto h-1/3 rounded-full transition-colors duration-300 ${isOpen ? "bg-blue-600" : "bg-white"}`}></div>
                    <div className={`bar w-auto h-1/3 rounded-full transition-colors duration-300 ${isOpen ? "bg-blue-600" : "bg-white"}`}></div>
                </div>

            </nav>

            {/* Extended Menu */}
            <div ref={menuRaf} className={`extended-menu ... w-screen lg:w-[24vw] h-96 p-3 lg:right-0 lg:top-13 fixed bottom-0 z-[9999] transition-transform duration-500 transform ${isOpen ? 'translate-y-0' : 'translate-y-[110%]'} ${isOpen ? "lg:translate-x-0" : "lg:translate-x-full"}`}>
                <div className="menu-cont bg-[#121212]/20 backdrop-blur-[4vw] w-full h-full rounded-2xl border-1 border-white/40 flex flex-col justify-between px-5 py-2 text-white">

                    <div className="top w-full h-full flex flex-col">

                        <div className="top justify-between items-center">
                            <div className="flex justify-between items-start">
                                <p className="font-bold text-[3vh] text-white/60 mb-4">Links</p>
                            </div>
                        </div>

                        <span className="overflow-hidden">
                            <a href="mailto:yashbisht0007@gmail.com"
                                className="font-bold text-5xl lg:hover:text-blue-600 active:text-blue-600 gap-3 ml-[-6.2vh] lg:ml-[-5.6vh] hover:ml-0  transition-all duration-300 ease-in-out inline-flex">
                                <img src="/icons/link.png" alt="email" className="w-10 h-10 mt-1" />Email
                            </a>
                        </span>

                        <span className="overflow-hidden">
                            <a href="https://github.com/YASHSINGHBISHT37" target="_blank"
                                className="font-bold text-5xl lg:hover:text-blue-600 active:text-blue-600 gap-3 ml-[-6.2vh] lg:ml-[-5.6vh] hover:ml-0  transition-all duration-300 ease-in-out inline-flex">
                                <img src="/icons/link.png" alt="Github" className="w-10 h-10 mt-1 " />Github
                            </a>
                        </span>

                        <span className="overflow-hidden">
                            <a href="https://linkedin.com/in/yash-singh-bisht-349960295" target="_blank"
                                className="font-bold text-5xl lg:hover:text-blue-600 active:text-blue-600 gap-3 ml-[-6.2vh] lg:ml-[-5.6vh] hover:ml-0  transition-all duration-300 ease-in-out inline-flex">
                                <img src="/icons/link.png" alt="Linkdin" className="w-10 h-10 mt-1" />Linkedin
                            </a>
                        </span>

                        <span className="overflow-hidden">
                            <a href="https://instagram.com/thunderbeast37" target="_blank"
                                className="font-bold text-5xl lg:hover:text-blue-600 active:text-blue-600 gap-3 ml-[-6.2vh] lg:ml-[-5.6vh] hover:ml-0  transition-all duration-300 ease-in-out inline-flex">
                                <img src="/icons/link.png" alt="instagram" className="w-10 h-10 mt-1" />Instagram
                            </a>
                        </span>
                    </div>

                    <div className="bottom border-t-[.1vh] border-white/50 w-full h-8 px-1 pt-1 font-bold flex justify-between items-center text-[1.8vh]">
                        <p className="text-white">Website by&nbsp;<span className="text-blue-600">Yash Singh Bisht.</span>
                        </p>
                        <div className="flex items-center mb-1 font-bold text-white">
                            <Link to="/login" className="active:text-blue-600 hover:text-blue-600">Login</Link>
                            <p className="mx-1">/</p>
                            <Link to="/signup" className="active:text-blue-600 hover:text-blue-600">Signup</Link>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Nav
