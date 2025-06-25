import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import DarkModeToggle from './DarkModeToggle';

const links = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Blog', href: '#medium' },
    { name: 'Contact', href: '#contact' },

];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 py-4 px-4 md:px-8 flex justify-between items-center border-b border-gray-200 dark:border-gray-700 shadow-sm">
            <h1 className="text-xl font-bold text-blue-600 dark:text-blue-300">Learn. Code. Build</h1>
            {/* Dark Mode Toggle */}
            <DarkModeToggle />

            <nav className="space-x-6 hidden md:flex">
                {links.map((link, index) => (
                    <motion.a
                        key={index}
                        href={link.href}
                        className="text-gray-800 hover:text-blue-600 dark:text-blue-300 dark:hover:text-white transition cursor-pointer"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}
                        onClick={(e) => {
                            e.preventDefault();
                            const target = document.querySelector(link.href);
                            if (target) {
                                window.scrollTo({
                                    top: target.offsetTop,
                                    behavior: 'smooth',
                                });
                            }
                        }}
                    >
                        {link.name}
                    </motion.a>
                ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-gray-700 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                ☰
            </button>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div
                    className="absolute top-full left-0 w-full bg-white dark:bg-gray-800 dark:text-gray-100 bg-opacity-95 shadow-lg md:hidden z-50"
                >
                    <div className="flex flex-col py-4">
                        {links.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="px-4 py-2 text-gray-700 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const target = document.querySelector(link.href);
                                    if (target) {
                                        window.scrollTo({
                                            top: target.offsetTop,
                                            behavior: 'smooth',
                                        });
                                    }
                                    setIsMenuOpen(false);
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;