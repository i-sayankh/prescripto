import { NavLink, useNavigate } from "react-router-dom"; // Importing necessary components from react-router-dom
import { assets } from "../assets/assets"; // Importing assets like images or icons from the assets folder
import { useState } from "react"; // Importing useState for state management

// Navbar Component
const Navbar = () => {
    const navigate = useNavigate(); // Hook to navigate programmatically
    const [showMenu, setShowMenu] = useState(false); // State to manage the visibility of the menu (not used in the current implementation)
    const [token, setToken] = useState(true); // State to check if the user is logged in or not

    return (
        <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400"> {/* Main Navbar Container */}
            <img onClick={() => navigate('/')} src={assets.logo} alt="" className="w-44 cursor-pointer" /> {/* Logo */}

            {/* Navigation Links */}
            <ul className="hidden md:flex items-start gap-5 font-medium">
                <NavLink to='/'> {/* Link to Home */}
                    <li className="py-1">Home</li>
                    <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
                </NavLink>
                <NavLink to='/doctors'> {/* Link to All Doctors */}
                    <li className="py-1">All Doctors</li>
                    <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
                </NavLink>
                <NavLink to='/about'> {/* Link to About */}
                    <li className="py-1">About</li>
                    <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
                </NavLink>
                <NavLink to='/contact'> {/* Link to Contact */}
                    <li className="py-1">Contact</li>
                    <hr className="border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden" />
                </NavLink>
            </ul>

            {/* User Authentication Section */}
            <div className="flex items-center gap-4">
                {
                    token ? ( /* Conditional Rendering: If user is logged in */
                        <div className="flex items-center gap-2 cursor-pointer group relative"> {/* User Profile Dropdown */}
                            <img src={assets.profile_pic} alt="" className="w-8 rounded-full" /> {/* Profile Picture */}
                            <img src={assets.dropdown_icon} alt="" className="w-2.5" /> {/* Dropdown Icon */}

                            {/* Dropdown Menu */}
                            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                                <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                                    <p
                                        onClick={() => navigate('/my-profile')} // Navigate to My Profile Page
                                        className="hover:text-black cursor-pointer"
                                    >
                                        My Profile
                                    </p>
                                    <p
                                        onClick={() => navigate('/my-appointments')} // Navigate to My Appointments Page
                                        className="hover:text-black cursor-pointer"
                                    >
                                        My Appointments
                                    </p>
                                    <p
                                        onClick={() => setToken(false)} // Logout Functionality
                                        className="hover:text-black cursor-pointer"
                                    >
                                        Logout
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : ( /* If user is not logged in */
                        <button
                            onClick={() => navigate('/login')} // Navigate to Login Page
                            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
                        >
                            Create Account
                        </button>
                    )
                }
            </div>
        </div>
    );
}

export default Navbar; // Exporting Navbar Component
