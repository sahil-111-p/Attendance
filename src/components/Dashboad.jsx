import React from 'react';
import Card from "./components/Card";
import Previous from "./components/Previous";
import Navbar from "./components/Navbar";
import { LoginPage } from "./components/LoginPage";

const Dashboad = () => {
  return (
    <>
      <div className="navbar w-full h-[110px] flex justify-between items-end p-[16px] border-slate-200 border-b-[1px]">
        <img src="/src/assets/logo.svg" alt="Atharva logo" />
        <img src="/src/assets/profile.svg" alt="Profile" />
      </div>
      <div className=" px-[20px] py-[20px] flex flex-col gap-[30px] mb-[12px]">
        <p className="font-bold text-[32px]">Welcome</p>
        <Card />
        <button className="text-[14px] flex justify-center p-[10px] bg-[#1D61E7] transition-all duration-100 shadow-[0px_4px_4px_0px_#00000040] active:shadow-[0px_5px_10px_0px_#00000000]
 rounded-[10px] gap-[8px] text-white">
        <img src="/src/assets/QR_logo.svg" alt="Profile" />
        <p>Scan QR</p>
        </button>
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[16px] font-semibold">Previous Attendence</h3>
          <Previous />
          <Previous />
        </div>
      </div>
    </>
  );
}

export default Dashboad;
