import { GoDotFill } from "react-icons/go";
import IMG from "../../assets/image7.jpg";
import IMG2 from "../../assets/drawing.jpg";
import IMG3 from "../../assets/consultant.jpg";


const AboutUs = () => {
  return (
    <div className="py-16">
      <div className="max-w-[60rem] bg-[--bg-color] mx-auto text-center lg:text-left px-4 sm:px-8">
        <p className="text-white font-medium text-center text-lg sm:text-4xl lg:text-sm p-6">
          We are a client-focused, service-oriented General Engineering and Construction Company established in Lagos.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center bg-[--layer-alt-color] px-6 sm:px-12 lg:px-20 py-10">

        {/* The about company */}

        <div className="w-full lg:w-1/2 px-4 lg:px-8">
          <div className="border-b-[3px] border-[--bg-color] py-2 mb-5">
            <p className="font-medium text-[--layers-colo]">The Company</p>
            <p className="text-2xl text-[--text-extra] font-medium">Adeh Construction Company</p>
          </div>
          <div>
            <p className="mb-4 text-sm text-[--text-extra]">
              We are a client-focused, service-oriented General Engineering and Construction Company established in Lagos, Nigeria in 2012.
            </p>
            <p className="font-semibold mb-2 text-[--text-extra]">Our Core Areas of Competence</p>
            <ol className="space-y-2">
              {[
                "Project Management",
                "Civil Construction & General Contracting",
                "Engineering Services",
                "Equipment Sales and Leasing",
                "Land Acquisition & Consultancy",
                "Joint Venture Projects",
                "Testing, Quality Control & Improvements",
              ].map((item, index) => (
                <li key={index} className="flex items-center text-sm text-[var(--text-extra)]">
                <GoDotFill color="var(--bg-color)" size={15} className="self-center mr-2" />
                {item}
              </li>
              ))}
            </ol>
          </div>
        </div>



        {/* the cards  */}
        <div className="w-full lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-10 lg:mt-0">
  {/* Card 1 */}
  <div className="text-start relative overflow-hidden group hover:shadow-lg p-2 transition-all duration-300 bg-[--layer-alt-color] shadow-lg">
    <div className="absolute inset-0 bg-[--bg-color] opacity-0 group-hover:opacity-20 transition-opacity duration-300"> </div>
    <img
      src={IMG}
      alt=""
      className="w-full h-[14rem] object-cover hover:scale-105 transition-transform duration-300 z-10 relative"
    />
    <div className="my-3 relative z-10 grid items-center">
      <p className="font-bold text-[--text-extra] text-center">Building Construction</p>
      <p className="text-sm text-[--text-extra] text-center">
      We build spaces where dreams thrive, blending innovation and expertise to create lasting structures that inspire generations.
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="text-start relative overflow-hidden group hover:shadow-lg p-2 transition-all duration-300 bg-[--layer-alt-color] shadow-lg">
    <div className="absolute inset-0 bg-[--hover-color] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    <img
      src={IMG2}
      alt=""
      className="w-full h-[14rem] object-cover hover:scale-105 transition-transform duration-300 z-10 relative"
    />
    <div className="my-3 relative z-10">
      <p className="font-bold text-[--text-extra] text-center">Building Drawing</p>
      <p className="text-sm text-[--text-extra] text-center">
      Combining seasoned expertise with innovative design solutions, we deliver precise, customized architectural plans that transform client visions into achievable blueprints.
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="text-start relative overflow-hidden group hover:shadow-lg p-2 transition-all duration-300 bg-[--layer-alt-color] shadow-lg">
    <div className="absolute inset-0 bg-[--hover-color] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    <img
      src={IMG3}
      alt=""
      className="w-full h-[14rem] object-cover hover:scale-105 transition-transform duration-300 z-10 relative"
    />
    <div className="my-3 relative z-10">
      <p className="font-bold text-[--text-extra] text-center">Project Management</p>
      <p className="text-sm text-[--text-extra] text-center">
      Efficiency and excellence from start to finish, keeping projects on track and teams aligned with precision and passion. 
      </p>
    </div>
  </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
