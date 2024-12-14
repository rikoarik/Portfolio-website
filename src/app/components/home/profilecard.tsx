"use client";

import { InterfaceProfile } from "@/app/interfaces/profile"
import ImageComponent from "../image"
import TypingAnimation from "../typingAnimation"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useState, useCallback } from 'react';

interface ProfileProps {
    profiles: InterfaceProfile
}

export default function ProfileCard({ profiles }: ProfileProps) {
    const [copied, setCopied] = useState(false);

    const copyEmail = useCallback(() => {
        navigator.clipboard.writeText("rikoarik04@gmail.com").then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        });
    }, []);
    return (
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-black dark:shadow-dark">
            <div className="aspect-[4/3] overflow-hidden rounded-lg bg-secondary flex items-center justify-center dark:bg-dark-2">
                <ImageComponent
                    src={profiles.image}
                    alt={profiles.image}
                    width={500}
                    height={500}
                    className="max-w-xs sm:max-w-md"
                />
            </div>


            <div className="mt-6">
                <h3 className="text-2xl font-semibold dark:text-light">{profiles.name} 👋</h3>
                <p className="mt-2 text-muted dark:text-light/70">
                    <TypingAnimation />
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                    <a href="https://wa.me/6282139138300" className="inline-flex items-center gap-x-2 rounded-lg border border-transparent bg-primary px-6 py-4 font-medium text-white transition hover:bg-green-600 focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:bg-green-600 dark:hover:bg-green-700">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-6 w-6">
                            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Zm10 3a2 2 0 0 1 2 2m-2-6a6 6 0 0 1 6 6" />
                        </svg>
                        <span>Book A Call</span>
                    </a>
                    <button
                        type="button"
                        onClick={copyEmail}
                        className="inline-flex items-center gap-x-2 rounded-lg border border-light bg-transparent px-6 py-4 font-medium text-dark transition hover:bg-light focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-dark dark:text-light/70 dark:hover:bg-dark dark:hover:text-white"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-6 w-6">
                            <path d="M8 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8Z" />
                            <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
                        </svg>
                        <span>{copied ? "Copied!" : "Copy Email"}</span>
                    </button>

                </div>

                <div className="mt-8 flex flex-wrap items-center gap-2">
                    {/* GitHub */}
                    <div className="group">
                        <a href="https://github.com/rikoarik"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lg:group-hover:animate-bounce lg:group-hover:animate-duration-[2000ms] flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary dark:group-hover:bg-primary dark:group-hover:text-gray-800">
                            <FaGithub className="h-6 w-6" />
                        </a>
                    </div>

                    {/* LinkedIn */}
                    <div className="group">
                        <a href="https://www.linkedin.com/in/rikoarik"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lg:group-hover:animate-bounce lg:group-hover:animate-duration-[2000ms] flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary dark:group-hover:bg-primary dark:group-hover:text-gray-800">
                            <FaLinkedin className="h-6 w-6" />
                        </a>
                    </div>

                    {/* Instagram */}
                    <div className="group">
                        <a href="https://www.instagram.com/__8.bit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lg:group-hover:animate-bounce lg:group-hover:animate-duration-[2000ms] flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition hover:text-primary focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:bg-dark-2 dark:text-slate-500 dark:hover:text-primary dark:group-hover:bg-primary dark:group-hover:text-gray-800">
                            <FaInstagram className="h-6 w-6" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}