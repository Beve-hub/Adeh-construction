import { NavLink } from "react-router-dom";
import { GrUserWorker } from "react-icons/gr";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { RiTeamLine } from "react-icons/ri";
const BodyMission = () => {
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
              <NavLink to="/about/mission" className="hover:scale-110 font-bold text-[--bg-color]">Our Mission</NavLink>
            </li>
            <li className="flex border-b-[1.5px] py-4 items-center text-sm text-[--text-extra]">
              <NavLink to="/about/team" className="hover:scale-110 ">Our Team</NavLink>
            </li>
          </ol>
        </div>
      </div>

      {/* Write-up Section */}
      <div className="w-full bg-[--text-extra] lg:grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6  lg:mx-5">
      <h2 className="text-2xl font-bold border-b-[4px] border-[--bg-color] pb-3">Building a Legacy of Excellence</h2>
        <p className="text-justify text-base leading-relaxed mb-1">
        Our mission is to build a legacy of excellence by transforming humble beginnings into a foundation for innovation and quality. We are committed to providing state-of-the-art construction solutions, driven by passion, advanced technologies, and unparalleled expertise. Our goal is to exceed client expectations, foster lasting partnerships, and uphold a culture of integrity, safety, and ethical conduct that defines our journey and success.
          </p>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded-lg shadow-md">
          <div className="my-[20px]">
            <TbBuildingSkyscraper size={40} color="var(--bg-color)" />
            </div>
            <h5 className="font-bold mb-2 text-[--bg-color]">Quality</h5>
            <p className="text-sm font-normal">
            We look beyond sustainable construction with a holistic approach to corporate social responsibility by engaging in activities that directly benefit the community(ies) where we operate
            </p>
          </div>
         
          <div className="p-4 bg-white rounded-lg shadow-md">
          <div className="my-[20px]">
            <RiTeamLine size={40} color="var(--bg-color)" />
            </div>
            <h5 className="font-bold mb-2 text-[--bg-color]">Sustainability</h5>
            <p className="text-sm font-normal">
            Cultivate long-lasting relationships with clients by consistently delivering beyond expectations through exceptional service, transparency, and a commitment to excellence.
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <div className="my-[20px]">
            <GrUserWorker size={40} color="var(--bg-color)"/>
            </div>
         
            <h5 className="font-bold mb-2 text-[--bg-color]">
            Safety</h5>
            <p className="text-sm font-normal">
            Foster a workplace culture that prioritizes health,
             safety, and ethical conduct, empowering our 
             team to perform with integrity and dedication 
             on every project.
            </p>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default BodyMission