// import React from "react";
// import Navbar from "./Navbar";

// export const LoginPage = () => {
//   return (
//     <div className="absolute w-full h-[100vh] py-[25px] ">
//       {/* <div className="navbar w-screen h-[70px] flex justify-center items-center p-[16px]"> */}
//       <img
//         className="h-[33px] w-[159.26px] m-auto inset-1"
//         src="/src/assets/logo.svg"
//         alt="atharva logo"
//       />
//       {/* </div> */}
//       <div className="h-max w-full absolute m-auto p-[20px] inset-1 flex flex-col text-center gap-[32px]">
//         <h1 className="text-[32px] font-bold tracking-tighter">
//           Sign in to your Account
//         </h1>
//         <button
//           className="flex justify-center items-center gap-[10px] border border-[#EFF0F6] rounded-[10px] w-full h-[48px] shadow-[0px_4px_4px_0px_#00000040];
// ">
//           <div className="flex w-max gap-[10px] h-min">
//             <img
//               className="h-[18px] w-[18px] my-[2px]"
//               src="src/assets/google.png"
//               alt="google"
//             />
//             <p className="text-[14px] font-semibold">Continue with Google</p>
//           </div>
//         </button>
//         <h3 className="text-[#6C7278] text-[12px]">
//           Don’t have an account?{" "}
//           <a className="text-[#4D81E7]" href="">
//             Sign Up
//           </a>
//         </h3>
//       </div>
//     </div>
//   );
// };



import React from "react";
import Navbar from "./Navbar";

export const LoginPage = () => {
  return (
    <div className=" w-full h-[100%] py-[25px] m-0">
      <img
        className="h-[33px] w-[159.26px] m-auto inset-0"
        src="/src/assets/logo.svg"
        alt="atharva logo"
      />
      <div className="h-max w-full absolute  p-[20px] flex inset-0 m-auto flex-col text-center gap-[32px]">
        <h1 className="text-[32px] font-bold tracking-tighter">
          Sign in to your Account
        </h1>
        <button
          className="flex justify-center items-center gap-[10px] border border-[#EFF0F6] rounded-[10px] w-full h-[48px] shadow-[0px_4px_4px_0px_#00000040]"
        >
          <div className="flex w-max gap-[10px] h-min">
            <img
              className="h-[18px] w-[18px] my-[2px]"
              src="src/assets/google.png"
              alt="google"
            />
            <p className="text-[14px] font-semibold">Continue with Google</p>
          </div>
        </button>
        <h3 className="font-semibold text-[#6C7278] text-[12px]">
          Don’t have an account?{" "}
          <a className="text-[#4D81E7]" href="">
            Sign Up
          </a>
        </h3>
      </div>
    </div>
  );
};
