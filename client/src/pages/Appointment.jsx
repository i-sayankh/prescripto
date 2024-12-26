import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';

/**
 * Appointment component handles doctor appointment booking interface
 * Displays doctor details, available time slots, and booking functionality
 */
const Appointment = () => {
  // Get doctor ID from URL parameters
  const { docId } = useParams();

  // Get global context values
  const { doctors, currencySymbol } = useContext(AppContext);

  // State management
  const [docInfo, setDocInfo] = useState(null);          // Selected doctor's information
  const [docSlots, setDocSlots] = useState([]);         // Available appointment slots
  const [slotIndex, setSlotIndex] = useState(0);        // Selected day index
  const [slotTime, setSlotTime] = useState('');         // Selected time slot

  // Constants
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  /**
   * Fetches and sets the selected doctor's information from the doctors array
   */
  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
  }

  /**
   * Generates available appointment slots for the next 7 days
   * Creates 30-minute intervals between 10 AM and 9 PM
   * For current day, starts from next available hour
   */
  const getAvailableSlots = async () => {
    setDocSlots([]);

    // Get current date
    let today = new Date();

    // Generate slots for next 7 days
    for (let i = 0; i < 7; i++) {
      // Set current date based on loop index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // Set end time (9 PM) for the day
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      // Set start time
      if (today.getDate() === currentDate.getDate()) {
        // For current day, start from next available hour (after 10 AM)
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        // For future days, start from 10 AM
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      // Generate 30-minute time slots until end time
      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedtime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedtime
        });

        // Increment by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots(prev => ([...prev, timeSlots]));
    }
  }

  // Fetch doctor information when component mounts or when doctors/docId changes
  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  // Generate available slots when doctor information is loaded
  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  // Debug: Log slots when they change
  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return docInfo && (
    <div>
      {/* Doctor's Profile Section */}
      <div className='flex flex-col sm:flex-row gap-4'>
        {/* Doctor's Image */}
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
        </div>

        {/* Doctor's Information Card */}
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/* Name and Verification Badge */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo.name} <img className='w-5' src={assets.verified_icon} alt="" />
          </p>

          {/* Qualifications and Experience */}
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>

          {/* About Section */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
              About <img src={assets.info_icon} alt="" />
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>

          {/* Appointment Fee */}
          <p className='text-gray-500 font-medium mt-4'>
            Appointment Fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>

      {/* Appointment Booking Section */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>

        {/* Date Selection */}
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            docSlots.length && docSlots.map((item, index) => (
              <div
                onClick={() => setSlotIndex(index)}
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer 
                ${slotIndex === index ? 'bg-primary text-white' : 'bg-white border border-gray-400'}`}
                key={index}
              >
                <p>{item[0] && item[0].datetime ? daysOfWeek[item[0].datetime.getDay()] : '-'}</p>
                <p>{item[0] && item[0].datetime ? item[0].datetime.getDate() : '-'}</p>
              </div>
            ))
          }
        </div>

        {/* Time Slot Selection */}
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {docSlots.length && docSlots[slotIndex].map((item, index) => (
            <p
              key={index}
              className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer
                ${item.time === slotTime ? "bg-primary text-white" : "text-gray-400 border border-gray-300"}`}
              onClick={() => setSlotTime(item.time)}
            >
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>

        {/* Booking Button */}
        <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>
          Book an Appointment
        </button>
      </div>

      {/* Related Doctors Section */}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  )
}

export default Appointment