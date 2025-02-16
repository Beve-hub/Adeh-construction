import { GoDotFill } from "react-icons/go";
import IMG from "../../assets/image6.jpg";
import IMG2 from "../../assets/image7.jpg";
import IMG3 from "../../assets/image8.jpg";


const AboutUs = () => {
  return (
    <div className="py-16">
      <div className="max-w-[60rem] bg-[--bg-color] mx-auto text-center lg:text-left px-4 sm:px-8">
        <p className="text-white font-medium text-center text-lg sm:text-4xl lg:text-sm p-6">
          We are a client-focused, service-oriented General Engineering and Construction Company established in Lagos.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center bg-[--layer-alt-color] px-6 sm:px-12 lg:px-20 py-10">
        <div className="w-full lg:w-1/2 px-4 lg:px-8">
          <div className="border-b-[4px] border-[--bg-color] py-2 mb-5">
            <p className="font-medium text-[--layers-colo]">The Company</p>
            <p className="text-3xl text-[--text-extra] font-medium">Adeh Construction Company</p>
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
                <li key={index} className="flex items-center text-sm text-[--text-extra]">
                  <GoDotFill  size={15} className="self-center mr-2" />
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="w-full lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 lg:mt-0">
        <div  className="text-start">
              <img
                src={IMG}
                alt=""
                className="w-full h-[18rem] object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="my-3">
                <p className="font-bold text-[--text-extra]">Redefining Infrastructure</p>
                <p className="text-sm text-[--text-extra]">
                  The company has a pedigree of developing more than 150 Ha of property across varied geographies and soil conditions.
                </p>
              </div>
        </div>
        <div  className="text-start">
              <img
                src={IMG2}
                alt=""
                className="w-full h-[18rem] object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="my-3">
                <p className="font-bold text-[--text-extra]">Redefining Infrastructure</p>
                <p className="text-sm text-[--text-extra]">
                  The company has a pedigree of developing more than 150 Ha of property across varied geographies and soil conditions.
                </p>
              </div>
        </div>
        <div  className="text-start">
              <img
                src={IMG3}
                alt=""
                className="w-full h-[18rem] object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="my-3">
                <p className="font-bold text-[--text-extra]">Redefining Infrastructure</p>
                <p className="text-sm text-[--text-extra]">
                  The company has a pedigree of developing more than 150 Ha of property across varied geographies and soil conditions.
                </p>
              </div>
        </div>     
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
