import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import "./Navigation.css";

function Navigation() {

    const navigate = useNavigate();

    const [ open, setOpen ] = useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0 '>
            <div className='md:flex items-center justify-between bg-[#5548E1] py-2 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
                text-white'>
                    <span className='text-3xl mr-1 pt-2'>
                        <img src="./heal.png" alt="heartLogo" name="logo-ionic" className="w-8"/>
                    </span>
                    Heal
                </div>
            
                <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white'>
                <FaBars name={open ? 'close':'menu'}></FaBars>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static text-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                    <li className='md:ml-8 text-xl md:my-0 my-7 cursor-pointer' onClick={() => { navigate('/') }} >Home</li>
                    <li className='md:ml-8 text-xl md:my-0 my-7 cursor-pointer' onClick={() => { navigate('/Post') }}>Post</li>
                    <li className='md:ml-8 text-xl md:my-0 my-7 cursor-pointer' onClick={() => { navigate('/About') } }>About</li>
                </ul>

                <div>
                    <button>dark</button>
                </div>
            </div>
        </div>

    );
}

export default Navigation
