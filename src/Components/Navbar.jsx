import React from 'react';
import { NavLink } from 'react-router';
import logoImg from '../assets/logo.png'
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start mr-5 md:ml-10">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <NavLink to='/' className={({ isActive }) => isActive ? "text-purple-600 underline font-semibold bg-white" : ""}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/apps' className={({ isActive }) => isActive ? "text-purple-600 underline font-semibold bg-white" : ""}>Apps</NavLink>
                        </li>
                        <li>
                            <NavLink to='/installations' className={({ isActive }) => isActive ? "text-purple-600 underline font-semibold bg-white" : ""}>Installation</NavLink>
                        </li>
                    </ul>
                </div>
                <NavLink to='/' className="btn btn-ghost text-xl">
                    <div className='flex items-center gap-2'>
                        <img className='w-12 h-12 object-cover' src={logoImg} alt="" />
                        <p className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-500'>Hero.IO</p>
                    </div>
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink to='/' className={({ isActive }) => isActive ? "text-purple-600 underline font-semibold bg-white" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/apps' className={({ isActive }) => isActive ? "text-purple-600 underline font-semibold bg-white" : ""}>Apps</NavLink>
                    </li>
                    <li>
                        <NavLink to='/installations' className={({ isActive }) => isActive ? "text-purple-600 underline font-semibold bg-white" : ""}>Installation</NavLink>
                    </li>

                </ul>
            </div>
            <div className="navbar-end mr-5 md:mr-10">
                <a href='https://github.com/lijanahmmed' className="btn bg-gradient-to-r from-purple-600 to-purple-500">
                    <span className='flex items-center gap-2 text-white'>
                        <FaGithub></FaGithub>
                        <p>Contribute</p>
                    </span>
                </a>
            </div>
        </div>
    );
};

export default Navbar;