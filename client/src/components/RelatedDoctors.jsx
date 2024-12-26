import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/AppContext"
import { useNavigate } from "react-router-dom";

/**
 * RelatedDoctors component displays a grid of doctors with the same speciality
 * @param {string} docId - Current doctor's ID to exclude from the list
 * @param {string} speciality - Medical speciality to filter doctors by
 */
const RelatedDoctors = ({ docId, speciality }) => {
    // Access global context for doctors data
    const { doctors } = useContext(AppContext);
    // State for filtered list of related doctors
    const [relatedDoctors, setRelatedDoctors] = useState([]);
    // Hook for programmatic navigation
    const navigate = useNavigate();

    // Filter doctors based on speciality and exclude current doctor
    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) =>
                doc.speciality === speciality && doc._id !== docId
            );
            setRelatedDoctors(doctorsData);
        }
    }, [docId, speciality]);

    return (
        <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
            {/* Section Header */}
            <h1 className="text-3xl font-medium">Related Doctors</h1>
            <p className="sm:w-1/3 text-center text-sm">
                Simply browse through our extensive list of trusted doctors.
            </p>

            {/* Doctors Grid Layout */}
            <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
                {/* Display up to 5 related doctors */}
                {relatedDoctors.slice(0, 5).map((item, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            navigate(`/appointment/${item._id}`);
                            scrollTo(0, 0); // Scroll to top after navigation
                        }}
                        className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
                    >
                        {/* Doctor Profile Card */}
                        <img src={item.image} alt="" className="bg-blue-50" />
                        <div className="p-4">
                            {/* Availability Status */}
                            <div className="flex items-center gap-2 text-sm text-center text-green-500">
                                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                                <p>Available</p>
                            </div>

                            {/* Doctor Details */}
                            <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                            <p className="text-gray-600 text-sm">{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Button to Full Doctors List */}
            <button
                onClick={() => {
                    navigate('/doctors');
                    scrollTo(0, 0);
                }}
                className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10"
            >
                More
            </button>
        </div>
    )
}

export default RelatedDoctors