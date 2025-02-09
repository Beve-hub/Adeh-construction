import React from 'react'


const ContentBuilding = () => {
  return (
    <div>
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
  )
}

export default ContentBuilding