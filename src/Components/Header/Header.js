import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='flex justify-between items-center py-4 px-8 bg-amber-900 text-white'>
            <div>
                <h2 className='text-4xl font-mono'>Quizu <span className='text-emerald-200'>Judge</span></h2>
            </div>
            <div className='text-2xl nav-items flex gap-4 items-center'>
                <NavLink to='/quizes'>Quizes</NavLink>
                <NavLink to='/statistics'>Statistics</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
            </div>
        </div>
    );
};

export default Header;