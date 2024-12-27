import { useState } from "react"
import { assets } from "../assets/assets"

/**
 * MyProfile - A component for displaying and editing user profile information
 * Supports both view and edit modes with real-time updates
 * @returns {JSX.Element} Profile component with editable fields
 */
const MyProfile = () => {
  // Initialize user data state with default values
  const [userData, setUserData] = useState({
    name: 'John Smith',
    image: assets.profile_pic,
    email: 'john.smith@email.com',
    phone: '+1 234 567 8900',
    address: {
      line1: '123 Main Street',
      line2: "Apartment 4B, New York"
    },
    gender: 'Male',
    dob: '1990-01-01',
  });

  // Toggle between edit and view modes
  const [isEdit, setIsEdit] = useState(true);

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      {/* Profile Image Section */}
      <img className="w-36 rounded" src={userData.image} alt="Profile" />

      {/* Name Section - Toggles between input and text display */}
      {
        isEdit
          ? <input
            className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
            type="text"
            value={userData.name}
            onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
          />
          : <p className="font-medium text-3xl text-neutral-800 mt-4">{userData.name}</p>
      }
      <hr className="bg-zinc-400 h-[1px] border-none" />

      {/* Contact Information Section */}
      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          {/* Email Field */}
          <p className="font-medium">Email Id:</p>
          {
            isEdit
              ? <input
                className="bg-gray-100 max-w-52"
                type="text"
                value={userData.email}
                onChange={e => setUserData(prev => ({ ...prev, email: e.target.value }))}
              />
              : <p className="text-blue-500">{userData.email}</p>
          }

          {/* Phone Field */}
          <p className="font-medium">Phone:</p>
          {
            isEdit
              ? <input
                className="bg-gray-100 max-w-52"
                type="text"
                value={userData.phone}
                onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
              />
              : <p className="text-blue-400">{userData.phone}</p>
          }

          {/* Address Fields */}
          <p className="font-medium">Address:</p>
          {
            isEdit
              ? <p>
                <input
                  className="bg-gray-50"
                  type="text"
                  onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
                  value={userData.address.line1}
                />
                <br />
                <input
                  className="bg-gray-50"
                  type="text"
                  onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
                  value={userData.address.line2}
                />
              </p>
              : <p className="text-gray-500">
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
          }
        </div>
      </div>

      {/* Basic Information Section */}
      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          {/* Gender Selection */}
          <p className="font-medium">Gender:</p>
          {
            isEdit
              ? <select
                className="max-w-20 bg-gray-100"
                onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}
                value={userData.gender}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              : <p className="text-gray-400">{userData.gender}</p>
          }

          {/* Birthday Field */}
          <p className="font-medium">Birthday:</p>
          {
            isEdit
              ? <input
                className="max-w-28 bg-gray-100"
                type="date" value={userData.dob}
                onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))}
              />
              : <p className="text-gray-400">{userData.dob}</p>
          }
        </div>
      </div>

      {/* Action Button Section */}
      <div className="mt-10">
        {
          isEdit
            ? <button
              className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
              onClick={() => setIsEdit(false)}
            >
              Save Information
            </button>
            : <button
              className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
              onClick={() => setIsEdit(true)}
            >
              Edit Profile
            </button>
        }
      </div>
    </div>
  )
}

export default MyProfile