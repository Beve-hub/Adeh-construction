import { useState } from 'react';
import menu from '../../assets/menu.svg';
import cancel from '../../assets/cancel.svg';
import Logo from '../../assets/logo21.png';
import { NavLink } from 'react-router-dom';
import { FaSortDown } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState<boolean>(true);
    const [dropdown, setDropdown] = useState<string | null>(null); // Track active dropdown
    const flexBetween = 'flex items-center justify-between';


    const handleNav = (): void => {
        setNav(!nav);
    };

    const handleMouseEnter = (menuName: string) => {
        setDropdown(menuName);
    };

    const handleMouseLeave = () => {
        setDropdown(null);
    };

    return (
        <div className={`${flexBetween} fixed top-0 z-30 w-full bg-[--text-extra] shadow-md`}>
            <div className='container mx-auto px-4 md: px-8 lg:px-16 py-2'>
                <div className='flex justify-between'>
                    <div className='flex items-center'>
                        <div onClick={handleNav} className='block md:hidden  right-10 absolute'>
                            {!nav ? (
                                <img src={cancel} alt='' className='bg-[#fff] p-1' />
                            ) : (
                                <img src={menu} alt='' className='bg-[#fff] p-1' />
                            )}
                        </div>
                        <div className='pl-4 md:pl-8'>
                            <a href='/'>
                                <img
                                    src={Logo}
                                    alt=''
                                    className='w-[100px] hover:scale-105'
                                />
                            </a>
                        </div>
                    </div>

                    <div className='hidden  md:flex items-center '>
                        <ul className={`${flexBetween} space-x-8`}>
                            <li className='text-[--text-extra]  hover:scale-100 cursor-pointer'>
                                <NavLink to='/'>Home</NavLink>
                            </li>
                            <li
                                className='text-[--text-extra] hover:scale-100 cursor-pointer relative'
                                onMouseEnter={() => handleMouseEnter('about')}
                                onMouseLeave={handleMouseLeave}
                            >
                                <NavLink to='' className='flex'>About Us <FaSortDown /></NavLink>
                                {dropdown === 'about' && (
                                    <div className='absolute top-6 left-0 bg-gray-100 shadow-lg p-2 w-[150px]'>
                                        <ul className='space-y-2'>
                                        <li>
                                                <NavLink to='/about/background'>Background</NavLink>
                                            </li>
                                        <li>
                                                <NavLink to='/about/values'>Our Values</NavLink>
                                            </li>
                                        <li>
                                                <NavLink to='/about/mission'>Our Mission</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/about/team'>Our Team</NavLink>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li className='text-[--text-extra]  hover:scale-100 cursor-pointer'>
                                <NavLink to='/service'>Service</NavLink>
                            </li>
                            <li className='text-[--text-extra] hover:scale-100 cursor-pointer relative' >
                               <NavLink to='/project/building'>Project</NavLink>
                            </li>
                           
                            <li className='text-[--text-extra] hover:scale-100 cursor-pointer'>
                                <NavLink to='/contact'>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    className={
                        !nav
                            ? 'fixed right-0 top-16 w-[50%] h-full border-r-gray-900 bg-[#989898] z-10 ease-in-out duration-500'
                            : 'fixed right-[-200%]'
                    }
                >
                    <ul className='grid justify-start ml-20 gap-6 font-medium mt-20'>
                        <li className='text-[--text-extra] text-white transition duration-500 hover:scale-110 cursor-pointer'>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li 
                          onMouseEnter={() => handleMouseEnter('about')}
                          onMouseLeave={handleMouseLeave}
                        className='text-[--text-extra] text-white transition duration-500 hover:scale-110 cursor-pointer'>
                            <NavLink to='/about'>About Us</NavLink>
                            {dropdown === 'about' && (
                                    <div className='absolute top-full left-0 bg-gray-100 shadow-lg p-2'>
                                        <ul className='space-y-2'>
                                            <li className='hover:text-blue-500'>
                                                <NavLink to='/about/team'>Our Team</NavLink>
                                            </li>
                                            <li className='hover:text-blue-500'>
                                                <NavLink to='/about/company'>Our Company</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                        </li>
                        <li className='text-[--text-extra]  hover:scale-100 cursor-pointer'>
                                <NavLink to='/service'>Service</NavLink>
                            </li>
                        <li 
                        className='text-[--text-extra] text-white transition duration-500 hover:scale-110 cursor-pointer'
                        onMouseEnter={() => handleMouseEnter('project')}
                         onMouseLeave={handleMouseLeave}
                         >
                            <NavLink to='/project'>Project</NavLink>
                            {dropdown === 'project' && (
                                    <div className='absolute top-full left-0 bg-gray-100 shadow-lg p-2'>
                                        <ul className='space-y-2'>
                                            <li className='hover:text-blue-500'>
                                                <NavLink to='/solution/web'>Web Projects</NavLink>
                                            </li>
                                            <li className='hover:text-blue-500'>
                                                <NavLink to='/solution/mobile'>Mobile Projects</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                        </li>
                        <li className='text-[--text-extra] text-white transition duration-500 hover:scale-110 cursor-pointer'>
                            <NavLink to='/contact'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
