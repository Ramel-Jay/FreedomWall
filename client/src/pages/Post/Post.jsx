import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function Post() {

    const initialValues = {
        dear: "",
        message: "",
        from: "",
    }

    const validationSchema = Yup.object().shape({
        dear: Yup.string().required().max(20, "Name must be less than 20 characters"),
        message: Yup.string().required(),
        from: Yup.string().required()
    })

    const onSubmit = (data) => {
        try{
            axios.post("http://localhost:3001/post", data ).then((response) => {
                if(response.data){
                    alert("Your Post has been posted");
                }else{
                    alert("Field to post your message");
                }
            });
        }catch(e){
            alert(e);
        }
    }

    return (
        <div className="bg-[#0E071D] pt-[100px] relative text-white flex justify-center items-center pb-8">
            <Navigation/>
            <div className="container bg-[#121323] w-[400px]">
                <div className="bg-[#282730] py-5 pl-5 uppercase font-poppins font-semibold rounded-t-lg">
                    <div>
                        <h2>post what you feel</h2>
                    </div>
                </div>

                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    <Form className="px-8 py-6 ">
                        <div className="pb-4">
                            <label htmlFor="dear">Dear: </label>
                            <br/>
                            <Field 
                                id="dear" 
                                name="dear"
                                placeholder="Erica"
                                className="text-black outline-none border-none rounded font-poppins w-full pl-5 py-2"
                                maxLength={'20'}
                            />
                            <ErrorMessage name="dear" element={<span/>}/>
                            <br/>
                        </div>

                        <div className="pb-4">
                            <label htmlFor="message">Message:</label>
                            <br/>
                            <Field
                                as="textarea"
                                id="message"
                                name="message"
                                placeholder="I will always Love you"
                                className="text-black w-full rounded outline-none h-32 pl-5 py-2"
                            />
                            <ErrorMessage name="message" element={<span/>}/>
                        </div>

                        <div className="pb-4">
                            <label htmlFor="from">From: </label>
                            <br/>
                            <Field 
                                id="from" 
                                name="from"
                                placeholder="Buloyskie"
                                className="text-black outline-none border-none rounded font-poppins w-full pl-5 py-2"
                                maxLength={'20'}
                            />
                            <ErrorMessage name="dear" element={<span/>}/>
                            <br/>
                        </div>

                        <button type="submit" className="bg-[#0F1CF3] hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-blue-700 rounded w-full">Post</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Post
