import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
    // Initialize the navigate function to programmatically navigate to different routes
    const navigate = useNavigate();

    // Access the 'doctors' data from the AppContext
    const { doctors } = useContext(AppContext);

    return (
        <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
            {/* Section Heading */}
            <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
            <p className="sm:w-1/3 text-center text-sm">
                Simply browse through our extensive list of trusted doctors.
            </p>

            {/* Doctors Grid */}
            <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
                {doctors.slice(0, 10).map((item, index) => (
                    <div
                        key={index}
                        // Navigate to the appointment page with the selected doctor's ID
                        onClick={() => { navigate(`/appointment/${item._id}`), scrollTo(0, 0) }}
                        className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
                    >
                        {/* Doctor's Image */}
                        <img src={item.image} alt="" className="bg-blue-50" />

                        {/* Doctor's Details */}
                        <div className="p-4">
                            {/* Availability Indicator */}
                            <div className="flex items-center gap-2 text-sm text-center text-green-500">
                                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                                <p>Available</p>
                            </div>

                            {/* Doctor's Name */}
                            <p className="text-gray-900 text-lg font-medium">{item.name}</p>

                            {/* Doctor's Speciality */}
                            <p className="text-gray-600 text-sm">{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* 'More' Button to navigate to the complete list of doctors */}
            <button
                onClick={() => {
                    navigate('/doctors');
                    scrollTo(0, 0); // Scroll to the top of the page
                }}
                className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10"
            >
                More
            </button>
        </div>
    );
};

export default TopDoctors;
