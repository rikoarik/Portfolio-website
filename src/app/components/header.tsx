"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useDarkMode } from "../context/darkmodecontext";

export const Header = () => {
    const pathname = usePathname();
    const { darkMode, toggleDarkMode } = useDarkMode();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className="sticky top-0 z-50">
            <div className="rounded-lg bg-white dark:bg-black shadow-md dark:shadow-dark">
                <div className="rounded-lg flex items-center justify-between p-3">
               
                    <Link
                        href="/"
                        className="inline-flex items-center gap-3 text-2xl font-semibold text-dark dark:text-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="h-6 w-6"
                        >
                            <path
                                fill="currentColor"
                                d="M0 1.5A1.5 1.5 0 0 1 1.5 0H9a1.5 1.5 0 0 1 1.5 1.5v21A1.5 1.5 0 0 1 9 24H1.5A1.5 1.5 0 0 1 0 22.5v-21Zm13.5 0A1.5 1.5 0 0 1 15 0h7.5A1.5 1.5 0 0 1 24 1.5V9a1.5 1.5 0 0 1-1.5 1.5H15A1.5 1.5 0 0 1 13.5 9V1.5Zm0 13.5a1.5 1.5 0 0 1 1.5-1.5h7.5A1.5 1.5 0 0 1 24 15v7.5a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5V15Z"
                            />
                        </svg>
                        <span>
                            My<span className="text-primary">Portfolio</span>
                        </span>
                    </Link>

                    <ul className="hidden lg:flex gap-4">
                        <li>
                            <Link
                                href="/home"
                                className={`px-3 py-2 rounded-lg text-base font-medium ${
                                    pathname === "/home"
                                        ? "text-primary bg-gray-100 dark:bg-dark-2"
                                        : "text-muted hover:text-dark dark:hover:text-white"
                                }`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className={`px-3 py-2 rounded-lg text-base font-medium ${
                                    pathname === "/about"
                                        ? "text-primary bg-gray-100 dark:bg-dark-2"
                                        : "text-muted hover:text-dark dark:hover:text-white"
                                }`}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/projects"
                                className={`px-3 py-2 rounded-lg text-base font-medium ${
                                    pathname === "/projects"
                                        ? "text-primary bg-gray-100 dark:bg-dark-2"
                                        : "text-muted hover:text-dark dark:hover:text-white"
                                }`}
                            >
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/resume"
                                className={`px-3 py-2 rounded-lg text-base font-medium ${
                                    pathname === "/resume"
                                        ? "text-primary bg-gray-100 dark:bg-dark-2"
                                        : "text-muted hover:text-dark dark:hover:text-white"
                                }`}
                            >
                                Resume
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className={`px-3 py-2 rounded-lg text-base font-medium ${
                                    pathname === "/contact"
                                        ? "text-primary bg-gray-100 dark:bg-dark-2"
                                        : "text-muted hover:text-dark dark:hover:text-white"
                                }`}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>

                    <button
                        type="button"
                        onClick={toggleDarkMode}
                        className="hidden lg:block p-2 rounded-full bg-gray-100 dark:bg-dark-2 m-2"
                    >
                        {darkMode ? "🌙" : "☀️"}
                    </button>

    
                    <button
                        type="button"
                        className="lg:hidden"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle Mobile Menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            className="h-8 w-8 text-dark dark:text-white"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                            />
                        </svg>
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="lg:hidden transition-transform ease-in-out delay-150">
                        <ul className="rounded-lg flex flex-col gap-4 p-4 bg-white dark:bg-black">
                            <li>
                                <Link
                                    href="/"
                                    className={`block px-3 py-2 rounded-lg text-base font-medium ${
                                        pathname === "/"
                                            ? "text-primary bg-gray-100 dark:bg-dark-2"
                                            : "text-muted hover:text-dark dark:hover:text-white"
                                    }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className={`block px-3 py-2 rounded-lg text-base font-medium ${
                                        pathname === "/about"
                                            ? "text-primary bg-gray-100 dark:bg-dark-2"
                                            : "text-muted hover:text-dark dark:hover:text-white"
                                    }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/projects"
                                    className={`block px-3 py-2 rounded-lg text-base font-medium ${
                                        pathname === "/projects" 
                                            ? "text-primary bg-gray-100 dark:bg-dark-2"
                                            : "text-muted hover:text-dark dark:hover:text-white"
                                    }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/resume"
                                    className={`block px-3 py-2 rounded-lg text-base font-medium ${
                                        pathname === "/resume"
                                            ? "text-primary bg-gray-100 dark:bg-dark-2"
                                            : "text-muted hover:text-dark dark:hover:text-white"
                                    }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Resume
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className={`block px-3 py-2 rounded-lg text-base font-medium ${
                                        pathname === "/contact" 
                                            ? "text-primary bg-gray-100 dark:bg-dark-2"
                                            : "text-muted hover:text-dark dark:hover:text-white"
                                    }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};


