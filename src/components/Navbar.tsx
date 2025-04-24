'use client'

import Link from "next/link"
import { useState, useRef } from 'react'
import { ChevronDown, Menu } from 'lucide-react'
import { useClickOutside } from "@/hooks/useClickOutside"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isProjectOpen, setIsProjectOpen] = useState(false)
    const projectRef = useRef<HTMLDivElement>(null)
    const mobileRef = useRef<HTMLDivElement>(null)

    useClickOutside(projectRef, () => setIsProjectOpen(false))
    useClickOutside(mobileRef, () => setIsMenuOpen(false))

    return (
        <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                <Link href="/">
                    <img src="/images/logo.svg" alt="Panglima Image" width={156} height={70} className="object-contain"/>
                </Link>

                <button 
                className="md:hidden flex items-center"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
                >
                    <Menu/>
                </button>
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
                    <Link href="#beranda">Beranda</Link>
                    <div className="relative" ref={projectRef}>
                        <button 
                        onClick={() => setIsProjectOpen(!isProjectOpen)}
                        className="flex items-center gap-1 text-sm font-medium text-gray-700 cursor-pointer">
                            Project <ChevronDown size={16} className={`transition-transform duration-200 ${isProjectOpen ? 'rotate-180' : ''}`}/>
                        </button>
                        {isProjectOpen && (
                            <div className="absolute mt-2 bg-white shadow-md rounded-md overflow-hidden z-500">
                                <Link href="/projects/perumahan" className="block px-4 py-2 hover:bg-gray-100 text-sm" onClick={() => setIsProjectOpen(false)}>
                                    Perumahan
                                </Link>
                                <Link href="/projects/ruko" className="block px-4 py-2 hover:bg-gray-100 text-sm" onClick={() => setIsProjectOpen(false)}>
                                    Ruko
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link href="#tentang">Tentang Kami</Link>
                    <Link href="#faq">Pertanyaan Umum</Link>
                    <Link href="#booking">Cara Booking</Link>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <button className="border border-amber-500 text-amber-500 px-4 py-2 rounded-md hover:bg-amber-500 hover:text-amber-50 hover:cursor-pointer transition">
                        Daftar
                    </button>
                    <button className="border bg-green-700 text-gray-200 px-4 py-2 rounded-md hover:bg-green-600 hover:text-grey-50 hover:cursor-pointer transition">
                        Masuk
                    </button>
                </div>

                {isMenuOpen && (
                    <div ref={mobileRef} className="absolute top-20 left-0 w-full bg-white border-t shadow-md md:hidden z-40">
                        <div className="flex flex-col p-4 space-y-3 text-gray-700 text-sm">
                            <Link href="#beranda" onClick={() => setIsMenuOpen(false)}>Beranda</Link>
                                <button
                                onClick={() => setIsProjectOpen(!isProjectOpen)}
                                className="flex justify-between items-center"
                                >
                                    Project
                                    <ChevronDown size={16} className={`${isProjectOpen ? 'rotate-180' : ''} transition`} />
                                </button>
                                {isProjectOpen && (
                                    <div className="ml-4 flex flex-col space-y-2">
                                        <Link href="/projects/perumahan" onClick={() => setIsMenuOpen(false)}>Perumahan</Link>
                                        <Link href="/projects/ruko" onClick={() => setIsMenuOpen(false)}>Ruko</Link>
                                        <Link href="/projects/kavling" onClick={() => setIsMenuOpen(false)}>Tanah Kavling</Link>
                                    </div>
                                )}
                            <Link href="#tentang" onClick={() => setIsMenuOpen(false)}>Tentang Kami</Link>
                            <Link href="#faq" onClick={() => setIsMenuOpen(false)}>Pertanyaan Umum</Link>
                            <Link href="#booking" onClick={() => setIsMenuOpen(false)}>Cara Booking</Link>
                            <div className="flex gap-2 mt-2">
                                <button className="border border-amber-500 text-amber-500 px-4 py-2 rounded-md w-full">
                                    Daftar
                                </button>
                                <button className="bg-green-700 text-white px-4 py-2 rounded-md w-full">
                                    Masuk
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}