import { Link } from 'react-router-dom'  // Import Link from 'react-router-dom' to handle navigation between pages
import { specialityData } from "../assets/assets"  // Import speciality data (which contains information about specialities and images)

const SpecialityMenu = () => {
    return (
        <div id="speciality" className='flex flex-col items-center gap-4 py-16 text-gray-800'>
            {/* Title Section */}
            <h1 className='text-3xl font-medium'>Find by Speciality</h1>

            {/* Description Section */}
            <p className='sm:w-1/3 text-center text-sm'>
                Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
            </p>

            {/* Speciality Menu Section */}
            <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
                {/* Iterate through the specialityData array to render each speciality as a link */}
                {specialityData.map((item, index) => (
                    <Link
                        onClick={() => scrollTo(0, 0)}  // Scroll to the top of the page when the speciality is clicked
                        key={index}  // Using index as a unique key for each item
                        to={`/doctors/${item.speciality}`}  // Dynamically generate the URL path based on the speciality
                        className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'
                    >
                        {/* Image for each speciality */}
                        <img src={item.image} alt="" className='w-16 sm:w-24 mb-2' />

                        {/* Name of the speciality */}
                        <p>{item.speciality}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SpecialityMenu
