import { NavLink } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row justify-between  bg-[--text-extra] px-6 sm:px-12 lg:px-20 py-10">
      {/* Navigation Section */}
      <div className="w-full bg-[--layer-colo] lg:w-1/2 h-[25rem] px-4 lg:px-8 sm:grid hidden">
        <div className="py-16">
          <ol className="space-y-2">
            <li className="flex border-b-[1.5px] py-4 items-center text-sm text-[--text-extra] ">
              <NavLink to="/about/background" className="hover:scale-110 font-bold text-[--bg-color]">Background</NavLink>
            </li>
            <li className="flex border-b-[1.5px] py-4 items-center text-sm text-[--text-extra]">
              <NavLink to="/about/values" className="hover:scale-110 ">Our Values</NavLink>
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
      <h2 className="text-2xl font-bold border-b-[4px] border-[--bg-color] pb-3">About Us</h2>
        <p className="text-justify text-base leading-relaxed mb-1">
          Our journey began with modest beginnings in block molding, supported by a dedicated team of 15 individuals, two trucks, and a simple Portakabin office. It was a humble start, but one driven by a deep passion for construction and an unwavering commitment to quality.
            <br/>
            Adeh Construction Company, a client-focused and service-oriented General Engineering and Construction firm, was established in Lagos, Nigeria, in 2012. The company is proudly promoted by SAMTL Ltd. and the Budhrani Group, both of which have a long-standing and dedicated presence in Nigeria.
        </p>
        <p className="text-justify text-base leading-relaxed mb-2">
          Today, Adeh Construction Company has evolved into a leading force in building and civil engineering construction. Our remarkable growth is a testament to our steadfast commitment to excellence and the expertise of our ever-expanding team of skilled engineers and supervisors.
        </p>
        <h4 className="text-lg font-semibold ">What Sets Us Apart:</h4>
        <ul className="space-y-3 pl-4 list-disc text-base">
          <li className="font-bold">
            Diverse Expertise: 
            <span className="font-normal"> Our wide-ranging experiences have deepened our understanding of construction challenges and opportunities in Nigeria.</span>
          </li>
          <li className="font-bold">
            Passionate Project Execution: 
            <span className="font-normal"> We approach each project with enthusiasm, considering ourselves direct stakeholders in overcoming challenges and delivering outstanding results.</span>
          </li>
          <li className="font-bold">
            Continuous Reinvestment: 
            <span className="font-normal"> Through ongoing reinvestment, we empower our workforce, support our community, and equip our operations with state-of-the-art machinery for enhanced productivity.</span>
          </li>
          <li className="font-bold">
            Uncompromising Quality: 
            <span className="font-normal"> We are dedicated to providing superior building and civil engineering services that meet and exceed expectations.</span>
          </li>
          <li className="font-bold">
            Extensive Project Portfolio: 
            <span className="font-normal"> Our projects span a variety of sectors, including oil and gas, public, private, and government initiatives.</span>
          </li>
          <li className="font-bold">
            Versatile Capabilities: 
            <span className="font-normal"> From hotels, hospitals, and educational institutions to residential apartments, office complexes, and warehouses, we bring expertise and excellence to every project.</span>
          </li>
        </ul>
        <p className="text-justify text-base leading-relaxed mt-6">
          At Adeh Construction Company, we continue to build not just structures, but also lasting relationships, trust, and a legacy of excellence in the Nigerian construction industry.
        </p>
      </div>
    </div>
  );
};

export default Body;
