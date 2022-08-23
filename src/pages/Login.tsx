import React from "react";
import Logo from "../media/icons/logo.png";

interface Props {}

const Login: React.FC<Props> = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="flex w-1/2 items-center justify-center">
        <div className="flex flex-col w-96 items-center p-8 border-slate-400 border-2 rounded-lg">
          <div className="flex flex-col pb-10 items-center">
            <img src={Logo} alt="logo" className="w-16 select-none pb-2" />
            <h1 className="text-2xl font-semibold">Fitness Tracking</h1>
          </div>
          <div className="flex flex-col pb-10 items-center gap-y-4 w-full">
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Email"
            />
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
            />
            <button
              className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
              type="button"
              style={{
                background: `linear-gradient(
                          to right,
                          #0f172a,
                          #1e293b,
                          #334155,
                          #475569
                        )`
              }}
            >
              Log in
            </button>
            <p>Forgotten password?</p>
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <p>Don't have an account?</p>
            <button className="bg-transparent hover:bg-slate-500 text-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded">
              Signup
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex w-1/2 min-h-screen"
        style={{
          background: `linear-gradient(
                          to right,
                          #0f172a,
                          #1e293b,
                          #334155
                        )`
        }}
      ></div>
    </div>
  );
};

export default Login;
