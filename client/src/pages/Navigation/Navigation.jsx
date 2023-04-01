import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Navigation() {

    const navigate = useNavigate();

    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <div>
            <div className="shadow-md fixed w-full top-0 left-0">  {/* i remove the fixed attribute*/}
                <div className="md:flex items-center justify-between bg-[#5548E1] py-4 md:px-10 px-7">
                    <div className="font-bold text-2x1 cursor-pointer flex items-center font-[Poppins]">
                        <span className="text-3x1 text-white " onClick={() => navigate('/')}>Freedom Wall</span>
                    </div>
                    <div onClick={() => {setIsOpen(!isOpen)}} className="text-3x1 absolute right-8 top-6 cursor-pointer md:hidden"> {/* i remove the absolute attribute */}
                        <FaBars name={ isOpen ? 'close':'menu' }/>
                    </div>
                    <ul className='md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#5548E1] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in'>
                        <li className="md:ml-8 text-xl md:my-0 my-7">
                            <p className='text-white hover:text-gray-400 duration-500 cursor-pointer' onClick={() => navigate('/')}>Home</p>
                        </li>
                        <li className="md:ml-8 text-xl md:my-0 my-7">
                            <p className='text-white hover:text-gray-400 duration-500 cursor-pointer' onClick={() => navigate('/Post')}>Post</p>
                        </li>
                        <li className="md:ml-8 text-xl md:my-0 my-7">
                            <p className='text-white hover:text-gray-400 duration-500 cursor-pointer' onClick={() => navigate('/About')}>About</p>
                        </li>
                    </ul>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Navigation
