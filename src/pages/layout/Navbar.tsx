import { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import menu from '../../assets/menu.svg';
import cancel from '../../assets/cancel.svg';
import Logo from '../../assets/logo23.png';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";


const navLinks = [
    { name: "Home", path: "/" },
    {
        name: "Our Company",
        path: "#",
        dropdown: [
            { name: "Background", path: "/about/background" },
            { name: "Our Values", path: "/about/values" },
            { name: "Our Mission", path: "/about/mission" },
            { name: "Our Team", path: "/about/team" },
        ]
    },
    { name: "Service", path: "/service" },
    { name: "Project", path: "/project/building" },
    { name: "Contact", path: "/location" },
    { name: "Admin", path: "/admin" }
];

const Navbar = () => {
    const [nav, setNav] = useState<boolean>(true);
    const [dropdown, setDropdown] = useState<string | null>(null);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('/about')) setDropdown('about');
        else setDropdown(null);
    }, [location.pathname]);

    const handleNav = (): void => {
        setNav(!nav);
    };

    return (
        <div className=" flex items-center justify-between fixed top-0 left-0 right-0 z-50 w-screen bg-[--text-extra] shadow-md">
            <div className='container mx-auto px-4 md:px-8 lg:px-16 py-2'>
                <div className='flex justify-between items-end mb-4'>    
                    {/* Logo and Hamburger */}            
                    <div className='flex items-center'>
                        <div onClick={handleNav} className='block md:hidden right-10 absolute'>
                            <img src={nav ? menu : cancel} alt='Menu' className='bg-[#fff] p-1' />
                        </div>
                        <div className='pl-4 md:pl-8'>
                            <NavLink to='/'>
                                <img src={Logo} alt='Logo' className='w-[70px] hover:scale-105' />
                            </NavLink>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center">
                        <ul className="flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <li key={link.name} className="relative"
                                    onMouseEnter={() => link.dropdown && setDropdown(link.name)}
                                    onMouseLeave={() => link.dropdown && setDropdown(null)}>
                                    {link.dropdown ? (
                                        <>
                                            <span className="flex items-center cursor-pointer">
                                                {link.name} <MdOutlineKeyboardArrowDown />
                                            </span>
                                            {dropdown === link.name && (
                                                <div className='absolute top-8 left-0 bg-gray-100 shadow-lg p-2 w-[150px]'>
                                                    <ul className='space-y-2'>
                                                        {link.dropdown.map((item) => (
                                                            <li key={item.name}>
                                                                <NavLink to={item.path}>{item.name}</NavLink>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <NavLink to={link.path} className={({ isActive }) => `nav-link ${isActive ? "text-[--button-color] font-bold" : "text-[--text-color]"}`}>
                                            {link.name}
                                        </NavLink>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Search Box */}
                    <div className='grid items-center justify-end md:grid hidden'>
                        <p className='flex justify-end'>RC: 7420259</p>
                        <div className="ml-2 border rounded-3xl flex items-center bg-white pl-3 outline-1 outline-gray-300 focus-within:outline-indigo-600">
                            <RiSearch2Line />
                            <input type="text" placeholder="Search" className="block min-w-0 grow py-1.5 pl-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none" />
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={!nav ? 'fixed left-0 top-0 w-[50%] h-full border-r-gray-900 bg-[#989898] z-10 ease-in-out duration-500' : 'fixed right-[-200%]'}>
                    <ul className='grid justify-start ml-20 gap-6 font-medium mt-20'>
                        {navLinks.map((link) => (
                            <li key={link.name} className='relative' onClick={() => link.dropdown && setDropdown(dropdown === link.name ? null : link.name)}>
                                <NavLink to={link.path} className="text-white transition duration-500 hover:scale-110">
                                    {link.name}
                                </NavLink>
                                {dropdown === link.name && link.dropdown && (
                                    <div className='absolute top-full left-0 bg-gray-100 shadow-lg p-2'>
                                        <ul className='space-y-2'>
                                            {link.dropdown.map((item) => (
                                                <li key={item.name} className='hover:text-blue-500'>
                                                    <NavLink to={item.path}>{item.name}</NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
