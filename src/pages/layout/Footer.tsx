import mail from '../../assets/logo21.png'
import { MdOutlineEmail, MdWhatsapp } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

const Footer = () => {
    return (
        <section id="footer" className="relative bottom-0 min-h-[13rem] w-full bg-[--text-extra] flex flex-col items-center p-4 sm:p-6">
            <div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-6 mt-6">
                {/* Logo Section */}
                <img src={mail} alt="Company Logo" className="w-[200px] sm:w-[250px] flex" />

                {/* Info Section */}
                <div className="text-center md:text-left">
                    <p className="text-sm">RC: 7420259</p>
                    <p className="text-2xl font-bold text-[--logo-text] my-3">ADEH CONSTRUCTION COMPANY</p>

                    {/* Services */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 mt-2 text-gray-600 text-sm">
                        <p className="border-r pr-2 border-[--text-color]">Building Drawing</p>
                        <p className="border-r pr-2 border-[--text-color]">Construction</p>
                        <p className="">Estate Consultant</p>
                        <p className="border-r pr-2 border-[--text-color]">Estate Management</p>
                        <p className="">Project Management</p>
                    </div>

                    {/* Contact Details */}
                    <div className="flex flex-col gap-2 mt-4">
                        <div className="flex flex-wrap items-center gap-2">
                            <MdWhatsapp size={16} className="text-[--bg-color]" />
                            <div className="flex flex-wrap gap-2">
                                <p className="border-r pr-2 text-gray-700 text-sm border-[--text-color]">+234 8074 668 779</p>
                                <p className="border-r pr-2 text-gray-700 text-sm border-[--text-color]">+234 8068 210 791</p>
                                <p className="text-gray-700 text-sm">+234 9074 781 256</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <MdOutlineEmail size={16} className="text-[--bg-color]" />
                            <p className="text-gray-700 text-sm">adehconstructioncompany@gmail.com</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <TbWorld size={16} className="text-[--bg-color]" />
                            <p className="text-gray-700 text-sm">www.adehconstructioncompany.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Copyright */}
            <div className="w-full border-t-[1.5px] py-4 mt-6 border-[--button-color] border-t-[#EBEBEB] flex justify-center">
                <p className="text-sm text-[--layers-colo]">© Adeh Construction Company</p>
            </div>
        </section>
    );
};

export default Footer;
