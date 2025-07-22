import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useDispatch } from "react-redux";
import { admin_login } from "../../store/Reducers/authReducers";

const AdminLogin = () => {
  const dispatch = useDispatch();

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
    dispatch(admin_login(state));
  };
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
            <button className="bg-slate-800 w-full hover:shadow-blue-300/50 py-2 hover:shadow-lg text-white rounded-md px-7">
              Log In{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
