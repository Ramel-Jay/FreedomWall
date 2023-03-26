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

            <div>
                <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </a>
            </div>
        </div>
    )
}

export default Home
