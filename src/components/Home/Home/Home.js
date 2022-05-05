import React from 'react';
import banner from "../../../images/banner.jpg"
import Inventory from '../../Pages/Inventory/Inventory';
import "./Home.css"

const Home = () => {
    return (
        <div className=''>
            <div className='banner-image'>
                <img src={banner} alt="" />
            </div>
            <Inventory></Inventory>
        </div>
    );
};

export default Home;