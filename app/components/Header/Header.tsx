'use client';
import Link from "next/link";
import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import ThemeContext from "@/app/context/themeContext";

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="py-6 px-4 container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex-shrink-0">
            <Link href="/" className="font-black text-2xl text-tertiary-dark dark:text-tertiary-light">
              Badminton Reservation App
            </Link>
          </div>
          
          <nav className="flex items-center gap-8">
            <Link 
              href="/" 
              className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-tertiary-dark dark:hover:text-tertiary-light transition-all duration-300 hover:-translate-y-1"
            >
              Home
            </Link>
           
            <Link 
              href="/venue" 
              className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-tertiary-dark dark:hover:text-tertiary-light transition-all duration-300 hover:-translate-y-1"
            >
              Venue
            </Link>

            
            <Link 
              href="/reservation" 
              className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-tertiary-dark dark:hover:text-tertiary-light transition-all duration-300 hover:-translate-y-1"
            >
              Reservation
            </Link>

            <Link 
              href="/contact" 
              className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-tertiary-dark dark:hover:text-tertiary-light transition-all duration-300 hover:-translate-y-1"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-6">
            {/* Profile Icon for Login */}
            <Link 
              href="/auth" 
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <FaUserCircle className="text-2xl text-gray-600 dark:text-gray-400" />
            </Link>
            
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkTheme(!darkTheme)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={darkTheme ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkTheme ? (
                <MdOutlineLightMode className="text-2xl text-yellow-500" />
              ) : (
                <MdDarkMode className="text-2xl text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;