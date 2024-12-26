import { assets } from "../assets/assets"

/**
 * Contact component that displays company contact information,
 * office location, and career opportunities.
 * @returns {JSX.Element} A responsive contact page layout
 */
const Contact = () => {
  return (
    <div>
      {/* Header section with "CONTACT US" title */}
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>CONTACT <span className="text-gray-700 font-semibold">US</span></p>
      </div>

      {/* Main content container with responsive flex layout */}
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        {/* Contact image - full width on mobile, max 360px otherwise */}
        <img className="w-full max-w-[360px]" src={assets.contact_image} alt="" />

        {/* Contact information section */}
        <div className="flex flex-col justify-center items-start gap-6">
          {/* Office location details */}
          <p className="font-semibold text-lg text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500">
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>
          
          {/* Contact details */}
          <p className="text-gray-500">Tel: (415) 555‑0132 <br /> contact@prescripto.com </p>
          
          {/* Careers section */}
          <p className="font-semibold text-lg text-gray-600">Careers at PRESCRIPTO</p>
          <p className="text-gray-500">Learn more about our teams and job openings.</p>

          {/* Call-to-action button with hover effects */}
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact