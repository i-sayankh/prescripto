import { NavLink, useNavigate } from "react-router-dom"; // Importing routing utilities from react-router-dom
import { assets } from "../assets/assets"; // Importing static assets (images, icons)
import { useState } from "react"; // Importing useState hook for local state management

/**
 * Navbar Component
 * Renders a responsive navigation bar with user authentication features
 * Includes desktop and mobile views with different navigation patterns
 */
const Navbar = () => {
    // Navigation hook for programmatic routing
    const navigate = useNavigate();

    // State for mobile menu visibility
    const [showMenu, setShowMenu] = useState(false);

    // State for user authentication status
    // TODO: Replace with actual auth state management (e.g., Redux, Context)
    const [token, setToken] = useState(true);

    return (
        // Main navbar container with responsive styling
        <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
            {/* Logo with click navigation to home */}
            <img
                onClick={() => navigate('/')}
                src={assets.logo}
                alt=""
                className="w-44 cursor-pointer"
            />

            {/* Desktop Navigation Links
                Hidden on mobile (md:flex), displays inline on desktop */}
            <ul className="hidden md:flex items-start gap-5 font-medium">
                {/* Navigation items with underline hover effect */}
                <NavLink to='/'>
                    <li className="py-1">Home</li>
                    <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
                </NavLink>
                <NavLink to='/doctors'>
                    <li className="py-1">All Doctors</li>
                    <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
                </NavLink>
                <NavLink to='/about'>
                    <li className="py-1">About</li>
                    <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
                </NavLink>
                <NavLink to='/contact'>
                    <li className="py-1">Contact</li>
                    <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
                </NavLink>
            </ul>

            {/* User Authentication Section */}
            <div className="flex items-center gap-4">
                {/* Conditional rendering based on authentication status */}
                {token ? (
                    // User Profile Dropdown - Visible when logged in
                    <div className="flex items-center gap-2 cursor-pointer group relative">
                        {/* User avatar and dropdown toggle */}
                        <img src={assets.hitler_pic} alt="" className="w-8 rounded-full" />
                        <img src={assets.dropdown_icon} alt="" className="w-2.5" />

                        {/* Dropdown Menu - Shows on hover (group-hover:block) */}
                        <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                            <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                                {/* Profile navigation options */}
                                <p
                                    onClick={() => navigate('/my-profile')}
                                    className="hover:text-black cursor-pointer"
                                >
                                    My Profile
                                </p>
                                <p
                                    onClick={() => navigate('/my-appointments')}
                                    className="hover:text-black cursor-pointer"
                                >
                                    My Appointments
                                </p>
                                <p
                                    onClick={() => setToken(false)}
                                    className="hover:text-black cursor-pointer"
                                >
                                    Logout
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    // Login/Signup Button - Visible when logged out
                    <button
                        onClick={() => navigate('/login')}
                        className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
                    >
                        Create Account
                    </button>
                )}

                {/* Mobile Menu Toggle - Only visible on mobile */}
                <img
                    className="w-6 md:hidden"
                    src={assets.menu_icon}
                    alt=""
                    onClick={() => setShowMenu(true)}
                />

                {/* Mobile Navigation Menu
                    Fixed position overlay, shown/hidden based on showMenu state */}
                <div
                    className={`${showMenu ? "fixed w-full" : "h-0 w-0"} 
                    md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
                >
                    {/* Mobile menu header with logo and close button */}
                    <div className="flex items-center justify-between px-5 py-6">
                        <img className="w-3/6" src={assets.logo} alt="Logo" />
                        <img
                            className="w-7"
                            src={assets.cross_icon}
                            alt="Close menu"
                            onClick={() => setShowMenu(false)}
                        />
                    </div>

                    {/* Mobile menu navigation links */}
                    <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
                        {/* Mobile navigation items - close menu on click */}
                        <NavLink onClick={() => setShowMenu(false)} to='/'>
                            <p className="px-4 py-2 rounded inline-block">Home</p>
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/doctors'>
                            <p className="px-4 py-2 rounded inline-block">All Doctors</p>
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/about'>
                            <p className="px-4 py-2 rounded inline-block">About</p>
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/contact'>
                            <p className="px-4 py-2 rounded inline-block">Contact</p>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;