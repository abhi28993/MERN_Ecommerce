import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Register = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        password: ""
    })


    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e)=>{
      e.preventDefault();
      console.log(state);
    }

    return (
        <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
            <div className="w-[350px] text-[#ffffff] p-2">
                <div className='bg-[#6f68d1] p-4 rounded-md'>
                    <h2 className='text-xl mb-3 font-bold'>
                        Welcome to Ecommerce
                    </h2>
                    <p className="text-sm mb-3 font-medium">Please register your account</p>
                    <form onSubmit={submit}>
                        <div className="flex flex-col w-full gap-1 mb-3">
                            <label htmlFor="name">Name</label>
                            <input className="px-3 py-2  border border-slate-400 bg-transparent rounded-md" onChange={inputHandle} type="text" placeholder="Name" id="name" name="name" value={state.name}  required />
                        </div>
                        <div className="flex flex-col w-full gap-1 mb-3">
                            <label htmlFor="email">Email</label>
                            <input className="px-3 py-2  border border-slate-400 bg-transparent rounded-md" onChange={inputHandle} type="text" placeholder="Email" id="email" name="email" value={state.email} required />
                        </div>
                        <div className="flex flex-col w-full gap-1 mb-3">
                            <label htmlFor="password">Password</label>
                            <input className="px-3 py-2  border border-slate-400 bg-transparent rounded-md" onChange={inputHandle} type="password" placeholder="Password" id="password" name="password" value={state.password} required />
                        </div>
                        <div className="flex items-center w-full gap-3 mb-3">
                            <input className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-blue-500" type="checkbox" name="checkbox" id="checkbox" />
                            <label htmlFor="checkbox"> I agree to privacy policy & terms</label>
                        </div>
                        <button className="bg-slate-800 w-full hover:shadow-blue-300/50 py-2 hover:shadow-lg text-white rounded-md px-7">Sign Up</button>
                        <div className=" flex item-center mb-3  gap-3 justify-center">
                            <p>Already Have an account ? <Link className='font-bold' to="/login">Sign In</Link></p>

                        </div>
                        <div className="w-full flex justyfy-center item-center mb-3">
                            <div className='w-[45%] bg-slate-700 h-[1px]'></div>
                            <div className='w-[10%] flex justify-center items-center h-[1px]'>Or</div>
                            <div className='w-[45%] bg-slate-700 h-[1px]'></div>
                        </div>
                        <div className="flex justify-center items-center gap-3 ">
                            <div className="w-[135px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center  overflow-hidden">
                                <span><FaGoogle /></span>
                            </div>
                            <div className="w-[135px] h-[35px] flex rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50 justify-center cursor-pointer items-center  overflow-hidden">
                                <span><FaFacebookF />
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register