import React from 'react'
import Navigation from '../Navigation/Navigation';
import Typed from "react-typed"

function Home() {
    return (
        <div className='pt-[100px] relative bg-[#0E071D] text-white '>
            <Navigation/>
            <div className="text-center font-bold text-5xl uppercase font-poppins">
            <Typed
                strings={[
                        "Express what you feel",
                        "I Still Love you",
                        "I can't live without you",
                        "I hope you are ok",
                        "I'am Really Sorry"
                    ]}
                    typeSpeed={150}
                    backSpeed={100}
                loop
            />
            </div>

            <div className="pt-[35px] text-center font-semibold text-2xl">
                <h1>This is an online freedom wall <br/> that you can express anonymously what you fell</h1>
            </div>

            <div className="pt-[60px] text-center ">
            <button class="bg-[#0F1CF3] hover:bg-blue-700 text-white font-regular py-4 px-5 rounded">
                Post a Message
            </button>
            </div>

            <div className="pt-[60px] pb-[30px] mx-[200px]">
                <hr/>
            </div>

            <div className="flex gap-6 justify-center items-center">
                <a href="#" className="block max-w-sm p-6 rounded-lg shadow bg-[#EEE861] hover:bg-[#e6de4c]">
                    <h5 className="mb-2 text-1xl font-semibold text-black">To: Username</h5>
                    <p className="font-normal text-black">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <h5 className="font-semibold text-right text-black">From: Username</h5>
                </a>

                <a href="#" className="block max-w-sm p-6 rounded-lg shadow bg-[#EEE861] hover:bg-[#e6de4c]">
                    <h5 className="mb-2 text-1xl font-semibold text-black">To: Username</h5>
                    <p className="font-normal text-black">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <h5 className="font-semibold text-right text-black">From: Username</h5>
                </a>

                <a href="#" className="block max-w-sm p-6 rounded-lg shadow bg-[#EEE861] hover:bg-[#e6de4c]">
                    <h5 className="mb-2 text-1xl font-semibold text-black">To: Username</h5>
                    <p className="font-normal text-black">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <h5 className="font-semibold text-right text-black">From: Username</h5>
                </a>
            </div>
        </div>
    )
}

export default Home
