import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext"; // Importing AppContext for shared state

const Doctors = () => {
  // Extracting the 'speciality' parameter from the URL
  const { speciality } = useParams();

  // Accessing the doctors data from the context
  const { doctors } = useContext(AppContext);

  // navigate function to programmatically navigate between pages
  const navigate = useNavigate();

  // State to store filtered doctors based on speciality
  const [filterDoc, setFilterDoc] = useState([]);

  // Function to filter doctors based on the speciality
  const applyFilter = () => {
    if (speciality) {
      // Filter doctors by the given speciality from the URL
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      // If no speciality is provided, show all doctors
      setFilterDoc(doctors);
    }
  };

  // Applying the filter whenever 'doctors' or 'speciality' changes
  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      {/* Description for the page */}
      <p className="text-gray-600">Browse through the doctors specialist.</p>

      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        {/* Speciality filter buttons */}
        <div className=" flex flex-col gap-4 text-sm text-gray-600">
          {/* Button for each speciality that navigates to filtered doctor list */}
          <p
            onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')}
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer 
              ${speciality === "General physician" ? "bg-indigo-100 text-black" : ""}`}
          >
            General physician
          </p>
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

        {/* Displaying the filtered list of doctors */}
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {/* Mapping over the filtered list of doctors */}
          {filterDoc.map((item, index) => (
            <div
              key={index}
              // Navigate to the appointment page with the selected doctor's ID
              onClick={() => navigate(`/appointment/${item._id}`)}
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
      </div>
    </div>
  )
}

export default Doctors;
