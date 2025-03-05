import mail from '../../assets/logo21.png'
import { MdOutlineEmail, MdWhatsapp } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
    return (
        <div id="footer" className="relative bottom-0 w-full bg-[--text-extra] flex flex-col items-center px-4 py-6 sm:px-8 lg:px-16">
      {  /*    <div className="w-full max-w-5xl border-b-[1.5px] py-6 mb-6 border-[--button-color] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-16">
               
                <div className="flex flex-col items-center md:items-center md:flex-1 text-center md:text-center">
              <img src={mail} alt="Company Logo" className="w-[90px] sm:w-[200px] md:w-[120px] mb-4"  />

          
<div className="text-center md:text-left">
    <p className="text-xs">RC: 7420259</p>
    <p className="text-md font-bold text-[--logo-text] my-3">ADEH CONSTRUCTION COMPANY</p>

  
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 mt-2 text-gray-600 text-sm">
        <p className="border-r pr-2 border-[--text-color] text-xs">Building Drawing</p>
        <p className="border-r pr-2 border-[--text-color] text-xs">Construction</p>
        <p className=" text-xs">Estate Consultant</p>
        <p className="border-r pr-2 border-[--text-color] text-xs">Estate Management</p>
        <p className="text-xs">Project Management</p>
    </div>
</div>

        
              </div>

<div className="flex flex-col items-center md:flex-1 mt-4 md:mt-0">
  <h2 className="font-semibold text-xl mb-4">Quick Links</h2>
  <p className="text-gray-700 border-[--text-color] text-md text-center mb-2"><a href='/about/background'>About</a></p>
  <p className="text-gray-700 border-[--text-color] text-center text-md mb-2"><a href='/service'>Service</a></p>
  <p className="text-gray-700 border-[--text-color] text-center text-md mb-2"><a href='/project/building'>Project</a></p>
  <p className="text-gray-700 border-[--text-color] text-center text-md"><a href='/contact'>Contact</a></p>
</div>
              
               <div className="flex flex-col items-center md:items-start md:flex-1 mt-4 md:mt-0">
                <h2 className="font-semibold text-xl mb-4 text-center">Office </h2>
                        <div className="flex items-center gap-2 mb-4">
                            <MdWhatsapp size={18} className="text-[--bg-color]" />
                            <div className="flex flex-wrap gap-2">
                                <p className="border-r pr-2 text-gray-700 text-sm border-[--text-color] ">+234 8074 668 779</p>
                                <p className=" text-sm ">+234 8068 210 791</p>
                               
                            </div>
                        </div>

                        <div className="flex items-center gap-2 mb-4">
                            <MdOutlineEmail size={18} className="text-[--bg-color]" />
                            <p className="text-gray-700 text-sm">adehconstructioncompany@gmail.com</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <TbWorld size={16} className="text-[--bg-color]" />
                            <p className="text-gray-700 text-sm">www.adehconstructioncompany.com</p>
                        </div>
                    </div>

          </div> 
          */}
        
            
            <div className="w-full  flex justify-center">
                <p className="text-sm text-[--layers-colo]">© Adeh Construction Company</p>
            </div>
        </div>
    );
};

export default Footer;
