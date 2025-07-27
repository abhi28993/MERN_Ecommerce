import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { admin_login, messageClear } from "../../store/Reducers/authReducers";
import { PropagateLoader } from 'react-spinners';
import toast from 'react-hot-toast';

const AdminLogin = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const { loader, errorMessage, successMessage } = useSelector(state => state.auth || {})

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(state, "testStage1")
    dispatch(admin_login(state));
  };

  const overrideStyle = {
    display: 'flex',
    margin: '0 auto',
    height: '24px',
    justifyContent: 'center',
    alignItem: 'center'

  }


  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear())

    } 
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      navigate("/")

    } 
  }, [errorMessage, successMessage]);



  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[350px] text-[#ffffff] p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <div className="h-[70px] flex justify-center items-center">
            <div className="w-[180px] h-[50px]">
              <img className="w-full h-full" src={logo} alt="image1" />
            </div>
          </div>
          <form onSubmit={submit}>

            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                onChange={inputHandle}
                value={state.email}
                className=" px-3 py-2 border border-slate-400 bg-transparent rounded-md"
                type="text"
                placeholder="Email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Password</label>
              <input
                onChange={inputHandle}
                value={state.password}
                className=" px-3 py-2  border border-slate-400 bg-transparent rounded-md"
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                required
              />
            </div>
            <button disabled={loader ? true : false} className="bg-slate-800 w-full hover:shadow-blue-300/50 py-2 hover:shadow-lg text-white rounded-md px-7">
              {
                loader ? <PropagateLoader color="#fff" cssOverride={overrideStyle} /> : 'Login'
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
