// Import necessary assets and hooks
import { assets } from "../assets/assets"; // Importing assets for image resources
import { useNavigate } from 'react-router-dom'; // Hook for programmatic navigation in React Router

// Banner Component
const Banner = () => {
    const navigate = useNavigate(); // Initialize navigate function for navigation

    return (
        // Container div with responsive padding and margin for the banner
        <div className="flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10">
            {/* Left Section: Text and Button */}
            <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
                {/* Text Section with responsive typography */}
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
                    <p>Book Appointment</p>
                    <p className="mt-4">With 100+ Trusted Doctors</p>
                </div>
                {/* Button for navigation to login page */}
                <button
                    onClick={() => { 
                        navigate('/login'); // Navigate to login page
                        scrollTo(0, 0); // Scroll to top of the page
                    }}
                    className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all"
                >
                    Create Account
                </button>
            </div>

            {/* Right Section: Image (Visible on medium and larger screens) */}
            <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
                {/* Image displaying an appointment-related graphic */}
                <img 
                    src={assets.appointment_img} // Path to the image
                    alt="Appointment Illustration" // Descriptive alt text for accessibility
                    className="w-full absolute bottom-0 right-0 max-w-md" // Styling for positioning and responsiveness
                />
            </div>
        </div>
    );
};

export default Banner; // Exporting the Banner component
