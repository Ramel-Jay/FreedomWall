import React from 'react';
import Navigation from '../Navigation/Navigation';
import Typed from "react-typed";
import {useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {

    const navigate = useNavigate();

    const [ listofPost, setListOfPost ] = useState();

    useEffect(() => {
        axios.get("http://localhost:3001/get").then((response) => {
            if(response.data.error){
                console.log(response.data.error);
            }else {
                setListOfPost(response.data);
            }
        });
    }, []);

    const post  = listofPost;

    return (
        <div className='pt-[100px] relative bg-[#0E071D] text-white'>
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
            <button type="button" onClick={() => navigate('/Post')} className="bg-[#0F1CF3] hover:bg-blue-700 text-white font-regular py-4 px-5 rounded">
                Post a Message
            </button>
            </div>

            <div className="pt-[60px] pb-[30px] mx-[200px]">
                <hr/>
            </div>

            <div className="columns-3 p-10">
                {
                    post?.map((value, key) => {
                        return(
                            <div key={key} className="flex justify-center pb-6 w-[500px] break-inside-avoid-column">
                                <div className="p-6 max-w-lg rounded-lg shadow bg-[#EEE861] hover:bg-[#e6de4c]">
                                    <h5 className="mb-2 text-1xl font-semibold text-black">To: {value.dear}</h5>
                                    <p className="font-normal text-black">{value.message}</p>
                                    <h5 className="font-semibold text-right text-black">From: {value.from}</h5>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home
