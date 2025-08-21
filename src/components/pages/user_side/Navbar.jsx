import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => { //props
    const navigate = useNavigate();
    const showlogout = () => {
        navigate('/ShowLogOut')
    }
    return (
    <div>
<<<<<<< HEAD
        <div className="navbar absolute w-screen h-[110px] flex justify-between items-end p-[16px] border-slate-200 border-b-[1px]">
=======
        <div className="navbar w-screen h-[110px] flex justify-between items-end p-[16px] border-slate-200 border-b-[1px]">
>>>>>>> c60ad5ad339cbeffe18f84af1b8958915ec3ac1e
        <img src="/src/assets/logo.png" alt='atharva logo'/>
        <img onClick={showlogout} src="/src/assets/Profile.png" alt="profile" className='h-[27px] w-[27px]'/>
        {/* <div>{props.name}</div> */}
        </div>
    </div>
    )
}

export default Navbar
