import { useContext } from "react"
import { AppContext } from "../context/AppContext"

/**
 * MyAppointments Component
 * Displays a list of upcoming appointments with doctors, including their details and action buttons
 * Uses the AppContext to access the doctors data
 */
const MyAppointments = () => {
  // Get doctors data from AppContext
  const { doctors } = useContext(AppContext);

  return (
    <div>
      {/* Section header */}
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">My appointments</p>

      {/* Appointments list container */}
      <div>
        {/* Map through first 3 doctors and display their appointments */}
        {doctors.slice(0, 3).map((item, index) => (
          // Individual appointment card with grid layout that switches to flex on small screens
          <div className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b" key={index}>
            {/* Doctor's image container */}
            <div>
              <img className="w-32 bg-indigo-50" src={item.image} alt="" />
            </div>

            {/* Doctor and appointment details */}
            <div className="flex-1 text-sm text-zinc-600">
              {/* Doctor's name and speciality */}
              <p className="text-neutral-800 font-semibold">{item.name}</p>
              <p>{item.speciality}</p>

              {/* Address section */}
              <p className="text-zinc-700 font-medium mt-1">Address</p>
              <p className="text-xs">{item.address.line1}</p>
              <p className="text-xs">{item.address.line2}</p>

              {/* Appointment date and time */}
              <p className="text-xs mt-1">
                <span className="text-sm text-neutral-700 font-medium">Date & Time:</span>
                12 Jnaury 4569 | 11:00 AM
              </p>
            </div>

            {/* Spacer div for layout purposes */}
            <div></div>

            {/* Action buttons container */}
            <div className="flex flex-col gap-2 justify-end">
              {/* Payment button with hover effects */}
              <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300">Pay Online</button>

              {/* Cancel appointment button with hover effects */}
              <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300">Cancel Appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments