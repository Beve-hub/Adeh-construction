import { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import menu from '../../assets/menu.svg';
import cancel from '../../assets/cancel.svg';
import Logo from '../../assets/logo23.png';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";

const Navbar = () => {
    const [nav, setNav] = useState<boolean>(true);
    const [dropdown, setDropdown] = useState<string | null>(null);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('/about')) setDropdown('about');
        else if (location.pathname.includes('/project')) setDropdown('project');
        else setDropdown(null);
    }, [location.pathname]);

    const handleNav = (): void => {
        setNav(!nav);
    };

    return (
        <div className="flex items-center justify-between fixed top-0 z-30 w-full bg-[--text-extra] shadow-md">
            <div className='container mx-auto px-4 md:px-8 lg:px-16 py-2'>          
                {/*Desktop Navigation */}    
                <div className='flex justify-between items-end mb-4'>    
                    {/* logo and hamburger */}            
                    <div className='flex items-center'>
                        <div onClick={handleNav} className='block md:hidden right-10 absolute'>
                            {!nav ? (
                                <img src={cancel} alt='Close Menu' className='bg-[#fff] p-1' />
                            ) : (
                                <img src={menu} alt='Open Menu' className='bg-[#fff] p-1' />
                            )}
                        </div>

                        <div className='pl-4 md:pl-8'>
                            <NavLink to='/'>
                                <img src={Logo} alt='Logo' className='w-[120px] hover:scale-105' />
                            </NavLink>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className='hidden md:flex items-center'>
                        <ul className="flex items-center space-x-8">
                            <li>
                                <NavLink to='/'
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? "text-[--button-color] font-bold" : "text-[--text-color]"}`
                                    } >
                                    Home
                                </NavLink>
                            </li>

                            {/* About Dropdown */}
                            <li className='relative' onMouseEnter={() => setDropdown('about')} onMouseLeave={() => setDropdown(null)}>
                                <NavLink to='/about/background' className="flex items-center">
                                    <span>About Us</span> <MdOutlineKeyboardArrowDown />
                                </NavLink>
                                {dropdown === 'about' && (
                                    <div className='absolute top-8 left-0 bg-gray-100 shadow-lg p-2 w-[150px]'>
                                        <ul className='space-y-2'>
                                            <li><NavLink to='/about/background'>Background</NavLink></li>
                                            <li><NavLink to='/about/values'>Our Values</NavLink></li>
                                            <li><NavLink to='/about/mission'>Our Mission</NavLink></li>
                                            <li><NavLink to='/about/team'>Our Team</NavLink></li>
                                        </ul>
                                    </div>
                                )}
                            </li>

                            <li>
                                <NavLink to='/service'
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? "text-[--button-color] font-bold" : "text-[--text-color]"}`
                                    }
                                >
                                    Service
                                </NavLink>
                            </li>

                            {/* Project Dropdown */}
                            <li className='relative' onMouseEnter={() => setDropdown('project')} onMouseLeave={() => setDropdown(null)}>
                                <NavLink to='/project/building' className={({ isActive }) =>
                                        `nav-link ${isActive ? "text-[--button-color] font-bold" : "text-[--text-color]"}`
                                    }>
                                    Project 
                                </NavLink>
                                
                            </li>

                            <li>
                                <NavLink to='/contact'
                                    className={({ isActive }) =>
                                        `nav-link ${isActive ? "text-[--button-color] font-bold" : "text-[--text-color]"}`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Search Navigation */}
                    <div className='grid items-center justify-end md:grid hidden'>
                        <p className='flex justify-end'>
                        RC: 7420259
                        </p>
                        
                        <div className=" ml-2 border rounded-3xl flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                        <RiSearch2Line />

                        <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="serach"
                     className="block min-w-0 grow py-1.5 pl-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                        </div>
            </div>
                </div>

                {/* Mobile Navigation */}
                <div className={!nav ? 'fixed left-0 top-0 w-[50%] h-full border-r-gray-900 bg-[#989898] z-10 ease-in-out duration-500' : 'fixed right-[-200%]'}>
                    <ul className='grid justify-start ml-20 gap-6 font-medium mt-20'>
                        <li>
                            <NavLink to='/' className="text-white transition duration-500 hover:scale-110">
                                Home
                            </NavLink>
                        </li>

                        {/* Mobile About Dropdown */}
                        <li className='relative' onClick={() => setDropdown(dropdown === 'about' ? null : 'about')}>
                            <NavLink to='/about' className="text-white transition duration-500 hover:scale-110">
                                About Us
                            </NavLink>
                            {dropdown === 'about' && (
                                <div className='absolute top-full left-0 bg-gray-100 shadow-lg p-2'>
                                    <ul className='space-y-2'>
                                        <li className='hover:text-blue-500'><NavLink to='/about/team'>Our Team</NavLink></li>
                                        <li className='hover:text-blue-500'><NavLink to='/about/company'>Our Company</NavLink></li>
                                    </ul>
                                </div>
                            )}
                        </li>

                        <li>
                            <NavLink to='/service' className="text-white transition duration-500 hover:scale-110">
                                Service
                            </NavLink>
                        </li>

                        {/* Mobile Project Dropdown */}
                        <li className='relative' >
                            <NavLink to='/project' className="text-white transition duration-500 hover:scale-110">
                                Project
                            </NavLink>
                           
                        </li>

                        <li>
                            <NavLink to='/contact' className="text-white transition duration-500 hover:scale-110">
                                Contact
                            </NavLink>
                        </li>
                    </ul>

                    {/* Search Navigation */}
                    <div className='grid items-center justify-end '>
                        <p className='flex justify-end sm:flex hidden'>
                        RC: 7420259
                        </p>
                        
                       
            </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
