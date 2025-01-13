import { NavLink } from "react-router-dom";
import IMG from "../../../assets/image4.jpg"

const BodyTeam = () => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row justify-between  bg-[--text-extra] px-6 sm:px-12 lg:px-20 py-10">
      {/* Navigation Section */}
      <div className="w-full bg-[--layer-colo] lg:w-1/2 h-[25rem] px-4 lg:px-8 sm:grid hidden">
        <div className="py-16">
          <ol className="space-y-2">
            <li className="flex border-b-[1.5px] py-4 items-center text-sm text-[--text-extra] ">
              <NavLink to="/about/background" className="hover:scale-110 ">Background</NavLink>
            </li>
            <li className="flex border-b-[1.5px] py-4 items-center text-sm text-[--text-extra]">
              <NavLink to="/about/values" className="hover:scale-110 ">Our Values</NavLink>
            </li>
            <li className="flex border-b-[1.5px] py-4 items-center text-sm text-[--text-extra]">
              <NavLink to="/about/mission" className="hover:scale-110 ">Our Mission</NavLink>
            </li>
            <li className="flex border-b-[1.5px] py-4 items-center text-sm text-[--text-extra]">
              <NavLink to="/about/team" className="hover:scale-110 font-bold text-[--bg-color]">Our Team</NavLink>
            </li>
          </ol>
        </div>
      </div>

      {/* Write-up Section */}
      <div className="w-full bg-[--text-extra] lg:grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6  lg:mx-5">
      <h2 className="text-2xl font-bold border-b-[4px] border-[--bg-color] pb-3">Management Team</h2>
       <div className="flex gap-5">
        <img src={IMG} alt="" className="w-[15rem] h-[15rem] sm:flex hidden"/>
        <p className="text-justify text-base leading-relaxed mb-1">
          Poto is a visionary leader with extensive experience and a passion for excellence. Under [his/her/their] guidance, the company has achieved significant growth and consistently delivered exceptional results. [Name] fosters a culture of collaboration, empowering our skilled team of Civil Engineers, Quantity Surveyors, Site Engineers, Supervisors, and technicians to work seamlessly and achieve project success with precision and professionalism.
         </p>
       </div>
        <p className="text-justify text-base leading-relaxed mb-1">
        Our Technical team is ably supported by Civil Engineers, a Quantity Surveyor and several Site Engineers, Supervisors & technicians.
         </p>
        
         <p className="text-justify text-base leading-relaxed ">
          Together, we realise your dreams in Building the future!
         </p>
        <ul className="space-y-2 pl-4 list-disc text-base">
          <li className="font-light">            
          Strong team of experienced professionals</li>
          <li className="font-light">            
          A wealth of cumulative experience
          </li>
          <li className="font-light">            
          Propelled by a visionary management
          </li>
          <li className="font-light">            
          Dedicated to the growth of the nation</li>
        </ul>
        
      </div>
    </div>
  )
}

export default BodyTeam