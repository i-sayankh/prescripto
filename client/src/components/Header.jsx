import { assets } from "../assets/assets" // Importing assets required for images and icons

// Functional component for the Header section
const Header = () => {
    return (
        // Wrapper div for the header with responsive flexbox layout and background styling
        <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">

            {/* Left section: Header text and call-to-action button */}
            <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
                {/* Title text for the header */}
                <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
                    Book Appointment <br /> with Trusted Doctors
                </p>

                {/* Section with an image and a supporting description */}
                <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
                    {/* Group profiles image */}
                    <img src={assets.group_profiles} alt="" className="w-28" />
                    {/* Description text */}
                    <p>
                        Simply browse through our extensive list of trusted doctors, <br className="hidden sm:block" />
                        schedule your appointment hassle-free.
                    </p>
                </div>

                {/* Call-to-action button */}
                <a
                    href="#speciality"
                    className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
                >
                    Book Appointment
                    {/* Arrow icon next to the button text */}
                    <img className="w-3" src={assets.arrow_icon} alt="" />
                </a>
            </div>

            {/* Right section: Image for the header */}
            <div className="md:w-1/2 relative">
                {/* Header image with responsive design */}
                <img src={assets.header_img} alt="" className="w-full md:absolute bottom-0 h-auto rounded-lg" />
            </div>
        </div>
    )
}

export default Header // Exporting the Header component for use in other parts of the application
