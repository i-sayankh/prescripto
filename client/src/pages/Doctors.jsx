import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

/**
 * Doctors Component
 * Displays a filterable list of doctors with their specialities.
 * Allows users to filter doctors by speciality and navigate to individual doctor appointments.
 */
const Doctors = () => {
  // URL parameter for speciality-based filtering
  const { speciality } = useParams();

  // Access shared doctors data from context
  const { doctors } = useContext(AppContext);

  // Hook for programmatic navigation
  const navigate = useNavigate();

  // State for storing filtered doctors list
  const [filterDoc, setFilterDoc] = useState([]);

  // State to control filter visibility on mobile devices
  const [showFilter, setShowFilter] = useState(false);

  /**
   * Filters the doctors list based on selected speciality
   * If no speciality is selected, shows all doctors
   */
  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  // Apply filters when doctors data or speciality changes
  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      {/* Page description */}
      <p className="text-gray-600">Browse through the doctors specialist.</p>

      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        {/* Mobile filter toggle button */}
        <button
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden
            ${showFilter ? "bg-primary text-white" : ""}`}
          onClick={() => setShowFilter(prev => !prev)}
        >
          Filters
        </button>

        {/* Speciality filter section */}
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          {/* Filter buttons for each speciality
              Each button toggles between filtered and unfiltered view */}
          <p
            onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer 
              ${speciality === "General physician" ? "bg-indigo-100 text-black" : ""}`}
          >
            General physician
          </p>
          {/* Similar structure repeated for other specialities */}
          <p
            onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer
              ${speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""}`}
          >
            Gynecologist
          </p>
          <p
            onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer
              ${speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""}`}
          >
            Dermatologist
          </p>
          <p
            onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer
              ${speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""}`}
          >
            Pediatricians
          </p>
          <p
            onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer
              ${speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""}`}
          >
            Neurologist
          </p>
          <p
            onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer
              ${speciality === "Gastroenterologist" ? "bg-indigo-100 text-black" : ""}`}
          >
            Gastroenterologist
          </p>
        </div>

        {/* Doctors grid section */}
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {/* Map through filtered doctors and display their cards */}
          {filterDoc.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              {/* Doctor's profile image */}
              <img src={item.image} alt="" className="bg-blue-50" />

              {/* Doctor's information card */}
              <div className="p-4">
                {/* Availability status indicator */}
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>

                {/* Doctor's name and speciality */}
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;