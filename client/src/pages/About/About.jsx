import React from 'react';
import Navigation from "../Navigation/Navigation";
import image from "./images/meditating.png";
import Footer from "../Footer/Footer";

function About() {
    return (
        <div>
            <Navigation/>
            <div className="pt-[60px]">
                <div className="bg-[#0E071D] text-white columns-2 pt-60 pb-[439px] h-full">
                    <div className="flex justify-center items-center">
                        <img src={ image } alt="meditating"/>
                    </div>
                    <div className="pr-7">
                        <h1 className="font-bold text-4xl">About</h1><br/>
                        <p>This is an online freedom wall that you can express/expose what you feel anonymously.
                            Freedom wall is made to the people who is afraid to release their feelings. In Freedom Wall no more hiding feelings you can release what is inside into that
                            either you are happy sad thankful blessed in love etc. so what are your waiting for? Release your feelings now!<br/><br/>

                            Freedom wall is 100% safe

                            </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About
