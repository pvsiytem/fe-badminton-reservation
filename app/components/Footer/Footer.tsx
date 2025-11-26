import React from "react";
import Link from "next/link";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
            <div className="container mx-auto px-4 py-8">
                <Link href="/" className="font-black text-tertiary-dark dark:text-tertiary-light">
                    Badminton Reservation App
                </Link>

                <div className="flex flex-wrap gap-16 justify-between mt-10">
                    <div className="flex-1 min-w-[200px]">
                        <h4 className="font-semibold text-[23px] py-6 text-gray-800 dark:text-gray-200">About Us</h4>
                        <p className="pb-4 text-gray-600 dark:text-gray-400">Our Story</p>
                        <p className="pb-4 text-gray-600 dark:text-gray-400">Get in Touch</p>
                        <p className="pb-4 text-gray-600 dark:text-gray-400">Terms & Conditions</p>
                    </div>

                    <div className="flex-1 min-w-[200px] md:text-center">
                        <h4 className="font-semibold text-[23px] py-6 text-gray-800 dark:text-gray-200">Ecosystem</h4>
                        <p className="pb-4 text-gray-600 dark:text-gray-400">Sparring</p>
                        <p className="pb-4 text-gray-600 dark:text-gray-400">Play Together</p>
                        <p className="pb-4 text-gray-600 dark:text-gray-400">Team Directory</p>
                        <p className="pb-4 text-gray-600 dark:text-gray-400">Venue Directory</p>
                    </div>

                    <div className="flex-1 min-w-[200px] md:text-right">
                        <h4 className="font-semibold text-[23px] py-6 text-gray-800 dark:text-gray-200">Contact Us</h4>

                        <p className="text-gray-600 dark:text-gray-400">Wakazho Road</p>

                        <div className="flex items-center py-4 md:justify-end text-gray-600 dark:text-gray-400">
                            <BsFillSendFill />
                            <p className="ml-2">badmin.app</p>
                        </div>

                        <div className="flex items-center py-4 md:justify-end text-gray-600 dark:text-gray-400">
                            <BsTelephoneOutbound />
                            <p className="ml-2">666-666-666</p>
                        </div>

                        <div className="flex items-center py-4 md:justify-end text-gray-600 dark:text-gray-400">
                            <MdEmail />
                            <p className="ml-2">company@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-tertiary-light dark:bg-tertiary-dark h-10 md:h-[65px] flex items-center justify-center w-full">
                <p className="text-gray-800 dark:text-gray-200">
                    &copy; {new Date().getFullYear()} Badminton Reservation App. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;