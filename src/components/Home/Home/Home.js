import React from 'react';
import banner from "../../../images/banner.jpg"
import "./Home.css"

const Home = () => {
    return (
        <div className=''>
            <div className='banner-image'>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Home;