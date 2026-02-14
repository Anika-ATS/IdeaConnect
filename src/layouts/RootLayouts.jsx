import React from 'react';
import { Outlet } from 'react-router';
//import Footer from '../pages/Shared/Footer/Footer';
//import NavBar from '../pages/Shared/NavBar/NavBar';

const RootLayouts = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            
            <Outlet></Outlet>
          
        </div>
    );
};

export default RootLayouts;