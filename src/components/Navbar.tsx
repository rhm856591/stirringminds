'use client'
import React, { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const NavItems = [
        { name: 'Class 10', path: '/class-10' },
        { name: 'Class 11-12', path: '/class-11-12' },
        { name: 'Counsellors', path: '/counsellors' },
        { name: 'Professionals', path: '/professionals' },
        { name: 'Study Abroad', path: '/study-abroad' },
        { name: 'Psychometric Test', path: '/psychometric-test' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Courses', path: '/courses' },
    ];

    const AuthItems = [
        { name: 'Sign In', path: '/login' },
        { name: 'My Dashboard', path: '/user/dashboard' }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <main className='fixed top-0 left-0 w-full z-50 bg-white'>
            <nav className='flex justify-between items-center bg-white shadow-lg px-4 py-3'>
                {/* Logo */}
                <div className="logo">
                    <img src='https://i.ibb.co/w0BJt1L/cg-logo.png' alt="logo" className="" />
                </div>

                {/* Hamburger Menu Button - visible on mobile only */}
                <button
                    className="md:hidden flex flex-col justify-center items-center"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-gray-800 mb-1.5 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-gray-800 mb-1.5 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center justify-between flex-1 ml-8">
                    {/* Nav Items */}
                    <ul className='flex flex-wrap justify-center gap-3.5 items-center'>
                        {NavItems.map((item, index) => (
                            <li key={index} className="mx-1">
                                <a
                                    href={item.path}
                                    className='text-[12px] hover:bg-[#3939DE] hover:text-white px-2 py-2 rounded-lg whitespace-nowrap'
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                        {/* Mobile Number - visible on desktop, hidden on mobile */}
                    <div className="hidden md:block">
                        <span className='text-[#3939DE] text-sm'>918800442358</span>
                    </div>
                    </ul>

                    {/* Auth Items */}
                    <ul className='flex space-x-2'>
                        {AuthItems.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.path}
                                    className='hover:bg-[#3939DE] hover:text-white text-[#5c6873] px-3 py-2 rounded-lg font-bold text-sm'
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Mobile Navigation Menu */}
            <div
                className={`md:hidden bg-white shadow-lg overflow-hidden transition-max-height duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen' : 'max-h-0'
                    }`}
            >
                <ul className='flex flex-col p-4 space-y-3'>
                    {/* Mobile Number */}
                    <li className='pb-2 border-b border-gray-200'>
                        <span className='text-[#3939DE] text-sm'>918800442358</span>
                    </li>

                    {/* Nav Items */}
                    {NavItems.map((item, index) => (
                        <li key={index} className="border-b border-gray-100 pb-2">
                            <a
                                href={item.path}
                                className='block text-sm hover:bg-[#3939DE] hover:text-white px-2 py-2 rounded-lg'
                                onClick={toggleMenu}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}

                    {/* Auth Items */}
                    <li className='pt-2 flex flex-col space-y-2'>
                        {AuthItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.path}
                                className='block text-center bg-gray-50 hover:bg-[#3939DE] hover:text-white text-[#5c6873] px-3 py-2 rounded-lg font-bold text-sm'
                                onClick={toggleMenu}
                            >
                                {item.name}
                            </a>
                        ))}
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default Navbar