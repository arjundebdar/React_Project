import { useState } from "react"
export default function Navbar() {
    const logo = "./logo-text.png"
    const [isManuOpen, setIsMenuOpen] = useState(false)
    return (
        <nav className="sticky w-full top-0 z-50 border-b border-gray-200 bg-white container mx-auto">
            {/* ================= NAVBAR ================= */}
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 md:h-20">
            {/* ================= Mobile Hamburger ================= */}
                <button onClick={() => setIsMenuOpen(!isManuOpen)}className="flex h-9 w-9 items-center text-slate-700 md:hidden"
                >
                        {isManuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}   
                </button>
                {/* ================= Logo ================= */}
                <div>
                    <img src={logo} alt="" className="h-8 w-auto sm:h-9 md:h-10"/>
                </div>
                {/* ================= Desktop Menu ================= */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-8 text-[15px] font-medium text-slate-600">
                        <li>
                            <a href="#" className="text-pink-600  hover:text-pink-600"
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a href="#" className=" hover:text-pink-600"
                            >
                                Technologies
                            </a>
                        </li>

                        <li>
                            <a href="#" className=" hover:text-pink-600"
                            >
                                Projects
                            </a>
                        </li>

                        <li>
                            <a href="#"className=" hover:text-pink-600"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#"className=" hover:text-pink-600">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                {/* ================= Authentication ================= */}
                <div className="md:ml-12">
                    <ul className="flex items-center gap-3 text-xs font-medium sm:gap-5 sm:text-sm md:gap-6">
                        <li>
                            <a href="#"className="text-slate-700  hover:text-pink-600"
                            >
                                Sign In
                            </a>
                        </li>

                        <li>
                            <a href="#"className="rounded-full bg-pink-600 px-4 py-2 text-white  hover:bg-pink-700 sm:px-5 sm:py-2.5"
                            >
                                Sign Up
                            </a>
                        </li>
                    </ul>
                </div>  
            </div>        
            {/* ================= Mobile Menu ================= */}
            {isManuOpen && (
                <div className="border-t border-gray-100 bg-white px-5 shadow-sm md:hidden">
                    <ul className="flex flex-col gap-4 text-sm font-medium">
                        <li><a href="#"className="block text-pink-600">Home</a></li>
                        <li><a href="#"className="block hover:text-pink-600">Technologies</a></li>
                        <li><a href="#"className="block  hover:text-pink-600">Projects</a></li>
                        <li><a href="#"className="block  hover:text-pink-600">About</a></li>
                        <li><a href="#"className="block  hover:text-pink-600">Contact</a></li>
                    </ul>
                </div>
            )}
        </nav>
    )
}