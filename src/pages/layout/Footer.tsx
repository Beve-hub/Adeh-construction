
import mail from '../../assets/logo21.png'


const Footer = () => {
    return (
        <section id="footer" className="relative bottom-0 min-h-[13rem] max-w-full bg-[--text-extra] grid justify-center items-center ">
     

        <div className=' mx-auto w-screen flex justify-center items-center gap-6 mt-10'>
        <img src={mail} alt=''  className='w-[22px] flex'/>
        <p className='text-center text-xl font-medium'>Adeh construction company</p>
        </div>
  
  <div className="flex justify-center border-t-[1.5px]  py-[1rem] mt-[2rem] border-[--button-color] border-t-[#EBEBEB] px-10  md:flex-row grid-col-1 items-center " >
  <p  className='text-sm text-[--layers-colo]  '>©Adeh Construction Company </p> 
  </div>
        
      
  
        
  
  </section>
    )
}

export default Footer