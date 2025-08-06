import React from "react";
import "./App.css";
import Card from "./components/Card";
import Previous from "./components/Previous";
import Navbar from "./components/Navbar";
import { LoginPage } from "./components/LoginPage";

const App = () => {
  return (
    <>
      <LoginPage />
      {/* <div className="navbar w-screen h-[110px] flex justify-center items-end p-[16px] border-slate-200 border-b-[1px]">
        <img src="/src/assets/logo.svg" alt="atharva logo" />
      </div>
      <div className=" px-[20px] py-[20px] flex flex-col gap-[30px] mb-3">
        <p className="font-bold text-[32px]">Welcome</p>
        <Card />
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[16px] font-semibold">Previous Attendence</h3>
          <Previous />
          <Previous />
        </div>
      </div> */}
    </>
  );
};

export default App;
