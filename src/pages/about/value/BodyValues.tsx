import { NavLink } from "react-router-dom";


const BodyValues = () => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row justify-between  bg-[--text-extra] px-6 sm:px-12 lg:px-20 py-10">
      {/* Navigation Section */}
      <div className="w-full bg-[--layer-alt] lg:w-1/2 h-[25rem] px-4 lg:px-8 sm:grid hidden">
        <div className="py-16">
          <ol className="space-y-2">
            <li className="flex border-b-[1.5px] py-4 items-center text-sm text-[--text-extra] ">
              <NavLink to="/about/background" className="hover:scale-110 ">Background</NavLink>
            </li>
            <li className="flex border-b-[1.5px] py-4 items-center text-sm text-[--text-extra]">
              <NavLink to="/about/values" className="hover:scale-110 font-bold text-[--bg-color]">Our Values</NavLink>
            </li>
            <li className="flex border-b-[1.5px] py-4 items-center text-sm text-[--text-extra]">
              <NavLink to="/about/mission" className="hover:scale-110 ">Our Mission</NavLink>
            </li>
            <li className="flex border-b-[1.5px] py-4 items-center text-sm text-[--text-extra]">
              <NavLink to="/about/team" className="hover:scale-110 ">Our Team</NavLink>
            </li>
          </ol>
        </div>
      </div>

      {/* Write-up Section */}
      <div className="w-full bg-[--text-extra] lg:grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6  lg:mx-5">

         {/* main content Section */}
      <h2 className="text-2xl font-bold border-b-[4px] border-[--bg-color] pb-3">Our Ethical and Professional Commitment</h2>
        <p className="text-justify text-base leading-relaxed mb-1">
        At ACC, we take pride in our strong ethical foundation and commitment to integrity, values deeply rooted in the vision of our founders. We are dedicated to excellence, innovation, and responsibility in all our operations.</p>
        <h4 className="text-lg font-semibold ">Our Core Values and Principles:</h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h5 className="font-bold mb-2 text-[--bg-color]">Business Ethics and Integrity:</h5>
            <p className="text-sm font-normal">
              We operate with honesty and transparency in all our dealings, ensuring trust and reliability with clients, partners, and stakeholders.
            </p>
          </div>
         
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h5 className="font-bold mb-2 text-[--bg-color]">Health and Safety as a Priority:</h5>
            <p className="text-sm font-normal">
              We are committed to ensuring the safety and well-being of our employees, contractors, and clients by strictly adhering to safety regulations and conducting regular audits.
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h5 className="font-bold mb-2 text-[--bg-color]">Client-Centered Approach:</h5>
            <p className="text-sm font-normal">
              We focus on delivering quality projects on time and within budget, maintaining open communication, and providing exceptional service.
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <h5 className="font-bold mb-2 text-[--bg-color]">Commitment to Innovation:</h5>
            <p className="text-sm font-normal">
              We embrace the latest construction technologies to improve efficiency, quality, and seamless project execution.
            </p>
          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default BodyValues