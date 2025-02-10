import mail from '../../assets/logo21.png'
import { MdOutlineEmail, MdWhatsapp } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
    return (
        <section id="footer" className="relative bottom-0 min-h-[13rem] max-w-full bg-[--text-extra] grid justify-center items-center ">
     

        <div className=' mx-auto w-screen flex justify-center items-center gap-6 mt-10'>
        <img src={mail} alt=''  className='w-[250px] flex'/>
        <div>            
        <p className='text-start text-sm'>RC: 7420259</p>
        <p className='text-center text-2xl font-bold text-[--logo-text] my-4'>ADEH CONSTRUCTION COMPANY</p>

        <div className='grid md:grid-cols-3 gap-1 mt-2'>
        <p className="text-gray-600 text-sm border-r border-[--text-color] "> Building Drawing</p>
        <p className="text-gray-600 text-sm border-r border-[--text-color] pl-2"> Construction</p>
        <p className="text-gray-600 pl-2 text-sm"> Estate Consultant</p>
        <p className="text-gray-600 border-r text-sm border-[--text-color] pr-4"> Estate Management</p>
        <p className="text-gray-600 pl-2 text-sm"> Project Management</p>
        </div>

        <div className="flex items-center gap-2 mt-4">
                <MdWhatsapp size={16} className="text-[--bg-color]" />
                  
                 <div className="flex gap-2">
                  <p className="text-gray-700 border-r border-[--text-color] pr-4 text-sm">+234 8074 668 779</p>
                  <p className="text-gray-700 border-r border-[--text-color] pr-4 text-sm">+234 8068 210 791</p>
                  <p className="text-gray-700  text-sm">+234 9074 781 256</p>
                  </div>
                 
        </div>
         <div className="flex items-center gap-2 mt-2">
                  <MdOutlineEmail size={16} className="text-[--bg-color]" />
                  <p className="text-gray-700 text-sm">adehconstructioncompany@gmail.com</p>
         </div>
         <div className="flex items-center gap-2 mt-2">
                  <TbWorld size={16} className="text-[--bg-color]" />
                  <p className="text-gray-700 text-sm">www.adehconstructioncompany.com</p>
         </div>
        </div>        
        </div>
  
  <div className="flex justify-center border-t-[1.5px]  py-[1rem] mt-[2rem] border-[--button-color] border-t-[#EBEBEB] px-10  md:flex-row grid-col-1 items-center " >
  <p  className='text-sm text-[--layers-colo]  '>©Adeh Construction Company </p> 
  </div>
        
      
  
        
  
  </section>
    )
}

export default Footer